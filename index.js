const https = require('https');
const path = require('path');
const express = require('express');
const helmet = require('helmet');

const PORT = 3000;

const app = express();

app.use(helmet());

app.get('/secret', (req, res) => {
  return res.send('Your personal secret value is 24');
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

https
  .createServer(
    {
      key: '',
      cert: '',
    },
    app
  )
  .listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
