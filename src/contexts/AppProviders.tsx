"use client";

import { PropsWithChildren } from "react";
import { IntlConfig, IntlProvider } from "react-intl";

import ThemeProvider, { ThemeProviderProps } from "@/contexts/ThemeProvider";

const appDefaultRichTextElements: IntlConfig["defaultRichTextElements"] = {
  b: (chunks: React.ReactNode[]) => <b key={chunks.join()}>{chunks}</b>,
  code: (chunks: React.ReactNode[]) => (
    <code key={chunks.join()}>{chunks}</code>
  ),
  emoji: (chunks: React.ReactNode[]) => (
    <span key={chunks.join()} className="emoji">
      {chunks}
    </span>
  ),
  mistake: (chunks: React.ReactNode[]) => (
    <span key={chunks.join()} className="mistake">
      {chunks}
    </span>
  ),
};

const AppProviders: React.FC<
  PropsWithChildren & { theme?: ThemeProviderProps; intl: IntlConfig }
> = ({ children, theme, intl }) => {
  // const locale = intl.locale || navigator.language;
  const { defaultRichTextElements, defaultLocale = "en", ...restIntl } = intl;
  return (
    <IntlProvider
      defaultLocale={defaultLocale}
      defaultRichTextElements={Object.assign(
        {},
        defaultRichTextElements,
        appDefaultRichTextElements
      )}
      {...restIntl}
    >
      <ThemeProvider {...theme}>{children}</ThemeProvider>
    </IntlProvider>
  );
};

export default AppProviders;
