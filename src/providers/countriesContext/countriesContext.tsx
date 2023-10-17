"use client";

import { createContext, useEffect, useState } from "react";
import { TCountriesContext } from "./countries.interfaces";
import { ChildrenNode, TCountry } from "@/schemas/countries.schemas";
import {
  filterByRegion,
  getAllCountries,
  searchCountries,
} from "@/services/utils";

const countriesContext = createContext<TCountriesContext>(
  {} as TCountriesContext
);

const CountriesProvider = ({ children }: ChildrenNode) => {
  const [countries, setCountries] = useState<TCountry[] | null | undefined>(
    null
  );

  const searchHandler = async (query: string) => {
    const querySearch = await searchCountries(query);
    if (query === "") {
      const defaultCountries = await getAllCountries();
      setCountries(defaultCountries);
    } else {
      setCountries(querySearch);
    }
  };

  const filterHandler = async (query: string, region: string) => {
    if (query === "") {
      const countriesByRegion = await filterByRegion(region);
      setCountries(countriesByRegion);
    } else if (query.length > 0 && countries) {
      const countriesByRegion = countries.filter(
        (country) => country.region === region
      );
      setCountries(countriesByRegion);
    }
  };

  return (
    <countriesContext.Provider
      value={{
        countries,
        setCountries,
        searchHandler,
        filterHandler,
      }}
    >
      {children}
    </countriesContext.Provider>
  );
};

export { countriesContext, CountriesProvider };
