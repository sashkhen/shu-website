"use client";

import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import {
  DEFAULT_THEME_MODE,
  DEFAULT_THEME_VARIANT,
  THEME_COLORS,
} from "@/constants/theme";
import { ThemeMode, ThemeVariant } from "@/types/theme";
import Cookie from "@/utils/Cookie";
import Storage from "@/utils/Storage";
import { prefersDarkClient, updateAppThemeColor } from "@/utils/theme";

type ThemeContextType = {
  mode: ThemeMode;
  variant: ThemeVariant;
  setMode: (mode: ThemeMode) => void;
  setVariant: (variant: ThemeVariant) => void;
};

export type ThemeProviderProps = PropsWithChildren & {
  mode?: ThemeMode;
};

const store = new Storage("theme");
const cookie = new Cookie("theme");
const ThemeContext = createContext<ThemeContextType | null>(null);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [mode, _setMode] = useState<ThemeMode>(DEFAULT_THEME_MODE);
  const [variant, _setVariant] = useState<ThemeVariant>(DEFAULT_THEME_VARIANT);
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
