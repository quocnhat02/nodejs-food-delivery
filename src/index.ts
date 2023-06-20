import * as express from 'express';
import * as mongoose from 'mongoose';

let app: express.Application = express();

mongoose.connect('mongodb://127.0.0.1:27017/swiggyCloneApp').then(() => {
  console.log('Connected to mongodb');
});

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
