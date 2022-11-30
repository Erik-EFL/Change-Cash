import Joi from 'joi';
import { joiPasswordExtendCore } from 'joi-password';
import CustomError from '../Custom.error';

const joiPassword = Joi.extend(joiPasswordExtendCore);

export default class Validation {
  static loginBody = (data: any) => {
    const schema = Joi.object({
      username: Joi.string().min(3).required(),
      password: Joi.string().required(),
    });

    const { value } = schema.validate(data);

    if (!value) CustomError.badRequest('All fields must be filled');

    return value;
  };

  static registerBody = (data: any) => {
    const schema = Joi.object({
      username: Joi.string().min(3).required(),
      email: Joi.string().email().required(),
      password: joiPassword.string()
        .minOfUppercase(1)
        .minOfNumeric(1)
        .noWhiteSpaces()
        .min(8)
        .required(),
    });

    const { value } = schema.validate(data);

    if (!value) CustomError.badRequest('All fields must be filled');

    return value;
  };

  static validateHeader = (token: string) => {
    const schema = Joi.object({
      token: Joi.string().required().token(),
    });

    const { value } = schema.validate({ token });

    if (!value) CustomError.badRequest('Token not found');

    return value;
  };
}
