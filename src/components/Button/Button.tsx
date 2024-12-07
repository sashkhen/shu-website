import clsx from "clsx";
import { ButtonProps as ButtonHTMLProps } from "react-html-props";

import styles from "./Button.module.scss";

type BaseProps = Omit<ButtonHTMLProps, "data-testid" | "ref">;

export type ButtonProps = BaseProps & {
  size?: "small" | "medium" | "large";
  shape?: "round" | "circle";
  raised?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  size = "medium",
  shape = "round",
  raised = false,
  className,
  ...props
}) => {
  return (
    <button
      className={clsx(styles.root, className)}
      data-size={size}
      data-shape={shape}
      data-raised={raised}
      {...props}
    />
  );
};

export default Button;
