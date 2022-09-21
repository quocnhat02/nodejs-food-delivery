const express = require('express');
const { logger } = require('./logger');
const { authorize } = require('./authorize');

const app = express();

// req => middleware => res

// app.use([logger, authorize]);
app.use(express.static('./public'));

// api/home/about/products
app.get('/', (req, res) => {
  res.send('Home');
});

app.get('/about', (req, res) => {
  res.send('About');
});

app.get('/api/products', (req, res) => {
  res.send('Products');
});

app.get('/api/items', [logger, authorize], (req, res) => {
  console.log(req.user);
  res.send('Items');
});

app.listen(5000, () => {
  console.log('Server is listening on port 5000...');
});
