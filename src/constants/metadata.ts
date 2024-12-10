import data from "./data.json";
import { DEFAULT_THEME_MODE, DEFAULT_THEME_VARIANT, THEME_COLORS } from "./theme";

export const METADATA = {
  title: data.name,
  shortName: data.contact.username,
  description: data.position,
  authors: [
    {
      name: data.name,
      url: data.contact.website,
    },
  ],
  keywords: "nextjs, react, website, pwa",
  generator: "Next.js",
  themeColor: THEME_COLORS[DEFAULT_THEME_MODE][DEFAULT_THEME_VARIANT],
  backgroundColor: THEME_COLORS[DEFAULT_THEME_MODE][DEFAULT_THEME_VARIANT],
};
