import axios from "axios";
import { ILogin } from "../interfaces/login.interface";
import { IRegister } from "../interfaces/register.interface";

const baseURL = "http://localhost:3001";

class Request {
  static async login(data: ILogin) {
    return await axios.post(`${baseURL}/login`, data);
  }

  static async register(data: IRegister) {
    return await axios.post(`${baseURL}/register`, data);
  }

  static async getTransactions(id: number) {
    return await axios.get(`${baseURL}/transactions/${id}`, {
      headers: {
        Authorization: JSON.parse(localStorage.getItem('user') || '{}'),
      },
    });
  }

  static async createTransaction(data: any) {
    return await axios.post(`${baseURL}/transactions`, data, {
      headers: {
        Authorization: JSON.parse(localStorage.getItem('user') || '{}'),
      },
    });
  }

  static async getUser() {
    return await axios.get(`${baseURL}/user`, {
      headers: {
        Authorization: JSON.parse(localStorage.getItem('user') || '{}'),
      },
    });
  }

  static async getUserInfo() {
    return await axios.get(`${baseURL}/user/info`, {
      headers: {
        Authorization: JSON.parse(localStorage.getItem('user') || '{}'),
      },
    });
  }
}

export default Request;
