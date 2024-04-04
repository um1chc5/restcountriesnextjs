"use client";

import React from "react";
import { tokenStorage } from "src/apis/http";

function AppProvider({
  children,
  initialTokens,
}: {
  children: React.ReactNode;
  initialTokens?: {
    access_token: string;
    refresh_token: string;
  };
}) {
  tokenStorage.accessToken = initialTokens?.access_token ?? "";
  tokenStorage.refreshToken = initialTokens?.refresh_token ?? "";

  return <>{children}</>;
}

export default AppProvider;
