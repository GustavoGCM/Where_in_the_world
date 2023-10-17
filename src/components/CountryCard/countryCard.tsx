"use client";

import { TCountry } from "@/schemas/countries.schemas";
import { Card } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

interface CountryCardProps {
  country: TCountry;
}

const CountryCard = ({ country }: CountryCardProps) => {
  return (
    <Card
      theme={{
        root: {
          children: "flex h-fit flex-col justify-center gap-4 p-6 mb-4",
        },
      }}
      renderImage={() => (
        <Link href={`/${country.name.common}`}>
          <Image
            src={country.flags.png}
            alt={country.name.common}
            width={310}
            height={200}
            className="h-[200px] w-full rounded-t-lg object-cover"
          ></Image>
        </Link>
      )}
    >
      <h4 className="title-3">{country.name.common}</h4>
      <footer className="grid grid-flow-row gap-3">
        <h6 className="text-1 in-line">
          <strong className="font-bold">Population:</strong>{" "}
          {country.population.toLocaleString("pt-br")}
        </h6>
        <h6 className="text-1 in-line">
          <strong className="font-bold">Region:</strong> {country.region}
        </h6>
        <h6 className="text-1 in-line">
          <strong className="font-bold">Capital:</strong> {country.capital}
        </h6>
      </footer>
    </Card>
  );
};

export default CountryCard;
