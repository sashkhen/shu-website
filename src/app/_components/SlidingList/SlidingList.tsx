"use client";

import clsx from "clsx";
import React, { useEffect, useState } from "react";

import useOnResize from "@/app/_hooks/useOnResize";

import styles from "./SlidingList.module.scss";

type BaseProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "data-testid" | "ref"
>;

export type SlidingListProps = BaseProps & {
  activeEl?: HTMLElement;
};

const getSliderVars = (el?: HTMLElement) =>
  ({
    "--active-offset-x": `${el?.offsetLeft ?? 0}px`,
    "--active-offset-y": `${el?.offsetTop ?? 0}px`,
    "--active-width": `${el?.offsetWidth ?? 0}px`,
    "--active-height": `${el?.offsetHeight ?? 0}px`,
  } as React.CSSProperties);

const SlidingList: React.FC<SlidingListProps> = ({
  activeEl,
  className,
  children,
  ...props
}) => {
  const [style, setStyle] = useState(getSliderVars(activeEl));

  useEffect(() => {
    setStyle(getSliderVars(activeEl));
  }, [activeEl]);

  useOnResize(() => {
    setStyle(getSliderVars(activeEl));
  });

  return (
    <div className={clsx(styles.root, className)} style={style} {...props}>
      <div data-role="slider" style={activeEl ? {} : { display: "none" }} />
      {children}
    </div>
  );
};

export default SlidingList;
