"use client";

import { useTheme } from "@/contexts/ThemeProvider";
import { ThemeVariant } from "@/types/theme";

import { Button, ButtonProps } from "../Button";

export type ThemeVariantButtonProps = ButtonProps & {};

const ThemeVariantButton: React.FC<ThemeVariantButtonProps> = ({
  ...props
}) => {
  const { variant, setVariant } = useTheme();

  return (
    <Button
      size="medium"
      shape="circle"
      onClick={() => {
        setVariant(
          variant === ThemeVariant.Purple
            ? ThemeVariant.Plain
            : ThemeVariant.Purple
        );
      }}
      {...props}
    >
      {variant === ThemeVariant.Purple ? "🙊" : "🙈"}
    </Button>
  );
};

export default ThemeVariantButton;
