import { countriesApis } from "src/apis/data";
import CountryCard from "src/components/common/countryCard";
import CountrySearch from "src/components/filter/countrySearch";
import RegionSelect from "src/components/filter/regionSelect";
import { Country } from "src/types/countries";

export default async function Home({
  searchParams,
}: {
  searchParams: {
    region?: string;
    country_name?: string;
  };
}) {
  const {
    getAllCountries,
    getCountriesByName,
    getCountriesByRegion,
    getAllCountriesNoCache,
    getAllCountriesFetch,
  } = countriesApis;

  const countries = searchParams.region
    ? await getCountriesByRegion(searchParams.region)
    : searchParams.country_name
      ? await getCountriesByName(searchParams.country_name)
      : await getAllCountriesFetch();

  console.log(searchParams);

  const hehe = await getAllCountriesFetch();
  const hehe2 = await getAllCountriesFetch();

  return (
    <main className=" min-h-screen">
      <div className="mb-12 flex justify-between">
        <CountrySearch />
        <RegionSelect />
      </div>
      <div className="grid w-full grid-cols-1 content-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {countries?.data.map((country: Country) => (
          <CountryCard country={country} key={country.cca3} />
        ))}
      </div>
    </main>
  );
}
