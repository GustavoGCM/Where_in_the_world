"use server";

import { cache } from "react";
import api from "./api";
import { TCountry } from "@/schemas/countries.schemas";

export const getAllCountries = cache(async () => {
  const countries = await api.get<TCountry[]>("all");

  return countries.data;
});

export const searchCountries = cache(async (query: string) => {
  let result: TCountry[] | undefined;
  const countries = await api
    .get<TCountry[]>(`name/${query}`)
    .then((response) => {
      result = response.data;
    })
    .catch((error) => {
      console.log(error);
    });

  return result;
});

export const getOneCountry = cache(async (query: string) => {
  let result: TCountry[] | undefined;
  const countrie = await api
    .get<TCountry[]>(`name/${query}?fullText=true`)
    .then((response) => {
      result = response.data;
    })
    .catch((error) => {
      console.log(error);
    });

  return result;
});

export const getCountriesByCode = cache(async (query: string) => {
  let result: TCountry[] | undefined;
  const countrie = await api
    .get<TCountry[]>(`alpha/${query}`)
    .then((response) => {
      result = response.data;
    })
    .catch((error) => {
      console.log(error);
    });

  return result;
});

export const filterByRegion = cache(async (region: string) => {
  let result: TCountry[] | undefined;
  const countries = await api
    .get<TCountry[]>(`region/${region}`)
    .then((response) => {
      result = response.data;
    })
    .catch((error) => {
      console.log(error);
    });

  return result;
});
