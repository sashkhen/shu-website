import clsx from "clsx";

import { BaseDivProps } from "@/types/base";

import styles from "./TextContainer.module.scss";

type BaseProps = Omit<BaseDivProps, "data-testid" | "ref">;

export type TextContainerProps = BaseProps & {};

const TextContainer: React.FC<TextContainerProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div className={clsx(styles.root, className)} {...props}>
      {children}
    </div>
  );
};

export default TextContainer;
