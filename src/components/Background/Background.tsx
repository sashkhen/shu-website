import clsx from "clsx";
import { useMemo } from "react";
import { DivProps } from "react-html-props";

import styles from "./Background.module.scss";

const ELEMENTS_COUNT = 100;

type BaseProps = Omit<DivProps, "data-testid" | "ref">;

type BackgroundProps = BaseProps & {};

const getRandomNum = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const Background: React.FC<BackgroundProps> = ({ className, ...props }) => {
  const cssVars = useMemo(
    () =>
      Array.from(Array(ELEMENTS_COUNT)).map(() => {
        const size = getRandomNum(8, 32);

        return {
          "--size": size + "px",
          "--border-width": getRandomNum(1, size / 2) + "px",
          "--dot-color": `var(--color-${getRandomNum(
            1,
            5
          )}, var(--foreground))`,
          "--opacity": getRandomNum(40, 80) / 100,
          "--duration": getRandomNum(10, 100) + "s",
          "--left": getRandomNum(0, 100) + "%",
          "--top": getRandomNum(0, 100) + "%",
          "--toTop": getRandomNum(0, 100) * -1 + "%",
          ...Array.from(Array(10)).reduce((acc, _, i) => {
            return {
              ...acc,
              [`--transform-${i + 1}`]: `translateX(${getRandomNum(
                0,
                200
              )}%) rotate(${getRandomNum(-360, 360)}deg)`,
            } as React.CSSProperties;
          }, {}),
        } as React.CSSProperties;
      }),
    []
  );

  return (
    <div className={clsx(styles.root, className)} {...props}>
      {cssVars.map((elementCssVars, i) => (
        <span key={i} className={styles.dot} style={elementCssVars} />
      ))}
    </div>
  );
};

export default Background;
