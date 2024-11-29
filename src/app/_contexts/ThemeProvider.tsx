import {
    createContext, PropsWithChildren, useCallback, useContext, useEffect, useMemo, useState
} from "react";

import cookie from "@/app/_utils/cookie";
import Storage from "@/app/_utils/Storage";

export enum ThemeMode {
  Light = "light",
  Dark = "dark",
}

export enum ThemeVariant {
  Plain = "plain",
  Purple = "purple",
}

type ThemeContextType = {
  mode: ThemeMode;
  variant: ThemeVariant;
  setMode: (mode: ThemeMode) => void;
  setVariant: (variant: ThemeVariant) => void;
};

const initialState = {
  variant: Math.random() > 0.5 ? ThemeVariant.Purple : ThemeVariant.Plain,
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

const prefersDarkServer = (cookieMode?: ThemeMode) =>
  cookieMode === ThemeMode.Dark;

const prefersDarkClient = () => {
  if (typeof window === "undefined") {
    return null;
  }

  return window?.matchMedia("(prefers-color-scheme: dark)").matches;
};

export type ThemeProviderProps = PropsWithChildren & {
  mode?: ThemeMode;
};

const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  mode: cookieThemeMode,
}) => {
  const store = useMemo(() => new Storage("theme"), []);
  const [mode, _setMode] = useState<ThemeMode>(
    prefersDarkServer(cookieThemeMode) ? ThemeMode.Dark : ThemeMode.Light
  );

  const [variant, _setVariant] = useState<ThemeVariant>(initialState.variant);
  const [userPreference, setUserPreference] = useState(false);

  const setMode = useCallback(
    (mode: ThemeMode) => {
      _setMode(mode);
      store.write("mode", mode);
      setUserPreference(true);
    },
    [store]
  );

  const setVariant = useCallback(
    (variant: ThemeVariant) => {
      _setVariant(variant);
      store.write("variant", variant);
      setUserPreference(true);
    },
    [store]
  );

  useEffect(() => {
    const _mode: ThemeMode = store.read("mode");
    const _variant: ThemeVariant = store.read("variant");

    if (_mode) {
      _setMode(_mode);
      cookie.set("theme-mode", _mode);
    } else {
      const prefersDark = prefersDarkClient();
      const systemMode = prefersDark ? ThemeMode.Dark : ThemeMode.Light;

      _setMode(systemMode);
      cookie.set("theme-mode", systemMode);
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
