import clsx from "clsx";

import { BaseDivProps } from "@/types/base";

import styles from "./Loader.module.scss";

type BaseProps = Omit<BaseDivProps, "data-testid" | "ref">;

export type LoaderProps = BaseProps & {};

const Loader: React.FC<LoaderProps> = ({ className, ...props }) => {
  return (
    <div className={clsx(styles.root, className)} {...props}>
      <div className={styles.dots}>
        {Array.from(Array(3)).map((_, i) => (
          <div key={i} className={styles.dot} />
        ))}
      </div>
    </div>
  );
};

export default Loader;
