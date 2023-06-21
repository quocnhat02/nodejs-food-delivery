import User from '../models/User';
import { matchedData, validationResult } from 'express-validator';

export class UserController {
  static signup(req, res, next) {
    const result = validationResult(req);

    const email = req.body.email;
    const password = req.body.password;

    if (result.isEmpty()) {
      const data = matchedData(req);
      return res.send(`Hello, ${data.email}!`);
    }

    res.status(400).send({ errors: result.array().map((x) => x.msg) });

    // const user = new User({ email, password });

    // user
    //   .save()
    //   .then((user) => {
    //     res.status(201).send(user);
    //   })
    //   .catch((err) => {
    //     next(err);
    //   });
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
