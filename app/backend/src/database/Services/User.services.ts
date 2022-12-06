import { PrismaClient } from '@prisma/client';
import { Md5 } from 'ts-md5';
import { IUser } from '../../interfaces/IUser.interface';
import CustomError from '../../middlewares/Custom.error';
import JWTService from './Auth/Jwt.auth';
import Validation from '../../middlewares/validations/Validations';

const prisma = new PrismaClient()

export default class UserService {
  static findUserByEmail = async (email: string) => {
    const user = await prisma.users.findFirst({
      where: {
        email,
      },
    });

    if (user) CustomError.conflict('User already exists');

    return user;
  };

  static findUserById = async (id: number) => {
    const user = await prisma.users.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!user) CustomError.notFound('User not found');

    return user;
  };

  static findUserByUsername = async (username: string) => {
    const user = await prisma.users.findFirst({
      where: {
        username,
      },
    });

    if (!user) CustomError.notFound('User not found');

    return user;
  };

  static findAccountById = async (accountId: number) => {
    const account = await prisma.accounts.findFirst({
      where: {
        id: accountId,
      },
    });

    if (!account) CustomError.notFound('User not found');

    return account;
  };

  static createUser = async (data: any): Promise<string> => {
    const { username, email, password } = data;
    Validation.registerBody(data);

    const findUser = await this.findUserByEmail(email);

    if (findUser) CustomError.conflict('User already exists');

    const createNewAccount = await prisma.accounts.create({
      data: {
        balance: 100,
      },
    });

    await this.findAccountById(createNewAccount.id);

    const hash = Md5.hashStr(password);

    const caseSensitiveConvert = (name: string) => {
      return name.toLowerCase();
    }

    const newName = caseSensitiveConvert(username) as string;

    const createNewUser = await prisma.users.create({
      data: {
        username: newName,
        email,
        password: hash,
        accountId: createNewAccount.id,
      } as IUser,
    });

    const newPayload = {
      data: {
        username: createNewUser.username,
        email: createNewUser.email,
        password: createNewUser.password,
      }
    }

    const token = JWTService.sign(newPayload);

    return token;
  };
}
