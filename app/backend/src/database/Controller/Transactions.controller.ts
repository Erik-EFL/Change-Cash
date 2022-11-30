import { Request, Response } from "express";
import CustomError from "../../middlewares/Custom.error";
import Validation from "../../middlewares/validations/Validations";
import JWTService from "../Services/Auth/Jwt.auth";
import TransactionsServices from "../Services/Transactions.services";

export default class TransactionsController {
  createTransaction = async (req: Request, res: Response) => {
    const { authorization } = req.headers;

    Validation.validateHeader(authorization as string);

    const { nameDebit, value, nameCredited } = req.body;

    const caseSensitiveConvert = (name: string) => {
      return name.toLowerCase();
    }

    const newNameDebit = caseSensitiveConvert(nameDebit) as string;
    const newNameCredited = caseSensitiveConvert(nameCredited) as string;

    const getUserDebitedByName = await TransactionsServices.findUserByUsername(newNameDebit);
    const getUserCreditedByName = await TransactionsServices.findUserByUsername(newNameCredited);

    if (!getUserCreditedByName || !getUserDebitedByName) {
      CustomError.notFound("User not found");
    }

    const { id: idDebited } = getUserDebitedByName;
    const { id: idCredited } = getUserCreditedByName;

    if (nameDebit === idDebited) {
      CustomError.badRequest("You can't transfer to yourself");
    }

    const debitedAccountId = idDebited;
    const creditedAccountId = idCredited;

    await TransactionsServices.createTransaction({
      debitedAccountId,
      creditedAccountId,
      value,
      createdAt: new Date(),
    });

    res.sendStatus(201);
  };

  getTransactions = async (req: Request, res: Response) => {
    const { authorization } = req.headers;

    Validation.validateHeader(authorization as string);

    const decoded = await JWTService.decode(authorization);

    if (!decoded) {
      CustomError.unauthorized("Invalid token");
    }

    const { id } = decoded;

    const transactions = await TransactionsServices.getTransactions(
      Number(id)
    );

    res.status(200).json(transactions);
  };
}
