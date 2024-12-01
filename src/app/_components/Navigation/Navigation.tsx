"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { SlidingList } from "../SlidingList";
import styles from "./Navigation.module.scss";

type BaseProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "data-testid" | "ref"
>;

export type NavigationProps = BaseProps & {};

const LINKS = [
  {
    label: "Home",
    pathname: "/",
  },
  {
    label: "About",
    pathname: "/about",
  },
  {
    label: "Contact",
    pathname: "/contact",
  },
];

const Navigation: React.FC<NavigationProps> = ({ className, ...props }) => {
  const pathname = usePathname();
  const activeRef = useRef(null);
  const [active, setActive] = useState<typeof activeRef.current>(null);

  useEffect(() => {
    setActive(activeRef.current);
  }, [pathname]);

  return (
    <div className={clsx(styles.root, className)} {...props}>
      <SlidingList activeEl={active ?? undefined} className={styles.list}>
        {LINKS.map((item) => {
          const active = pathname === item.pathname;

          return (
            <Link
              key={item.label}
              href={item.pathname}
              className={styles.item}
              data-active={active}
              ref={active ? activeRef : null}
            >
              {item.label}
            </Link>
          );
        })}
      </SlidingList>
    </div>
  );
};

export default Navigation;
