import "server-only";

import type { Locale } from "../../i18n-config";

const dictionaries = {
  en: () =>
    import("../dictionaries/en-compiled.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) =>
  dictionaries[locale]?.() ?? dictionaries.en();
