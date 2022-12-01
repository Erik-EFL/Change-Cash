export interface ITransaction {
  debitedAccountId: number;
  creditedAccountId: number;
  value: string;
  createdAt: Date;
}
