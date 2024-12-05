import clsx from "clsx";
import Link from "next/link";

import { BackToTop } from "@/components/BackToTop";
import { Navigation } from "@/components/Navigation";
import ShuSVG from "@/icons/ShuSVG";

import styles from "./AppLayout.module.scss";

type BaseProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "data-testid" | "ref"
>;

type AppLayoutProps = BaseProps & {};

const AppLayout: React.FC<AppLayoutProps> = ({
  children,
  className,
  ...props
}) => {
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
      <BackToTop className={styles.toTop} />
    </div>
  );
};

export default AppLayout;
