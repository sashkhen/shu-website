"use client";

import { PropsWithChildren } from "react";

import ThemeProvider, { ThemeProviderProps } from "./_contexts/ThemeProvider";

const Providers: React.FC<
  PropsWithChildren & { theme?: ThemeProviderProps }
> = ({ children, theme }) => {
  return <ThemeProvider {...theme}>{children}</ThemeProvider>;
};

export default Providers;
