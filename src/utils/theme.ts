import { ThemeMode } from "@/types/theme";

export const prefersDarkClient = () => {
  if (typeof window === "undefined") {
    return null;
  }

  return window?.matchMedia("(prefers-color-scheme: dark)").matches;
};

export const updateAppThemeColor = (color: string, mode?: ThemeMode) => {
  const selector = [
    "meta",
    '[name="theme-color"]',
    mode ? `[media="(prefers-color-scheme: ${mode})"]` : "",
  ].join("");
  let metaTag = document.querySelector(selector);

  if (metaTag) {
    metaTag.setAttribute("content", color);
  } else {
    metaTag = document.createElement("meta");
    metaTag.setAttribute("name", "theme-color");
    metaTag.setAttribute("content", color);

    if (mode) {
      metaTag.setAttribute("media", `(prefers-color-scheme: ${mode})`);
    }

    document.head.appendChild(metaTag);
  }
};
