const axios = require('axios');
 
exports.getJiraTickets = async () => {
  const response = await axios.get(
    `https://${process.env.JIRA_DOMAIN}/rest/api/3/search`,
    {
      headers: {
        Authorization: `Basic ${Buffer.from(
          `${process.env.JIRA_EMAIL}:${process.env.JIRA_API_TOKEN}`
        ).toString('base64')}`,
        Accept: 'application/json'
      },
      params: {
        jql: `project = ${process.env.JIRA_PROJECT}`
      }
    }
  );
 
  return response.data.issues.map(issue => ({
    key: issue.key,
    summary: issue.fields.summary,
    status: issue.fields.status.name
  }));
};
