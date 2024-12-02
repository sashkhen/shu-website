import clsx from "clsx";

import styles from "./Social.module.scss";

type BaseProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "data-testid" | "ref"
>;

export type SocialProps = BaseProps & {};

const Social: React.FC<SocialProps> = ({ className, ...props }) => {
  return (
    <div className={clsx(styles.root, className)} {...props}>
      social
    </div>
  );
};

export default Social;
