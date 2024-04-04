import { Toaster } from "src/components/ui/toaster";
import { Nunito } from "next/font/google";
import "src/app/globals.css";

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
            {children}
          </div>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
