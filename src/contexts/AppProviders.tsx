import { PropsWithChildren } from "react";

import ThemeProvider, { ThemeProviderProps } from "@/contexts/ThemeProvider";

const AppProviders: React.FC<
  PropsWithChildren & { theme?: ThemeProviderProps }
> = ({ children, theme }) => {
  return <ThemeProvider {...theme}>{children}</ThemeProvider>;
};

export default AppProviders;
