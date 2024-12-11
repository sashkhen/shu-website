"use client";

import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { DivProps } from "react-html-props";

import useFontsLoaded from "@/hooks/useFontsLoaded";
import useOnResize from "@/hooks/useOnResize";

import styles from "./SlidingList.module.scss";

type BaseProps = Omit<DivProps, "data-testid" | "ref">;

export type SlidingListProps = BaseProps & {
  activeEl?: HTMLElement;
};

const getSliderVars = (el?: HTMLElement) =>
  ({
    "--list-active-offset-x": `${el?.offsetLeft ?? 0}px`,
    "--list-active-offset-y": `${el?.offsetTop ?? 0}px`,
    "--list-active-width": `${el?.offsetWidth ?? 0}px`,
    "--list-active-height": `${el?.offsetHeight ?? 0}px`,
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

  useFontsLoaded(() => {
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
