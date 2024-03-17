"use client";
import { SessionProvider } from "next-auth/react";
import React from "react";

function SessionContextProvider({children} : {children: React.ReactNode}) {
  return <SessionProvider>{children}</SessionProvider>;
}

export default SessionContextProvider;
