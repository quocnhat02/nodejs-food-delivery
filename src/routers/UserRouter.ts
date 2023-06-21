import { Router } from 'express';
import { UserController } from '../controllers/UserController';
import { UserValidators } from '../validators/UserValidators';

import { query } from 'express-validator';
import { GlobalMiddleware } from '../middlewares/GlobalMiddleware';

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

  getRoutes() {}

  postRoutes() {
    this.router.post(
      '/signup',
      UserValidators.signup(),
      GlobalMiddleware.checkError,
      UserController.signup
    );
  }

  patchRoutes() {
    this.router.patch(
      '/verify',
      UserValidators.verifyUserEmail(),
      GlobalMiddleware.checkError,
      UserController.verify
    );
  }

  putRoutes() {}

  deleteRoutes() {}
}

export default new UserRouter().router;
