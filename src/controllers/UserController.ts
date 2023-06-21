import User from '../models/User';
import { matchedData, validationResult, body } from 'express-validator';

export class UserController {
  static async signup(req, res, next) {
    const result = validationResult(req);

    if (!result.isEmpty()) {
      next(new Error(result.array()[0].msg));
    } else {
      const { name, email, phone, password, type, status } = req.body;
      const data = {
        email,
        password,
        name,
        phone,
        type,
        status,
      };

      try {
        const newUser = await new User(data).save();
        res.status(201).send(newUser);
      } catch (error) {
        next(error);
      }
    }
  }
}
