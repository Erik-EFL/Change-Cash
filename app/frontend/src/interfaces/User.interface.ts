export interface IUserObject {
  id?: number;
  username: string;
  email: string;
  account: {
    id: number;
    balance: number;
  };
  transactions:[];
}

export interface ITransaction {
  debitedAccountId: number;
  creditedAccountId: number;
  value: number;
  createdAt: Date;
}
