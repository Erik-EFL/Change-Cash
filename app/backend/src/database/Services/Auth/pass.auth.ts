import CustomError from '../../../middlewares/Custom.error';

export default class PassWordAuth {
  static comparePassword(password: string, hash: string): boolean {
    const compare = password === hash;

    if (!compare) CustomError.unauthorized('Incorrect email or password');

    return compare;
  }
}
