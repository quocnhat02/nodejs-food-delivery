import * as express from 'express';
import * as mongoose from 'mongoose';
import { getEnvironmentVariables } from './environments/environment';
import UserRouter from './routers/UserRouter';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as compression from 'compression';

export class Server {
  public app: express.Application = express();

  constructor() {
    this.setConfigs();
    this.setRoutes();
    this.error404Handler();
    this.handleErrors();
  }

  setConfigs() {
    this.connectMongoDB();
    this.handleCompress();
    this.allowCors();
    this.configureBodyParser();
  }

  connectMongoDB() {
    mongoose.connect(getEnvironmentVariables().db_uri).then(() => {
      console.log('Connected to mongodb');
    });
  }

  configureBodyParser() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
  }

  handleCompress() {
    this.app.use(compression());
  }

  allowCors() {
    this.app.use(cors());
  }

  setRoutes() {
    this.app.use('/api/user', UserRouter);
  }

  error404Handler() {
    this.app.use((req, res) => {
      res.status(404).json({
        message: 'Not found',
        status_code: 404,
      });
    });
  }

  handleErrors() {
    this.app.use((err, req, res, next) => {
      const errorStatus = req.errorStatus || 500;
      res.status(errorStatus).json({
        message: err.message || 'Something went wrong. Please try again',
        status_code: errorStatus,
      });
    });
  }
}
