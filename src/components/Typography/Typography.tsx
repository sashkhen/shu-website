import clsx from "clsx";
import { HeadingProps, PProps } from "react-html-props";

import styles from "./Typography.module.scss";

type HeadingBaseProps = Omit<HeadingProps, "data-testid" | "ref">;

type ParagraphBaseProps = Omit<PProps, "data-testid" | "ref">;

const H1: React.FC<HeadingBaseProps> = ({ className, ...props }) => {
  return <h1 className={clsx(styles.h1, className)} {...props} />;
};

const H2: React.FC<HeadingBaseProps> = ({ className, ...props }) => {
  return <h2 className={clsx(styles.h2, className)} {...props} />;
};

const P: React.FC<
  ParagraphBaseProps & {
    size?: "small" | "medium" | "large";
  }
> = ({ size = "medium", className, ...props }) => {
  return (
    <p className={clsx(styles.p, className)} data-size={size} {...props} />
  );
};

const Typography = {
  H1,
  H2,
  P,
};

export default Typography;
