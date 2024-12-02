import clsx from "clsx";

import styles from "./Toggle.module.scss";

type BaseProps = Omit<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  "data-testid" | "ref"
>;

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
