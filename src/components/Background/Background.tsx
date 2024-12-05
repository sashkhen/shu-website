import clsx from "clsx";

import { BaseDivProps } from "@/types/base";

import styles from "./Background.module.scss";

const ELEMENTS_COUNT = 100;

type BaseProps = Omit<BaseDivProps, "data-testid" | "ref">;

type BackgroundProps = BaseProps & {};

const Background: React.FC<BackgroundProps> = ({ className, ...props }) => {
  return (
    <div className={clsx(styles.root, className)} {...props}>
      {Array.from(Array(ELEMENTS_COUNT)).map((_, i) => (
        <span key={i} className={styles.dot} />
      ))}
    </div>
  );
};

export default Background;
