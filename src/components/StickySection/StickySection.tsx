import clsx from "clsx";

import { BaseDivProps } from "@/types/base";

import styles from "./StickySection.module.scss";

type BaseProps = Omit<BaseDivProps, "data-testid" | "ref">;

type StickySectionProps = BaseProps & {
  stickyEl: React.ReactNode;
};

const StickySection: React.FC<StickySectionProps> = ({
  className,
  children,
  stickyEl,
  ...props
}) => {
  return (
    <div className={clsx(styles.root, className)} {...props}>
      <div className={clsx(styles.stickyEl)}>{stickyEl}</div>
      {children}
    </div>
  );
};

export default StickySection;
