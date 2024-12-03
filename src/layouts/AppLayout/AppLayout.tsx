import clsx from "clsx";
import Link from "next/link";

import ShuSVG from "@/icons/ShuSVG";

import { Navigation } from "../../components/Navigation";
import styles from "./AppLayout.module.scss";

type BaseProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "data-testid" | "ref"
>;

const AppLayout: React.FC<BaseProps> = ({ children, className, ...props }) => {
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

export default AppLayout;
