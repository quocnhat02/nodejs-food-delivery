export class UserController {
  static login(req, res) {
    const data = { name: 'Nhat' };
    res.status(200).send(data);
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
