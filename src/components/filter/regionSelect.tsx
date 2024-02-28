"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

function RegionSelect() {
  const router = useRouter();
  const pathname = usePathname();

  const handleRegionSelect = (value: string) => {
    const params = new URLSearchParams();

    if (value) {
      params.set("region", value);
      router.replace(`${pathname}?${params.toString()}`);
    }
  };

  return (
    <Select onValueChange={handleRegionSelect}>
      <SelectTrigger className="flex w-48 pl-8 focus:ring-0 focus:ring-offset-0">
        <SelectValue placeholder="Filter by Region" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Region</SelectLabel>
          <SelectItem value="africa">Africa</SelectItem>
          <SelectItem value="america">America</SelectItem>
          <SelectItem value="asia">Asia</SelectItem>
          <SelectItem value="europe">Europe</SelectItem>
          <SelectItem value="oceania">Oceania</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default RegionSelect;
