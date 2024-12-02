import clsx from "clsx";

import styles from "./Button.module.css";

type BaseProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "data-testid" | "ref"
>;

export type ButtonProps = BaseProps & {
  variant?: "solid" | "outlined" | "text" | "link";
  size?: "small" | "medium" | "large";
  raised?: boolean;
  disabled?: boolean;
  block?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  variant = "solid",
  size = "medium",
  raised = false,
  disabled = false,
  block = false,
  className,
  children,
  ...props
}) => {
  return (
    <button
      data-testid="Button"
      type="button"
      className={clsx(styles.root, className)}
      disabled={disabled}
      data-variant={variant}
      data-size={size}
      data-raised={raised}
      data-block={block}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
