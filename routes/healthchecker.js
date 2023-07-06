const express = require('express');

const app = express();

app.get('/health', (req, res) => {
  const healthStatus = {
    status: 'ok',
    version: '1.0.0',
  };
  res.send.json(healthStatus);
});

module.exports = app;
