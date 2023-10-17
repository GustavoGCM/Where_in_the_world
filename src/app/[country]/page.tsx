import DetailedCountry from "@/components/DetailedCountry/detailedCountry";

import { getOneCountry } from "@/services/utils";

const CountryPage = async ({ params }: { params: { country: string } }) => {
  const country = await getOneCountry(params.country);

  return (
    <main className="max-w-screen-2xl mx-auto pt-32 justify-center px-4 md:px-8 mb-24">
      <DetailedCountry country={country![0]} />
    </main>
  );
};

export default CountryPage;
