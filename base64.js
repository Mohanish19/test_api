const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

const port = process.env.PORT;
app.get('/encode', (req, res) => {
  const { text } = req.query;

  if (!text) {
    return res.status(400).json({ error: 'Text parameter is required.' });
  }

  const encodedText = Buffer.from(text).toString('base64');

  return res.json({ encodedText });
  // "text": "helloWorld",
  // "base64": "SGVsbG8gV29ybGQ="
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
