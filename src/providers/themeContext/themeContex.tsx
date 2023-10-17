"use client";

import { ChildrenNode } from "@/schemas/countries.schemas";
import { ThemeProvider, useTheme } from "next-themes";

const DarkThemeProvider = ({ children }: ChildrenNode) => {
  const { resolvedTheme, theme } = useTheme();
  console.log(resolvedTheme, theme);

  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};

export default DarkThemeProvider;
