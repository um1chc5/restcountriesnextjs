import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import ThemeToggle from "../ui/themeToggle";

async function Header() {
  return (
    <div className="relative flex justify-center py-6 shadow-md dark:bg-dark-blue">
      <div className="flex w-full max-w-7xl items-center justify-between px-8 text-primary">
        <Link href={"/"} className="text-2xl font-bold">
          Where in the world?
        </Link>
        <div className="flex items-center gap-4">
          <Link href={"/cookie-login"}>
            <Button variant={"link"} className="text-base">
              Login
            </Button>
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}

export default Header;
