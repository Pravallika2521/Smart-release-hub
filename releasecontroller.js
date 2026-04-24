const { getJiraTickets } = require('../services/jiraService');
const { getPRs } = require('../services/githubService');
const { combine } = require('../services/aggregator');
 
exports.getReleaseData = async (req, res) => {
  try {
    const tickets = await getJiraTickets();
    const prs = await getPRs();
 
    const result = combine(tickets, prs);
 
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
