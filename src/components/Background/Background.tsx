"use client";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { DivProps } from "react-html-props";

import styles from "./Background.module.scss";

const ELEMENTS_COUNT = 100;

type BaseProps = Omit<DivProps, "data-testid" | "ref">;

type BackgroundProps = BaseProps & {};

const getRandomNum = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generateCssVars = () =>
  Array.from(Array(ELEMENTS_COUNT)).map(() => {
    const size = getRandomNum(8, 32);

    return {
      "--dot-size": size + "px",
      "--dot-border-width": getRandomNum(1, size / 2) + "px",
      "--dot-color": `var(--dot-color-${getRandomNum(
        1,
        5
      )}, var(--foreground))`,
      "--dot-opacity": getRandomNum(40, 80) / 100,
      "--dot-duration": getRandomNum(10, 100) + "s",
      "--dot-left": getRandomNum(0, 100) + "%",
      "--dot-top-start": getRandomNum(0, 100) + "%",
      "--dot-top-end": getRandomNum(0, 100) * -1 + "%",
      ...Array.from(Array(10)).reduce((acc, _, i) => {
        return {
          ...acc,
          [`--dot-transform-${i + 1}`]: `translateX(${getRandomNum(
            0,
            200
          )}%) rotate(${getRandomNum(-360, 360)}deg)`,
        } as React.CSSProperties;
      }, {}),
    } as React.CSSProperties;
  });

const Background: React.FC<BackgroundProps> = ({ className, ...props }) => {
  const [cssVars, setCssVars] = useState<React.CSSProperties[]>([]);

  useEffect(() => {
    setCssVars(generateCssVars());
  }, []);

  return (
    <div className={clsx(styles.root, className)} {...props}>
      {cssVars.map((elementCssVars, i) => (
        <span key={i} className={styles.dot} style={elementCssVars} />
      ))}
    </div>
  );
};

export default Background;
