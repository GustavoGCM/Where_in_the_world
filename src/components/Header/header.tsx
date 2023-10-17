"use client";

import { Navbar } from "flowbite-react";
import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { useTheme } from "next-themes";

const Header = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <Navbar
      className="w-full"
      theme={{
        base: "bg-white px-4 py-5 dark:bg-gray-800 sm:px-8 drop-shadow-lg",
        inner: {
          base: "flex flex-wrap items-center justify-between max-w-screen-2xl mx-auto w-full",
        },
      }}
    >
      <Navbar.Brand>
        <h1 className="logo">Where in the world?</h1>
      </Navbar.Brand>
      <button
        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
        className="dark-mode-btn "
      >
        <FaMoon className="dark:fill-white" />
        <p>{resolvedTheme === "dark" ? "Light" : "Dark"} Mode</p>
      </button>
    </Navbar>
  );
};

export default Header;
