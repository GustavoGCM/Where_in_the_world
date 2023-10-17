"use client";

import { TCountry } from "@/schemas/countries.schemas";
import CountryCard from "../CountryCard/countryCard";
import { useContext, useEffect } from "react";
import { countriesContext } from "@/providers/countriesContext/countriesContext";

interface CountriesProps {
  countriesData: TCountry[];
}

const CountriesSection = ({ countriesData }: CountriesProps) => {
  const { countries, setCountries } = useContext(countriesContext);

  useEffect(() => {
    setCountries(countriesData);
  }, []);

  return (
    <section className="w-full mx-auto">
      <ul className="mt-12 grid gap-8  grid-cols-1 md:grid-cols-2   lg:grid-cols-3 xl:grid-cols-4 mx-auto w-fit auto-cols-max">
        {countries ? (
          countries.map((country) => (
            <CountryCard country={country} key={country.name.common} />
          ))
        ) : (
          <p className="error-title">No results</p>
        )}
      </ul>
    </section>
  );
};

export default CountriesSection;
