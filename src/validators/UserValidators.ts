import { body } from 'express-validator';

export class UserValidators {
  static signup() {
    return [
      body('email').isEmail().withMessage('Not a valid e-mail address'),
      body('password')
        .isLength({ min: 5 })
        .custom((value, { req }) => {
          if (req.body.email) {
            return true;
          } else {
            throw new Error('Fields Password is not available for validation');
          }
        }),
    ];
  }
}
