const axios = require('axios');
 
exports.getPRs = async () => {
  const response = await axios.get(
    `https://api.github.com/repos/${process.env.GITHUB_REPO}/pulls?state=all`,
    {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`
      }
    }
  );
 
  return response.data.map(pr => ({
    title: pr.title,
    status: pr.state
  }));
};
