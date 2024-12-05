import clsx from "clsx";

import { BaseHeadingProps, BasePProps } from "@/types/base";

import styles from "./Typography.module.scss";

type HeadingBaseProps = Omit<BaseHeadingProps, "data-testid" | "ref">;

type ParagraphBaseProps = Omit<BasePProps, "data-testid" | "ref">;

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
