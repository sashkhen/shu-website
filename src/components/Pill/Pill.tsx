import clsx from "clsx";
import React from "react";

import { BaseDivProps } from "@/types/base";

import styles from "./Pill.module.scss";

type BaseProps = Omit<BaseDivProps, "data-testid" | "ref">;

export type PillProps = BaseProps & {
  variant?: "solid" | "outline";
};

const Pill: React.FC<PillProps> = ({
  variant = "outline",
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={clsx(styles.root, className)}
      data-variant={variant}
      {...props}
    >
      {children}
    </div>
  );
};

export default Pill;
