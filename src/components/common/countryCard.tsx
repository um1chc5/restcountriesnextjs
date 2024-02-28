import { Card, CardContent } from "@/components/ui/card";
import { Country } from "@/types/countries";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function CountryCard({ country }: { country: Country }) {
  return (
    <Link key={country.cca2} href={`/${country.cca3}`}>
      <Card className="dark:bg-dark-blue h-full transition-transform duration-200 hover:translate-y-[-4px] hover:shadow">
        <div className="relative mb-8 h-40">
          <Image
            alt={country.name.official}
            src={country.flags.png}
            fill
            className="rounded-t-lg border-b-[1px]"
            sizes="100"
          />
        </div>
        <CardContent>
          <h3 className="font-bold">{country.name.official}</h3>
          <div className="pt-4 text-sm">
            <p className="pt-1">
              <strong>Population</strong>: {country.population}{" "}
            </p>
            <p className="pt-1">
              <strong>Region</strong>: {country.region}
            </p>
            <p className="pt-1">
              <strong>Capital</strong>: {country.capital}
            </p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

export default CountryCard;
