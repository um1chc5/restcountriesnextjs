"use client";

import { ChangeEvent } from "react";
import { Input } from "../ui/input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { debounce } from "@/lib/utils";

function CountrySearch() {
  const router = useRouter();
  const pathname = usePathname();
  const seachParams = useSearchParams();

  const handleSearch = debounce((event: ChangeEvent<HTMLInputElement>) => {
    const params = new URLSearchParams();
    const value = event.target.value;

    if (value) {
      params.set("country_name", value);
      router.replace(`${pathname}?${params.toString()}`);
    } else {
      params.delete("country_name");
      router.push("/");
    }

    console.log(event.target.value);
  }, 500);

  return (
    <div>
      <Input
        type="text"
        onChange={handleSearch}
        defaultValue={seachParams.get("country_name") || ""}
        placeholder="Search for a Country"
        className="focus-visible:ring-0 focus-visible:ring-offset-0"
        autoFocus
      />
    </div>
  );
}

export default CountrySearch;
