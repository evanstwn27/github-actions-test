const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World! I am using Github Actions for CI/CD.');
});

app.get('/info', (req, res) => {
  res.json({
    name: 'Simple Web Server',
    version: '1.0.0',
    uptime: process.uptime()
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});