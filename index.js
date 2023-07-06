const express = require('express');

const app = express();

require('dotenv').config();

const port = process.env.PORT;

app.get('/health', (req, res) => {
  res.sendStatus(200);
});
app.listen(port, () => {
  console.log('Server has started');
});
