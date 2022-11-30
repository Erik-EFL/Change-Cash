import { NextFunction, Request, Response } from "express";
import UserService from "../database/Services/User.services";
import JWTService from "../database/Services/Auth/Jwt.auth";
import CustomError from "./Custom.error";
import Validation from "./validations/Validations";

export default class AuthMiddleware {
  static async verifyValidToken(req: Request, _res: Response, next: NextFunction) {
    const { authorization } = req.headers;
    if (!authorization) CustomError.unauthorized('Token not found');

    const token = authorization as string;

    if (!token) {
      CustomError.unauthorized("Token not provided or expired");
    }

    await JWTService.tokenVerify(token);

    next();
  }

  static async verifyIfUserIsOwnerAccount(req: Request, _res: Response, next: NextFunction) {
    const { authorization } = req.headers;
    Validation.validateHeader(authorization);
    const token = await JWTService.decode(authorization);
    const account = await UserService.findAccountById(token.id);
    const user = await UserService.findAccountById(token.id);

    if (account.id !== user.id) {
      CustomError.unauthorized("You don't have permission to access this route");
    }

    next();
  }
}
