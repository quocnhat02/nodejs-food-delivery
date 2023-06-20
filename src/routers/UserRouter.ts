import { Router } from 'express';

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
    this.router.get('/login', (req, res) => {
      console.log('login');
    });

    this.router.get('/test', (req, res) => {
      console.log('test');
    });
  }

  postRoutes() {}

  putRoutes() {}

  patchRoutes() {}

  deleteRoutes() {}
}

export default new UserRouter().router;
