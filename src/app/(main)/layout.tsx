import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "@/app/globals.css";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/common/header";

const nunito = Nunito({ subsets: ["vietnamese"] });

export const metadata: Metadata = {
  title: "REST API Countries flag",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.className}`}>
        <Header />
        <div className="dark:bg-very-dark-blue flex min-h-screen justify-center">
          <div className="w-full max-w-7xl p-16">{children}</div>
        </div>
        <Toaster />
      </body>
    </html>
  );
}