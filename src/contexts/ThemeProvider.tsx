"use client";

import {
    createContext, PropsWithChildren, useCallback, useContext, useEffect, useState
} from "react";

import Cookie from "@/utils/Cookie";
import Storage from "@/utils/Storage";

export enum ThemeMode {
  Light = "light",
  Dark = "dark",
}

export enum ThemeVariant {
  Plain = "plain",
  Purple = "purple",
}

const THEME_COLORS = {
  [ThemeMode.Light]: {
    [ThemeVariant.Plain]: "#d4d5d2",
    [ThemeVariant.Purple]: "#e4d8da",
  },
  [ThemeMode.Dark]: {
    [ThemeVariant.Plain]: "#262725",
    [ThemeVariant.Purple]: "#4d40dd",
  },
};

type ThemeContextType = {
  mode: ThemeMode;
  variant: ThemeVariant;
  setMode: (mode: ThemeMode) => void;
  setVariant: (variant: ThemeVariant) => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

const prefersDarkClient = () => {
  if (typeof window === "undefined") {
    return null;
  }

  return window?.matchMedia("(prefers-color-scheme: dark)").matches;
};

const updateAppThemeColor = (color: string, mode?: ThemeMode) => {
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

export type ThemeProviderProps = PropsWithChildren & {
  mode?: ThemeMode;
};

const store = new Storage("theme");
const cookie = new Cookie("theme");

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [mode, _setMode] = useState<ThemeMode>(ThemeMode.Light);
  const [variant, _setVariant] = useState<ThemeVariant>(ThemeVariant.Purple);
  const [userPreference, setUserPreference] = useState(false);

  const setMode = useCallback((mode: ThemeMode) => {
    _setMode(mode);
    store.write("mode", mode);
    setUserPreference(true);
  }, []);

  const setVariant = useCallback((variant: ThemeVariant) => {
    _setVariant(variant);
    store.write("variant", variant);
    setUserPreference(true);
  }, []);

  useEffect(() => {
    const _mode: ThemeMode = store.read("mode");
    const _variant: ThemeVariant = store.read("variant");

    if (_mode) {
      _setMode(_mode);
    } else {
      const prefersDark = prefersDarkClient();
      const systemMode = prefersDark ? ThemeMode.Dark : ThemeMode.Light;

      _setMode(systemMode);
    }

    if (_variant) {
      _setVariant(_variant);
    }

    setUserPreference(!!(_mode || _variant));
  }, []);

  useEffect(() => {
    document.documentElement.dataset.themeMode = mode;
  }, [mode]);

  useEffect(() => {
    document.documentElement.dataset.themeVariant = variant;
  }, [variant]);

  useEffect(() => {
    const themeColor = THEME_COLORS[mode][variant];

    updateAppThemeColor(themeColor);
    cookie.set("color", themeColor);
  }, [mode, variant]);

  useEffect(() => {
    document.documentElement.dataset.themeSource = userPreference
      ? "user"
      : "auto";
  }, [userPreference]);

  return (
    <ThemeContext.Provider value={{ mode, variant, setMode, setVariant }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
