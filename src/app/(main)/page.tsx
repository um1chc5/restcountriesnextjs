import { countriesApis } from "@/apis/data";
import CountryCard from "@/components/common/countryCard";
import CountrySearch from "@/components/filter/countrySearch";
import RegionSelect from "@/components/filter/regionSelect";

export default async function Home({
  searchParams,
}: {
  searchParams: {
    region?: string;
    country_name?: string;
  };
}) {
  const { getAllCountries, getCountriesByName, getCountriesByRegion } =
    countriesApis;

  const countries = searchParams.region
    ? await getCountriesByRegion(searchParams.region)
    : searchParams.country_name
      ? await getCountriesByName(searchParams.country_name)
      : await getAllCountries();

  if (searchParams.country_name) {
    console.log(searchParams.country_name, countries);
  }

  return (
    <main className=" min-h-screen">
      <div className="mb-12 flex justify-between">
        <CountrySearch />
        <RegionSelect />
      </div>
      <div className="grid w-full grid-cols-1 content-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {countries?.data.map((country) => (
          <CountryCard country={country} key={country.cca3} />
        ))}
      </div>
    </main>
  );
}
