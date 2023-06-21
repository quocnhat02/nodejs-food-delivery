import { validationResult } from 'express-validator';

export class GlobalMiddleware {
  static checkError(req, res, next) {
    const result = validationResult(req);

    if (!result.isEmpty()) {
      next(new Error(result.array()[0].msg));
    } else {
      next();
    }
  }
}
