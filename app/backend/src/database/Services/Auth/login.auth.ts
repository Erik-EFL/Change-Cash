import { PrismaClient } from '@prisma/client';
import { Md5 } from 'ts-md5';
import CustomError from '../../../middlewares/Custom.error';
import JWTService from './Jwt.auth';
import PassWordAuth from './pass.auth';

const prisma = new PrismaClient()

export default class LoginService {
  static findByEmail = async (username: string) => {
    const caseSensitiveConvert = (name: string) => {
      return name.toLowerCase();
    }

    const newName = caseSensitiveConvert(username) as string;

    const user: any = await prisma.users.findUnique({
      where: {
        username: newName,
      },
    });

    if (user === null) CustomError.badRequest('User not found');

    return user;
  };

  static login = async (username: string, password: string) => {
    const userLogin = await this.findByEmail(username);

    if (!userLogin) CustomError.unauthorized('Incorrect user or password');

    const hash = Md5.hashStr(password);

    PassWordAuth.comparePassword(userLogin.password, hash);

    const token = JWTService.sign(userLogin);
    return token;
  };

  static validateLogin = async (token: string) => {
    const email = await JWTService.tokenVerify(token);
    const user = await this.findByEmail(email);
    if (!user) CustomError.unauthorized('Incorrect user or password');
    return user;
  };
}


