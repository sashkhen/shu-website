"use client";

import clsx from "clsx";
import { FormattedMessage } from "react-intl";

import { ThemeMode, ThemeVariant, useTheme } from "@/contexts/ThemeProvider";
import { DivProps } from "@/types/base";

import { Toggle } from "../Toggle";
import styles from "./ThemeConfigurator.module.scss";

type BaseProps = Omit<DivProps, "data-testid" | "ref">;

type ThemeProps = BaseProps & {};

const ThemeConfigurator: React.FC<ThemeProps> = ({ className, ...props }) => {
  const theme = useTheme();

  return (
    <div className={clsx(styles.root, className)} {...props}>
      <div className={styles.field}>
        <FormattedMessage id="themeConfig.mode" />
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
        <FormattedMessage id="themeConfig.variant" />
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
