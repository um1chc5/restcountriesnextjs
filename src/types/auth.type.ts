import { User } from "./user.type";
import { SuccessResponse } from "./utils.type";

export type AuthResponse = SuccessResponse<{
  access_token: string;
  refresh_token: string;
  expires_refresh_token: number;
  expires: string;
  user: User;
}>;

export type RenewAccessToken = SuccessResponse<{
  access_token: string;
}>;

export type RefreshTokenResponse = SuccessResponse<{ access_token: string }>;
