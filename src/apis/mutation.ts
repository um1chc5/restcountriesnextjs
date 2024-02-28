import { authHttp } from "./http";

export async function login(email: string, password: string) {
  try {
    const res = await authHttp.post("login", {
      email: email,
      password: password,
    });
    return res;
  } catch (error) {
    console.log(error);
  }
}
