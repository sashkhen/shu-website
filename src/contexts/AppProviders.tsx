"use client";

import { PropsWithChildren } from "react";
import { IntlConfig, IntlProvider } from "react-intl";

import ThemeProvider, { ThemeProviderProps } from "@/contexts/ThemeProvider";

const AppProviders: React.FC<
  PropsWithChildren & { theme?: ThemeProviderProps; intl: IntlConfig }
> = ({ children, theme, intl }) => {
  // const locale = intl.locale || navigator.language;
  return (
    <IntlProvider {...intl}>
      <ThemeProvider {...theme}>{children}</ThemeProvider>
    </IntlProvider>
  );
};

export default AppProviders;
