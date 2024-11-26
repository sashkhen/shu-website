"use client";

import clsx from "clsx";
import React, { useMemo } from "react";

import styles from "./SlidingList.module.scss";

type BaseProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "data-testid" | "ref"
>;

export type SlidingListProps = BaseProps & {
  activeEl?: HTMLElement;
};

const SlidingList: React.FC<SlidingListProps> = ({
  activeEl,
  className,
  children,
  ...props
}) => {
  const style = useMemo(
    () =>
      ({
        "--active-offset-x": `${activeEl?.offsetLeft ?? 0}px`,
        "--active-offset-y": `${activeEl?.offsetTop ?? 0}px`,
        "--active-width": `${activeEl?.offsetWidth ?? 0}px`,
        "--active-height": `${activeEl?.offsetHeight ?? 0}px`,
      } as React.CSSProperties),
    [activeEl]
  );

  return (
    <div className={clsx(styles.root, className)} style={style} {...props}>
      {children}
    </div>
  );
};

export default SlidingList;
