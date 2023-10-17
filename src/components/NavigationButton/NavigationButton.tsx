"use client";

import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";

const NavigationButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="py-2 text-base px-8 rounded -top-16 absolute flex gap-4 items-center bg-white drop-shadow-md dark:bg-gray-800 text-gray-900 dark:text-gray-300"
    >
      <FaArrowLeft className="icon-1" />
      <p>Back</p>
    </button>
  );
};

export default NavigationButton;
