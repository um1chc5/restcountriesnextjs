import { Card, CardContent } from "src/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Country } from "src/types/countries";
import { cookies } from "next/headers";

function CountryCard({ country }: { country: Country }) {
  return (
    <Link key={country.cca2} href={`/${country.cca3}`}>
      <Card className="h-full transition-transform duration-200 hover:translate-y-[-4px] hover:shadow dark:bg-dark-blue">
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
