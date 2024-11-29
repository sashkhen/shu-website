"use client";

import clsx from "clsx";

import { ThemeMode, ThemeVariant, useTheme } from "@/app/_contexts/ThemeProvider";

import { Toggle } from "../Toggle";
import styles from "./ThemeConfigurator.module.scss";

type BaseProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "data-testid" | "ref"
>;

type ThemeProps = BaseProps & {};

const ThemeConfigurator: React.FC<ThemeProps> = ({ className, ...props }) => {
  const theme = useTheme();

  return (
    <div className={clsx(styles.root, className)} {...props}>
      <div className={styles.field}>
        <span>Dark Mode</span>
        <Toggle
          id="theme-mode"
          name="theme-mode"
          value={ThemeMode.Dark}
          checked={theme.mode === ThemeMode.Dark}
          onChange={(e) =>
            theme.setMode(e.target.checked ? ThemeMode.Dark : ThemeMode.Light)
          }
        />
      </div>
      <div className={styles.field}>
        <span>Theme Variant</span>
        <Toggle
          id="theme-variant"
          name="theme-variant"
          value={ThemeVariant.Purple}
          checked={theme.variant === ThemeVariant.Purple}
          onChange={(e) =>
            theme.setVariant(
              e.target.checked ? ThemeVariant.Purple : ThemeVariant.Plain
            )
          }
        />
      </div>
    </div>
  );
};

export default ThemeConfigurator;
