import 'dotenv/config';
import jwt from 'jsonwebtoken';
import IPayload from '../../../interfaces/IPayload.interface';
import CustomError from '../../../middlewares/Custom.error';

const JWT_SECRET = process.env.JWT_SECRET as string;

export default class JWTService {
  static sign(data: IPayload) {
    const { id, username, email } = data;
    const newDataWithoutPassword = {
      id,
      username,
      email,
    };
    const token = jwt.sign({ newDataWithoutPassword }, JWT_SECRET, { expiresIn: '1d' });
    return token;
  }

  static tokenVerify = async (token: string) => {
    const { newDataWithoutPassword } = jwt.verify(token, JWT_SECRET) as IPayload;
    const { email } = newDataWithoutPassword;
    if (!email) CustomError.badRequest('Token not found or expired');
    return token;
  };

  static decode = async (token: string) => {
    const { newDataWithoutPassword } = jwt.decode(token) as IPayload;
    return newDataWithoutPassword;
  }
}

