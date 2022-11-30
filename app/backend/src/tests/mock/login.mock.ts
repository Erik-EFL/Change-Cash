
import { IUser } from '../../interfaces/IUser.interface';

const userLogin: IUser = {
  email: 'admin@admin.com',
  password: 'Admin-pass1',
};

const badRequestUser: IUser = {
  email: 'test@test.com',
  password: 'test',
};

const usersMock = {
  userLogin, badRequestUser,
}

export default usersMock;
