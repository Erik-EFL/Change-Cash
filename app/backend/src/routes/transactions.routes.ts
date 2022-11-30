import { Router, Request, Response } from "express";
import TransactionsController from "../database/Controller/Transactions.controller";
import auth from "../middlewares/auth.middleware";

const transactions = Router();
const transactionsController = new TransactionsController();

transactions.post("/", auth.verifyValidToken, auth.verifyIfUserIsOwnerAccount, (req: Request, res: Response) => transactionsController.createTransaction(req, res));
transactions.get(`/`, auth.verifyValidToken, auth.verifyIfUserIsOwnerAccount, (req: Request, res: Response) => transactionsController.getTransactions(req, res));

export default transactions;
