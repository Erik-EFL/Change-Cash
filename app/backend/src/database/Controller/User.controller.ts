import { Request, Response } from "express";
import Validation from "../../middlewares/validations/Validations";
import JWTService from "../Services/Auth/Jwt.auth";
import TransactionsServices from "../Services/Transactions.services";
import UserService from "../Services/User.services";

export default class UserController {
  getUserActualUser = async (req: Request, res: Response) => {
    const { authorization } = req.headers;

    Validation.validateHeader(authorization);

    const token = await JWTService.decode(authorization);

    const user = await UserService.findAccountById(token.id);
    res.status(200).json(user);
  };

  getUserById = async (req: Request, res: Response) => {
    /* Responsável por pegar o Id */
    const { authorization } = req.headers;
    Validation.validateHeader(authorization);
    const token = await JWTService.decode(authorization);
    /* Responsável por achar o usuario */
    const user = await UserService.findUserById(token.id);
    res.status(200).json(user);
  };

  userInfo = async (req: Request, res: Response) => {
    /* Responsável por pegar o Id */
    const { authorization } = req.headers;
    Validation.validateHeader(authorization);
    const token = await JWTService.decode(authorization);
    /* Responsável por achar o usuario */
    const user = await UserService.findUserById(token.id);
    const { username, email } = user;
    /* Responsável por achar a conta */
    const account = await UserService.findAccountById(token.id);
    /* Responsável por achar as transações */
    const transactions = await TransactionsServices.getTransactions(token.id);
    /* Responsável por criar o objeto */
    const userObject = {
      user: {
        username,
        email,
      },
      account,
      transactions,
    };

    res.status(200).json(userObject);
  };
}
