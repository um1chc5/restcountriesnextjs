import { Awaitable, NextAuthOptions, User } from "next-auth";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authConfig = {
  callbacks: {
    jwt({ token, user }) {
      return { ...token, ...user };
    },
    session({ token, session }) {
      return session;
    },
  },
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "credentials",
      id: "credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: {},
        access_token: {},
        refresh_token: {},
      },
      async authorize(credentials, req) {
        // console.log("credential", credentials);
        return credentials as unknown as Awaitable<User | null>;
      },
    }),
  ], // Add providers with an empty array for now
} satisfies NextAuthOptions;

const handler = NextAuth(authConfig);

export { handler as GET, handler as POST };
