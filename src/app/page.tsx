import CountriesSection from "@/components/CountriesSection/countriesSection";
import SearchOptions from "@/components/SearchOptions/searchOptions";
import { getAllCountries } from "@/services/utils";

const Home = async () => {
  const countries = await getAllCountries();

  return (
    <main className="px-2 md:px-8 pt-10 max-w-screen-2xl w-full mx-auto">
      <SearchOptions />
      <CountriesSection countriesData={countries} />
    </main>
  );
};

export default Home;
