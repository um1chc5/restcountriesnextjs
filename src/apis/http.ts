import axios, { AxiosInstance } from "axios";
import { jwtDecode } from "jwt-decode";

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
      headers: {
        "expire-access-token": 60 * 3,
      },
    });

    this.instance.interceptors.request.use(
      (config) => {
        const accessToken = tokenStorage.accessToken;
        if (accessToken) {
          config.headers.Authorization = accessToken;
        }
        return config;
      },
      (error) => Promise.reject(error),
    );
  }
}

class NextServerHttp {
  instance: AxiosInstance;
  constructor() {
    this.instance = axios.create({
      baseURL: "",
      timeout: 20000,
    });
  }
}

class TokenStorage {
  private access_token = "";
  private refresh_token = "";
  private accessTokenExpireTime = new Date();
  private refreshTokenExpireTime = new Date();
  set accessToken(token: string) {
    const decode = jwtDecode(token);
    if (decode.exp) {
      this.accessTokenExpireTime = new Date(decode.exp * 1000);
    }
    this.access_token = token;
  }
  set refreshToken(token: string) {
    const decode = jwtDecode(token);
    if (decode.exp) {
      this.refreshTokenExpireTime = new Date(decode.exp * 1000);
    }
    this.refresh_token = token;
  }
  get accessToken() {
    return this.access_token;
  }
  get refreshToken() {
    return this.refresh_token;
  }

  get accessTokenExpire() {
    return this.accessTokenExpireTime;
  }

  get refreshTokenExpire() {
    return this.refreshTokenExpireTime;
  }
}

export const tokenStorage = new TokenStorage();

export const http = new Http().instance;

export const authHttp = new AuthHttp().instance;

export const nextServerHttp = new NextServerHttp().instance;
