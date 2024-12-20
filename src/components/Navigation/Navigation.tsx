"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { DivProps } from "react-html-props";
import { FormattedMessage } from "react-intl";

import { SlidingList } from "../SlidingList";
import styles from "./Navigation.module.scss";

type BaseProps = Omit<DivProps, "data-testid" | "ref">;

export type NavigationProps = BaseProps & {};

const LINKS: Record<string, { id: string; pathname: string }> = {
  home: {
    id: "navLinks.home",
    pathname: "/",
  },
  about: {
    id: "navLinks.about",
    pathname: "/about",
  },
  contact: {
    id: "navLinks.contact",
    pathname: "/contact",
  },
};

const Navigation: React.FC<NavigationProps> = ({ className, ...props }) => {
  const pathname = usePathname();
  const activeRef = useRef(null);
  const [active, setActive] = useState<typeof activeRef.current>(null);
  const links = useMemo(() => Object.keys(LINKS).map((key) => LINKS[key]), []);

  useEffect(() => {
    setActive(activeRef.current);
  }, [pathname]);

  return (
    <div className={clsx(styles.root, className)} {...props}>
      <SlidingList activeEl={active ?? undefined} className={styles.list}>
        {links.map((item) => {
          const active = pathname === item.pathname;

          return (
            <div
              key={item.id}
              className={styles.item}
              ref={active ? activeRef : null}
            >
              <Link href={item.pathname} data-active={active}>
                <FormattedMessage id={item.id} />
              </Link>
            </div>
          );
        })}
      </SlidingList>
    </div>
  );
};

export default Navigation;
