"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";

import { DivProps } from "@/types/base";
import { Dictionary } from "@/types/i18n";

import { SlidingList } from "../SlidingList";
import styles from "./Navigation.module.scss";

type BaseProps = Omit<DivProps, "data-testid" | "ref">;

export type NavigationProps = BaseProps & {
  dictionary: Dictionary["layout"]["navigation"];
};

const LINKS: Record<string, { pathname: string }> = {
  home: {
    pathname: "/",
  },
  about: {
    pathname: "/about",
  },
  contact: {
    pathname: "/contact",
  },
};

const Navigation: React.FC<NavigationProps> = ({
  className,
  dictionary,
  ...props
}) => {
  const pathname = usePathname();
  const activeRef = useRef(null);
  const [active, setActive] = useState<typeof activeRef.current>(null);
  const links = useMemo(
    () =>
      Object.keys(LINKS).map((key) => {
        return {
          label: dictionary[key as keyof typeof dictionary],
          ...LINKS[key],
        };
      }),
    [dictionary]
  );

  useEffect(() => {
    setActive(activeRef.current);
  }, [pathname]);

  return (
    <div className={clsx(styles.root, className)} {...props}>
      <SlidingList activeEl={active ?? undefined} className={styles.list}>
        {links.map((item) => {
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
