import { Badge } from "src/components/ui/badge";
import { Button } from "src/components/ui/button";
import { formatPopulation, getCommonNames } from "src/lib/utils";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { countriesApis } from "src/apis/data";
import { cookies } from "next/headers";

async function Country({ params }: { params: { code: string } }) {
  const data = await countriesApis.getCountryByCode(params.code);
  const countryData = data.data[0];
  const borderCountries = await countriesApis.getCountriesByCode(
    countryData.borders as string[],
  );

  return (
    <div className="">
      <div className="mb-12">
        <Link href={"/"} className="py-2">
          <Button
            variant="outline"
            className="duration-150 dark:hover:bg-dark-blue"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            <p>Back</p>
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        <div className="pb-8 md:pb-0 md:pr-12">
          <div className="flex items-center justify-center">
            <Image
              alt="Country Flag"
              src={countryData.flags.svg}
              width={0}
              height={0}
              className="h-full w-auto"
            />
          </div>
        </div>
        <div>
          <h1 className="mb-3 text-3xl font-bold">
            {countryData.name.official}
          </h1>
          <div className="flex justify-center pt-8 md:justify-start">
            <div className="flex gap-8">
              <ul>
                <li className="mt-1">
                  <span className="font-semibold">Native Name: </span>
                  {countryData.name.nativeName &&
                    getCommonNames(countryData.name.nativeName).join(",")}
                </li>
                <li className="mt-1">
                  <span className="font-semibold">Population: </span>
                  {formatPopulation(countryData.population)}
                </li>
                <li className="mt-1">
                  <span className="font-semibold">Region: </span>
                  {countryData.region}
                </li>
                <li className="mt-1">
                  <span className="font-semibold">Sub Region: </span>
                  {countryData.subregion}
                </li>
                <li className="mt-1">
                  <span className="font-semibold">Capital: </span>
                  {countryData.capital}
                </li>
              </ul>
              <ul>
                <li className="mt-1">
                  <span className="font-semibold">Top Level Domain: </span>
                  {countryData.tld}
                </li>
                <li className="mt-1">
                  <span className="font-semibold">Currencies: </span>{" "}
                  {countryData.currencies &&
                    Object.values(countryData.currencies)
                      .map((currency) => currency.name)
                      .join(",")}
                </li>
                <li className="mt-1">
                  <span className="font-semibold">Languages: </span>{" "}
                  {countryData.languages &&
                    Object.values(countryData.languages).join(",")}
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-10">
            <span className="mr-2 font-semibold">Border Countries: </span>
            {borderCountries &&
              borderCountries.data.map((country) => (
                <Link key={country.cca3} href={`/${country.cca3}`}>
                  <Badge
                    key={country.cca3}
                    variant="default"
                    className="my-1 mr-2 bg-dark-blue px-4 py-2 text-base font-normal duration-200 hover:shadow dark:bg-white"
                  >
                    {country.name.common}
                  </Badge>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Country;
