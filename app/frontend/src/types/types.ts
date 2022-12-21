import { NonNegative } from 'type-fest';

export type CreateTransaction = {
  debitedAccountName: string;
  creditedAccountName: string;
  amount: NonNegative<number>;
};
