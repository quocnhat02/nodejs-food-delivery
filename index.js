const path = require('path');
const express = require('express');

const PORT = 3000;

const app = express();

app.get('/', (req, res) => {
  res.send('Hello');
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
