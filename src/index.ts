import * as express from 'express';
import * as mongoose from 'mongoose';
import { getEnvironmentVariables } from './environments/environment';

let app: express.Application = express();

mongoose.connect(getEnvironmentVariables().db_uri).then(() => {
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
