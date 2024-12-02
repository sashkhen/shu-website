import clsx from "clsx";
import Link from "next/link";

import ShuSVG from "@/app/_icons/ShuSVG";

import { Navigation } from "../Navigation";
import styles from "./Layout.module.scss";

type BaseProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "data-testid" | "ref"
>;

const Layout: React.FC<BaseProps> = ({ children, className, ...props }) => {
  return (
    <div className={clsx(styles.root, className)} {...props}>
      <header className={styles.header} data-sticky="true">
        <div className={clsx(styles.content, styles.navigation)}>
          <Link href="/" className={styles.logo}>
            <ShuSVG />
          </Link>
          <Navigation />
        </div>
      </header>
      <main className={clsx(styles.main, styles.content)}>{children}</main>
    </div>
  );
};

export default Layout;
