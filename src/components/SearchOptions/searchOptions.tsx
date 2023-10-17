"use client";

import { countriesContext } from "@/providers/countriesContext/countriesContext";
import { Dropdown, Flowbite } from "flowbite-react";
import { useContext, useEffect, useState } from "react";
import { FaSearch, FaChevronDown } from "react-icons/fa";

const SearchOptions = () => {
  const { searchHandler, filterHandler } = useContext(countriesContext);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const delay = setTimeout(() => {
      searchHandler(query);
    }, 1000);

    return () => {
      clearTimeout(delay);
    };
  }, [query]);

  return (
    <Flowbite
      theme={{
        theme: {
          dropdown: {
            floating: {
              style: {
                dark: "bg-gray-800 text-gray-300 dark:bg-gray-800",
                auto: "border border-gray-200 bg-white text-gray-950 dark:border-none dark:bg-gray-800 dark:text-gray-300",
              },
            },
          },
        },
      }}
    >
      <section className="flex flex-col gap-6 md:gap-0 md:flex-row  md:justify-between">
        <div className="relative md:max-w-md lg:max-w-lg w-full">
          <div className="absolute left-6 h-full z-10 flex items-center">
            <FaSearch className="default-icon" />
          </div>
          <input
            type="text"
            className="main-input"
            placeholder="Search for a country..."
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <Dropdown
          label
          dismissOnClick={false}
          placement="bottom"
          renderTrigger={() => (
            <button className="select-icon">
              <p>Filter by region</p>
              <FaChevronDown className="default-icon" />
            </button>
          )}
        >
          <Dropdown.Item onClick={() => filterHandler(query, "Africa")}>
            Africa
          </Dropdown.Item>
          <Dropdown.Item onClick={() => filterHandler(query, "Americas")}>
            Americas
          </Dropdown.Item>
          <Dropdown.Item onClick={() => filterHandler(query, "Asia")}>
            Asia
          </Dropdown.Item>
          <Dropdown.Item onClick={() => filterHandler(query, "Europe")}>
            Europe
          </Dropdown.Item>
          <Dropdown.Item onClick={() => filterHandler(query, "Oceania")}>
            Oceania
          </Dropdown.Item>
        </Dropdown>
      </section>
    </Flowbite>
  );
};

export default SearchOptions;
