import User from '../models/User';
import { Utils } from '../utils/Utils';
import { NodeMailer } from '../utils/NodeMailer';

export class UserController {
  static async signup(req, res, next) {
    const { name, email, phone, password, type, status } = req.body;
    const verification_token = Utils.generateVerificationToken(5);

    const data = {
      email,
      verification_token,
      verification_token_time: Date.now() + new Utils().MAX_TOKEN_TIME,
      password,
      name,
      phone,
      type,
      status,
    };

    try {
      let newUser = await new User(data).save();

      res.status(201).send(newUser);

      // send email to user for verification
      await NodeMailer.sendMail({
        to: [email],
        subject: 'Test',
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
}
