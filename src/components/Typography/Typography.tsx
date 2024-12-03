import clsx from "clsx";

import styles from "./Typography.module.scss";

type HeadingBaseProps = Omit<
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >,
  "data-testid" | "ref"
>;

type ParagraphBaseProps = Omit<
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  >,
  "data-testid" | "ref"
>;

export type HeadingProps = HeadingBaseProps & {};
export type ParagraphProps = ParagraphBaseProps & {};

const H1: React.FC<HeadingProps> = ({ className, ...props }) => {
  return <h1 className={clsx(styles.h1, className)} {...props} />;
};

const H2: React.FC<HeadingProps> = ({ className, ...props }) => {
  return <h2 className={clsx(styles.h2, className)} {...props} />;
};

const P: React.FC<HeadingProps> = ({ className, ...props }) => {
  return <p className={clsx(styles.p, className)} {...props} />;
};

const Typography = {
  H1,
  H2,
  P,
};

export default Typography;
