import clsx from "clsx";

import { Navigation } from "../Navigation";
import styles from "./Layout.module.css";

type BaseProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "data-testid" | "ref"
>;

const Layout: React.FC<BaseProps> = ({ children, className, ...props }) => {
  return (
    <div className={clsx(styles.root, className)} {...props}>
      <header className={styles.header}>
        <Navigation />
      </header>
      <aside className={styles.aside} />
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Layout;
