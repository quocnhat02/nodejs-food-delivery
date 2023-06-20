import { Router } from 'express';
import { UserController } from '../controllers/UserController';

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
    this.router.get('/login', UserController.login);

    this.router.get('/test', UserController.test1, UserController.test2);
  }

  postRoutes() {}

  putRoutes() {}

  patchRoutes() {}

  deleteRoutes() {}
}

export default new UserRouter().router;
