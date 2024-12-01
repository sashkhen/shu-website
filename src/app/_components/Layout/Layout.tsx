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
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          <ShuSVG />
        </Link>
        <Navigation />
      </header>
      <aside className={styles.aside} />
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Layout;
