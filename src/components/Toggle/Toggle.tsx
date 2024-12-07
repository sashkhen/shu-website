import clsx from "clsx";
import { InputProps } from "react-html-props";

import styles from "./Toggle.module.scss";

type BaseProps = Omit<InputProps, "data-testid" | "ref">;

export type ToggleProps = BaseProps & {};

const Toggle: React.FC<ToggleProps> = ({
  type = "checkbox",
  className,
  ...props
}) => {
  return (
    <label className={clsx(styles.root, className)}>
      <input type={type} className={styles.input} {...props} />
      <span className={styles.slider} />
    </label>
  );
};

export default Toggle;
