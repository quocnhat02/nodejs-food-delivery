export class UserController {
  static login(req, res, next) {
    // const data = { name: 'Nhat' };
    // res.status(200).send(data);
    (req as any).errorStatus = 422;
    const error = new Error('User email or password does not match');
    next(error);
  }

  static test1(req, res, next) {
    console.log('test');
    (req as any).msg = 'This is a test';
    next();
  }

  static test2(req, res) {
    res.send((req as any).msg);
  }
}
