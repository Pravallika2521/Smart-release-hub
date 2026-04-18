const express = require("express");
const axios = require("axios");
 
const app = express();
 
// Replace with your details
const JIRA_URL = "https://pravallikagumudavelli.atlassian.net";
const EMAIL = "pravallikagumudavelli@gmail.com";
const API_TOKEN = ATATT3xFfGF00V5b_p35QFDajwzG55hZFN4cQqVDyWpk8wDuvluAS8i1mx7VT0elkM2tPgf83Hl3q8wp8v3O2h0chy5XhjzutUF0jNOrufwVkN6xrSWMH-nq4DWHHJU5nsZ4J_00dikL4JpvxERQcjjk3E6mESKgSCwSYhpjSZNhAkyJ65BDekE=A839F050;
 
app.get("/jira-data", async (req, res) => {
  try {
    const response = await axios.get(
      `${JIRA_URL}/rest/api/3/search`,
      {
        auth: {
          username: EMAIL,
          password: API_TOKEN
        }
      }
    );
 
    const issues = response.data.issues;
 
    let openBugs = 0;
    let doneTasks = 0;
 
    issues.forEach(issue => {
      if (issue.fields.issuetype.name === "Bug" &&
          issue.fields.status.name !== "Done") {
        openBugs++;
      }
 
      if (issue.fields.status.name === "Done") {
        doneTasks++;
      }
    });
 
    res.json({
      totalIssues: issues.length,
      openBugs,
      doneTasks
    });
 
  } catch (error) {
    res.status(500).send("Error fetching Jira data");
  }
});
 
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
