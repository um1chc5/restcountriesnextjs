import { countriesApis } from "@/apis/data";
import { Card, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default async function Home() {
  const countries = await countriesApis.getAllCountries();

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-16'>
      <div className='grid grid-cols-4 gap-6 w-full max-w-7xl'>
        {countries?.data.map((country) => (
          <Card key={country.cca2}>
            <div className='relative h-40'>
              <Image
                alt={country.name.official}
                src={country.flags.png}
                fill
                style={{ objectFit: "cover" }}
                className='border-b-[1px] rounded-t-lg'
              />
            </div>
            <div className='p-8'>
              <h3 className='font-bold'>{country.name.official}</h3>
              <div className='text-sm pt-4'>
                <p className='pt-1'>
                  <strong>Population</strong>:{country.population}{" "}
                </p>
                <p className='pt-1'>
                  <strong>Region</strong>: {country.region}
                </p>
                <p className='pt-1'>
                  <strong>Capital</strong>: {country.capital}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </main>
  );
}
