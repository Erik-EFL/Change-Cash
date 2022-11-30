import { JwtPayload } from 'jsonwebtoken';

export default interface IPayload extends JwtPayload {
  data: {
    username: string;
    email: string;
    password: string;
  }
}
