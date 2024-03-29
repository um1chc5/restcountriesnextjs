import axios, { AxiosInstance } from "axios";

class Http {
  instance: AxiosInstance;
  constructor() {
    this.instance = axios.create({
      baseURL: "https://restcountries.com/v3.1/",
      timeout: 20000,
    });
  }
}

class AuthHttp {
  instance: AxiosInstance;
  constructor() {
    this.instance = axios.create({
      baseURL: "https://api-ecom.duthanhduoc.com/",
      timeout: 20000,
    });
  }
}

export const http = new Http().instance;

export const authHttp = new AuthHttp().instance;
