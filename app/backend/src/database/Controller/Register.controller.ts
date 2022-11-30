import { Request ,Response } from "express";
import Validation from "../../middlewares/validations/Validations";
import RegisterService from "../Services/User.services";

export default class RegisterController {
  register = async (req: Request, res: Response) => {
    const {
      username,
      email,
      password,
    } = req.body;
    Validation.registerBody({ username, email, password });
    const token = await RegisterService.createUser({username, email, password});
    res.status(201).json({ token });
  };
}
