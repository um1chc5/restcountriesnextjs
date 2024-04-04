import { AuthResponse } from "src/types/auth.type";

export async function POST(request: Request) {
  const res: AuthResponse = await request.json();
  return Response.json(res, {
    headers: {
      "Set-Cookie": `access_token=${res.data.access_token}; Path=/; HttpOnly; Secure; SameSite=Lax, refresh_token=${res.data.refresh_token}; Path=/; HttpOnly; Secure; SameSite=Lax`,
    },
  });
}
