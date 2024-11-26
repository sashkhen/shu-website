"use client";

import { PropsWithChildren } from "react";

import { ThemeProvider } from "./_contexts/ThemeProvider";
import { ThemeProviderProps } from "./_contexts/ThemeProvider/ThemeProvider";

const Providers: React.FC<
  PropsWithChildren & { theme?: ThemeProviderProps }
> = ({ children, theme }) => {
  return <ThemeProvider {...theme}>{children}</ThemeProvider>;
};

export default Providers;
