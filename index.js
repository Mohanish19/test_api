const express = require('express');

const app = express();

require('dotenv').config();

const port = process.env.PORT;

app.get('/health', (req, res) => {
  res.sendStatus(200);
});

app.get('/encode', (req, res) => {
  const { text } = req.query;

  if (!text) {
    return res.status(400).json({ error: 'Text parameter is required.' });
  }

  const encodedText = Buffer.from(text).toString('base64');

  return res.json({ encodedText });
});

app.listen(port, () => {
  console.log('Server has started');
});
