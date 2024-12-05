"use client";

import { ThemeMode, useTheme } from "@/contexts/ThemeProvider";

import { Button, ButtonProps } from "../Button";

export type ThemeModeButtonProps = ButtonProps & {};

const ThemeModeButton: React.FC<ThemeModeButtonProps> = ({ ...props }) => {
  const { mode, setMode } = useTheme();

  return (
    <Button
      size="medium"
      shape="circle"
      onClick={() => {
        setMode(mode === ThemeMode.Dark ? ThemeMode.Light : ThemeMode.Dark);
      }}
      {...props}
    >
      {mode === ThemeMode.Dark ? "🌖" : "🌘"}
    </Button>
  );
};

export default ThemeModeButton;
