import { Router } from "express";
import LoginController from '../database/Controller/Login.controller';

const login = Router();

const loginController = new LoginController();

login.get('/validate', (req, res) => loginController.validateLogin(req, res));
login.post('/', (req, res) => loginController.login(req, res));

export default login;
