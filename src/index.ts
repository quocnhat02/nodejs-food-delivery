import * as express from 'express';

let app: express.Application = express();

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});

app.use((req, res, next) => {
  console.log('middleware1');
  next();
});

app.get(
  '/api/users/login',
  (req, res, next) => {
    console.log('test');
    next();
  },
  (req, res, next) => {
    console.log('middleware2');
    res.send('test2');
  }
);
