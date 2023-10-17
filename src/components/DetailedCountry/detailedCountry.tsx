import { TCountry } from "@/schemas/countries.schemas";
import { getCountriesByCode } from "@/services/utils";
import Image from "next/image";
import NavigationButton from "../NavigationButton/NavigationButton";

interface CountryProps {
  country?: TCountry;
}
const DetailedCountry = async ({ country }: CountryProps) => {
  const verifyName = country?.name.nativeName;
  const verifyCurrencies = country?.currencies;

  let borders: (TCountry | undefined)[] = [];

  if (country && country.borders) {
    const borderPromises: Promise<TCountry | undefined>[] = country.borders.map(
      async (border) => {
        const result: TCountry[] | undefined = await getCountriesByCode(border);
        if (result) {
          return result[0];
        }
      }
    );

    const border = await Promise.all(borderPromises);
    borders = border;
  }

  let nativeName: string = "";
  let currencies: string = "";

  if (verifyName) {
    const key = Object.keys(verifyName)[0];

    nativeName = verifyName[key].common;
  }

  if (verifyCurrencies) {
    const key = Object.keys(verifyCurrencies)[0];

    currencies = verifyCurrencies[key].name;
  }

  return (
    <section className=" max-w-screen-xl md:w-full h-fit mx-auto gap-12 lg:gap-12 flex flex-col lg:flex-row md:justify-between relative">
      <NavigationButton />
      {country ? (
        <>
          <figure className="w-full md:my-auto ">
            <Image
              src={country.flags.png}
              alt={`${country.name.common} flag`}
              width={400}
              height={320}
              className="lg:max-w-[500px] mx-auto lg:mx-0 w-full"
            ></Image>
          </figure>
          <aside className="flex flex-col gap-5 w-fit md:w-full  lg:max-w-lg md:mx-auto">
            <h2 className="title-1">{country.name.common}</h2>
            <section className="flex flex-col gap-9 md:gap-6 lg:flex-row md:justify-between w-full">
              <div className="flex flex-col gap-4 md:gap-2">
                <h6 className="text-1 in-line">
                  <strong className="font-bold">Native name:</strong>{" "}
                  {nativeName}
                </h6>
                <h6 className="text-1 in-line">
                  <strong className="font-bold">Population:</strong>{" "}
                  {country.population.toLocaleString("pt-br")}
                </h6>
                <h6 className="text-1 in-line">
                  <strong className="font-bold">Region:</strong>{" "}
                  {country.region}
                </h6>
                <h6 className="text-1 in-line">
                  <strong className="font-bold">Sub Region:</strong>{" "}
                  {country.subregion}
                </h6>
                <h6 className="text-1 in-line">
                  <strong className="font-bold">Capital:</strong>{" "}
                  {country.capital}
                </h6>
              </div>
              <div className="flex flex-col gap-4 md:gap-2">
                <h6 className="text-1 in-line">
                  <strong className="font-bold">Top Level Domain:</strong>{" "}
                  {country.tld}
                </h6>
                <h6 className="text-1 in-line">
                  <strong className="font-bold">Currencies:</strong>{" "}
                  {currencies}
                </h6>
                <h6 className="text-1 in-line">
                  <strong className="font-bold">Languages:</strong>{" "}
                  {Object.values(country.languages)}
                </h6>
              </div>
            </section>
            <footer className="mt-7">
              <div className="flex flex-wrap lg:grid items-center md:grid-cols-3 auto-cols-min md:auto-cols-max gap-4">
                <h6 className="text-1 in-line">
                  <strong className="font-bold text-lg">
                    Border Countries:
                  </strong>{" "}
                </h6>
                {borders.length > 0 ? (
                  borders.map((border) => (
                    <span
                      key={border!.name.common}
                      className="border-countries grow"
                    >
                      {border!.name.common}
                    </span>
                  ))
                ) : (
                  <p className="text-1 -ml-1 mt-1">No borders countries</p>
                )}
              </div>
            </footer>
          </aside>
        </>
      ) : (
        <p>Country not found</p>
      )}
    </section>
  );
};

export default DetailedCountry;
