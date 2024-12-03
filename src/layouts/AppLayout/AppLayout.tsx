import clsx from "clsx";
import Link from "next/link";

import ShuSVG from "@/icons/ShuSVG";
import { Dictionary } from "@/types/i18n";

import { Navigation } from "../../components/Navigation";
import styles from "./AppLayout.module.scss";

type BaseProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "data-testid" | "ref"
>;

type AppLayoutProps = BaseProps & {
  dictionary: Dictionary["layout"];
};

const AppLayout: React.FC<AppLayoutProps> = ({
  children,
  className,
  dictionary,
  ...props
}) => {
  return (
    <div className={clsx(styles.root, className)} {...props}>
      <header className={styles.header} data-sticky="true">
        <div className={clsx(styles.content, styles.navigation)}>
          <Link href="/" className={styles.logo}>
            <ShuSVG />
          </Link>
          <Navigation dictionary={dictionary.navigation} />
        </div>
      </header>
      <main className={clsx(styles.main, styles.content)}>{children}</main>
    </div>
  );
};

export default AppLayout;
