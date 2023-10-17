import { TCountry } from "@/schemas/countries.schemas";
import { Dispatch, SetStateAction } from "react";

export interface TCountriesContext {
  countries: TCountry[] | null | undefined;
  setCountries: Dispatch<SetStateAction<TCountry[] | null | undefined>>;
  searchHandler: (query: string) => Promise<void>;
  filterHandler: (query: string, region: string) => Promise<void>;
}
