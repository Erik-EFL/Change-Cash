import { Request ,Response } from "express";
import Validation from '../../middlewares/validations/Validations';
import LoginService from "../Services/Auth/login.auth";

export default class LoginController {
  login = async (req: Request, res: Response) => {
    const { username, password } = req.body;
    Validation.loginBody({ username, password });
    const token = await LoginService.login(username, password);
    res.status(200).json({ token });
  }

  validateLogin = async (req: Request, res: Response) => {
    const { authorization } = req.headers;
    const validatedToken = Validation.validateHeader(authorization as string);
    const token = await LoginService.validateLogin(validatedToken);
    res.status(200).json({ token });
  }
}
