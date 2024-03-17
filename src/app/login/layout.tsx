import { Toaster } from "src/components/ui/toaster";
import { Nunito } from "next/font/google";
import "src/app/globals.css";
import { Metadata } from "next";
import SessionContextProvider from "../_providers/SessionContext";

export const metadata: Metadata = {
  title: "REST API Countries flag",
  description: "Generated by create next app",
};

const nunito = Nunito({ subsets: ["vietnamese"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <div className=" flex h-screen items-center justify-center">
          <div className="w-full max-w-7xl -translate-y-12 p-20">
            <SessionContextProvider>{children}</SessionContextProvider>
          </div>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
