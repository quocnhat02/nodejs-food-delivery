import { body, query } from 'express-validator';
import User from '../models/User';

export class UserValidators {
  static signup() {
    return [
      body('name', 'Name is required').isString(),
      body('phone', 'Phone number is required').isString(),
      body('email', 'Email is required')
        .isEmail()
        .custom((email, { req }) => {
          return User.findOne({ email })
            .then((user) => {
              if (user) {
                throw 'User already exists.';
              } else {
                return true;
              }
            })
            .catch((error) => {
              throw new Error(error);
            });
        }),
      body('password', 'Password is required')
        .isAlphanumeric()
        .isLength({ min: 8, max: 25 })
        .withMessage('Password must be between 8-25 characters'),
      body('type', 'User role  type is required').isString(),
      body('status', 'User status  type is required').isString(),
    ];
  }

  static verifyUserEmail() {
    return [
      body(
        'verification_token',
        'Email verification token is required'
      ).isNumeric(),
      body('email', 'Email is required').isEmail(),
    ];
  }

  static resendVerificationEmail() {
    return [];
  }

  static verifyUserForResendEmail() {
    return [query('email', 'Email is required').isEmail()];
  }
}
