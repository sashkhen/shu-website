import { ThemeMode, ThemeVariant } from "@/types/theme";

export const THEME_COLORS = {
  [ThemeMode.Light]: {
    [ThemeVariant.Plain]: "#d4d5d2",
    [ThemeVariant.Purple]: "#e4d8da",
  },
  [ThemeMode.Dark]: {
    [ThemeVariant.Plain]: "#262725",
    [ThemeVariant.Purple]: "#4d40dd",
  },
};

export const DEFAULT_THEME_MODE = ThemeMode.Light;
export const DEFAULT_THEME_VARIANT = ThemeVariant.Purple;
