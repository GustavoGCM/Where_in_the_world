import { ReactNode } from "react";
import { z } from "zod";

const countrySchema = z.object({
  name: z.object({
    common: z.string(),
    official: z.string(),
    nativeName: z.record(
      z.object({
        official: z.string(),
        common: z.string(),
      })
    ),
  }),
  tld: z.string().array(),
  currencies: z.record(
    z.object({
      name: z.string(),
      symbol: z.string(),
    })
  ),
  capital: z.string().array(),
  region: z.string(),
  subregion: z.string(),
  population: z.number(),
  flags: z.object({
    png: z.string(),
    svg: z.string(),
    alt: z.string(),
  }),
  borders: z.string().array(),
  languages: z.record(z.string()),
});

export type TCountry = z.infer<typeof countrySchema>;

export interface ChildrenNode {
  children: ReactNode;
}
