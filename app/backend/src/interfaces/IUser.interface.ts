export interface IUser {
  id?: number;
  username: string;
  email: string;
  password: string;
  accountId: number;
}

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
