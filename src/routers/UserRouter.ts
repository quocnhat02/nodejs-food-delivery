import { Router } from 'express';
import { UserController } from '../controllers/UserController';
import { UserValidators } from '../validators/UserValidators';

import { query } from 'express-validator';

class UserRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.getRoutes();
    this.postRoutes();
    this.putRoutes();
    this.patchRoutes();
    this.deleteRoutes();
  }

  getRoutes() {
    this.router.post('/signup', UserValidators.signup(), UserController.signup);
  }

  postRoutes() {}

  putRoutes() {}

  patchRoutes() {}

  deleteRoutes() {}
}

export default new UserRouter().router;
