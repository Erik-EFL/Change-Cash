import { Router, Request, Response } from "express";
import RegisterController from "../database/Controller/Register.controller";

const register = Router();

const registerController = new RegisterController();

register.post("/", (req: Request, res: Response) => registerController.register(req, res));

export default register;
