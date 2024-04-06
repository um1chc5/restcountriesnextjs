import { Toaster } from "src/components/ui/toaster";
import { Nunito } from "next/font/google";
import "src/app/globals.css";
import AppProvider from "../_AppProvider/AppProvider";
import { cookies } from "next/headers";

const nunito = Nunito({ subsets: ["vietnamese"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = cookies();

  const initialTokens = {
    access_token: cookieStore.get("access_token")?.value!,
    refresh_token: cookieStore.get("refresh_token")?.value!,
  };

  return (
    <html lang="en">
      <body className={nunito.className}>
        <div className=" flex h-screen items-center justify-center">
          <div className="w-full max-w-7xl -translate-y-12 p-20">
            <AppProvider initialTokens={initialTokens}>{children}</AppProvider>
          </div>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
