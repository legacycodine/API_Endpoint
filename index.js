const express = require('express');
const app = express();

// Define an endpoint that takes two query parameters
app.get('/endpoint', (req, res) => {
  const slackName = req.query.slack_name;
  const track = req.query.track;

  // Get current day of the week
  const currentDate = new Date();
  const dayOfWeek = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(currentDate);

  // Get current UTC time (with validation of +/-2)
  const utcOffset = currentDate.getTimezoneOffset() / 60;
  const utcTime = currentDate.toISOString().slice(0, 19) + 'Z';

  // GitHub URLs
  const githubFileUrl = 'https://github.com/legacycodine/API_Endpoint/blob/main/index.js'; // Replace with your actual file URL
  const githubSourceCodeUrl = 'https://github.com/legacycodine/API_Endpoint'; // Replace with your actual repository URL

  // Response object
  const response = {
    slack_name: slackName,
    current_day: dayOfWeek,
    utc_time: utcTime,
    track: track,
    github_file_url: githubFileUrl,
    github_repo_url: githubSourceCodeUrl,
    status_code: '200'
  };

  res.json(response);
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});