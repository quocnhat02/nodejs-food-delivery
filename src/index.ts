import * as express from 'express';

let app: express.Application = express();

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});

app.get('/api/users/login', (req, res) => {
  res.json({
    name: 'Nhat',
  });
});
