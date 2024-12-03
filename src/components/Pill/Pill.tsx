import clsx from "clsx";
import React from "react";

import { DivProps } from "@/types/base";

import styles from "./Pill.module.scss";

type BaseProps = Omit<DivProps, "data-testid" | "ref">;

export type PillProps = BaseProps & {};

const Pill: React.FC<PillProps> = ({ children, className, ...props }) => {
  return (
    <div className={clsx(styles.root, className)} {...props}>
      {children}
    </div>
  );
};

export default Pill;
