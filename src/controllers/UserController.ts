import User from '../models/User';
import { Utils } from '../utils/Utils';
import { NodeMailer } from '../utils/NodeMailer';

export class UserController {
  static async signup(req, res, next) {
    const { name, email, password, phone, type, status } = req.body;
    const verification_token = Utils.generateVerificationToken();

    try {
      const hash = await Utils.encryptPassword(password);

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

      const payload = {
        user_id: user._id,
        email: user.email,
      };

      const token = Utils.jwtSign(payload);

      res.status(201).json({
        token,
        user,
      });

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

  static async login(req, res, next) {
    const user = req.user;
    const { password } = req.query;
    const data = {
      password,
      encrypt_password: user.password,
    };

    try {
      await Utils.comparePassword(data);

      const payload = {
        user_id: user._id,
        email: user.email,
      };

      const token = Utils.jwtSign(payload);

      res.status(201).json({
        token,
        user,
      });
    } catch (error) {
      next(error);
    }
  }
}
