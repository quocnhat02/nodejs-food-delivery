import User from '../models/User';
import { Utils } from '../utils/Utils';
import { NodeMailer } from '../utils/NodeMailer';
import * as Bcrypt from 'bcrypt';

export class UserController {
  private static encryptPassword(req, res, next) {
    return new Promise((resolve, reject) => {
      Bcrypt.hash(req.body.password, 10, function (err, hash) {
        if (err) {
          reject(err);
        } else {
          resolve(hash);
        }
      });
    });
  }

  static async signup(req, res, next) {
    const { name, email, phone, type, status } = req.body;
    const verification_token = Utils.generateVerificationToken();

    try {
      const hash = await UserController.encryptPassword(req, res, next);

      const data = {
        email,
        verification_token,
        verification_token_time: Date.now() + new Utils().MAX_TOKEN_TIME,
        password: hash,
        name,
        phone,
        type,
        status,
      };
      const user = await new User(data).save();

      res.status(201).send(user);

      // send email to user for verification
      await NodeMailer.sendMail({
        to: [user.email],
        subject: 'Email verification',
        html: `<h1>Your OTP is ${verification_token}</h1>`,
      });
    } catch (error) {
      next(error);
    }
  }

  static async verify(req, res, next) {
    const { verification_token, email } = req.body;
    try {
      const user = await User.findOneAndUpdate(
        {
          email,
          verification_token,
          verification_token_time: {
            $gt: Date.now(),
          },
        },
        {
          email_verified: true,
        },
        {
          new: true,
        }
      );

      if (user) {
        res.send(user);
      } else {
        throw new Error(
          'Email verification token is expired. Please try again!'
        );
      }
    } catch (error) {
      next(error);
    }
  }

  static async resendVerificationEmail(req, res, next) {
    const verification_token = Utils.generateVerificationToken();
    const { email } = req.query;

    try {
      const user = await User.findOneAndUpdate(
        {
          email,
        },
        {
          verification_token,
          verification_token_time: Date.now() + new Utils().MAX_TOKEN_TIME,
        }
      );

      if (user) {
        await NodeMailer.sendMail({
          to: [user.email],
          subject: 'Resend email verification',
          html: `<h1>Your OTP is ${verification_token}</h1>`,
        });
        res.json({
          success: true,
        });
      } else {
        throw new Error(`User doesn't exist`);
      }
    } catch (error) {
      next(error);
    }
  }
}
