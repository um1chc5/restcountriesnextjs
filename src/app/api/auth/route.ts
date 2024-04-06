import { AuthResponse } from "src/types/auth.type";
import { setCookie } from "cookies-next";
import { OptionsType } from "cookies-next/lib/types";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const reqBody: AuthResponse = await request.json();
  const response = new NextResponse();

  const tokenOptions: OptionsType = {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    secure: true,
    req: request,
    res: response,
  };

  setCookie(
    "access_token",
    reqBody.data.access_token.replace("Bearer ", ""),
    tokenOptions,
  );
  setCookie("refresh_token", reqBody.data.refresh_token, tokenOptions);

  return response;
}
