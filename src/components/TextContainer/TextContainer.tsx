import clsx from "clsx";

import styles from "./TextContainer.module.scss";

type BaseProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "data-testid" | "ref"
>;

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
