"use client";

import CheckTokenExpire from "hooks/CheckTokenExpire";
import React from "react";
import { tokenStorage } from "src/apis/http";

function AppProvider({
  children,
  initialTokens: { access_token, refresh_token },
}: {
  children: React.ReactNode;
  initialTokens: {
    access_token: string;
    refresh_token: string;
  };
}) {
  if (access_token && refresh_token) {
    tokenStorage.accessToken = access_token;
    tokenStorage.refreshToken = refresh_token;
  }

  return (
    <>
      {children}
      <CheckTokenExpire />
    </>
  );
}

export default AppProvider;
