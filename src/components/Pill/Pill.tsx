import clsx from "clsx";
import React from "react";
import { DivProps } from "react-html-props";

import styles from "./Pill.module.scss";

type BaseProps = Omit<DivProps, "data-testid" | "ref">;

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
