import { PrismaClient } from "@prisma/client";
import { IAccount } from '../../interfaces/IAccount.interface';
import { ITransaction } from "../../interfaces/ITransaction.interface";
import CustomError from '../../middlewares/Custom.error';
import UserService from "./User.services";

const prisma = new PrismaClient();

export default class TransactionsServices {
  static findAccountById= async (id: number): Promise<IAccount> => {
    const account = await prisma.accounts.findUnique({
      where: {
        id: Number(id),
      },
    }) as any;
    return account;
  };

  static findUserByUsername = async (username: string) => {
    const user = await prisma.users.findFirst({
      where: {
        username,
      },
    });

    return user;
  }

  static countTransactions = async (accountId: number) => {
    const count = prisma.transactions.count({
      where: {
        OR: [
          {
            debitedAccountId: accountId,
          },
          {
            creditedAccountId: accountId,
          },
        ],
      },
    });

    return count;
  }

  static findTransactionsById = async (accountId: number) => {
    const transactions = await prisma.transactions.findMany({
      where: {
        OR: [
          {
            debitedAccountId: accountId,
          },
          {
            creditedAccountId: accountId,
          },
        ],
      },
    });

    return transactions;
  }


  static createTransaction = async (data: ITransaction): Promise<void> => {
    const {
      debitedAccountId,
      creditedAccountId,
      value,
      createdAt,
    } = data;

    if (debitedAccountId === creditedAccountId) {
      CustomError.badRequest("You can't transfer to yourself");
    }

    if (value <= 0) {
      CustomError.badRequest("Invalid value");
    }

    const findCreditedAccountId = await TransactionsServices.findAccountById(creditedAccountId);
    const findDebitedAccountId = await TransactionsServices.findAccountById(debitedAccountId);


    if (!findCreditedAccountId) {
      CustomError.notFound("Credited account not found");
    }

    const { balance } = findDebitedAccountId;

    if (balance < value) CustomError.badRequest('Insufficient funds');

    await prisma.transactions.create({
      data: {
        debitedAccountId: Number(debitedAccountId),
        creditedAccountId: Number(creditedAccountId),
        value: Number(value),
        createdAt: new Date(createdAt),
      },
    });

    await prisma.accounts.update({
      where: {
        id: Number(debitedAccountId),
      },
      data: {
        balance: Number(balance) - Number(value),
      },
    });

    await prisma.accounts.update({
      where: {
        id: Number(creditedAccountId),
      },
      data: {
        balance: Number(findCreditedAccountId.balance) + Number(value),
      },
    });
  };

  static getTransactions = async (accountId: number) => {
    const transactions = await prisma.transactions.findMany({
      where: {
        OR: [
          {
            debitedAccountId: accountId,
          },
          {
            creditedAccountId: accountId,
          },
        ],
      },
    });

    const getAllCreditedUserName = await Promise.all(
      transactions.map(async (transaction) => {
        const { creditedAccountId } = transaction;
        const findUserName = await UserService.findUserById(creditedAccountId);
        return findUserName.username;
      }),
    );

    const getAllDebitedUserName = await Promise.all(
      transactions.map(async (transaction) => {
        const { debitedAccountId } = transaction;
        const findUserName = await UserService.findUserById(debitedAccountId);
        return findUserName.username;
      }),
    );

    const newObj = transactions.map((transaction, index) => {
      const { value, createdAt, id } = transaction;
      return {
        id,
        debitedAccountId: getAllDebitedUserName[index],
        creditedAccountId: getAllCreditedUserName[index],
        value,
        createdAt,
      };
    });

    return newObj;
  }
}
