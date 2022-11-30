import { Router, Request, Response } from "express";
import UserController from "../database/Controller/User.controller";
import auth from "../middlewares/auth.middleware";

const user = Router();
const userController = new UserController();

user.get("/info", auth.verifyValidToken, auth.verifyIfUserIsOwnerAccount, (req: Request, res: Response) => userController.userInfo(req, res));

user.get("/:id", auth.verifyValidToken, auth.verifyIfUserIsOwnerAccount, (req: Request, res: Response) => userController.getUserById(req, res));

user.get("/account", auth.verifyValidToken, auth.verifyIfUserIsOwnerAccount, (req: Request, res: Response) => userController.getUserActualUser(req, res));


export default user;
