import clsx from "clsx";
import { useMemo } from "react";

import data from "@/constants/data.json";
import { DivProps } from "@/types/base";

import styles from "./Social.module.scss";

type BaseProps = Omit<DivProps, "data-testid" | "ref">;

export type SocialProps = BaseProps & {};

type SocialLink = {
  label: string;
  pathname: string;
};

const LINKS: Record<string, SocialLink> = {
  github: {
    label: "github",
    pathname: data.contact.github,
  },
  linkedin: {
    label: "linkedin",
    pathname: data.contact.linkedin,
  },
  cv: {
    label: "resume",
    pathname: data.contact.cv,
  },
  email: {
    label: "email",
    pathname: `mailto:${data.contact.email}`,
  },
};

const Social: React.FC<SocialProps> = ({ className, ...props }) => {
  const links: SocialLink[] = useMemo(
    () => Object.keys(LINKS).map((key) => LINKS[key]),
    []
  );
  return (
    <div className={clsx(styles.root, className)} {...props}>
      {links.map((link) => (
        <a key={link.label} href={link.pathname} target="_blank">
          {link.label}
        </a>
      ))}
    </div>
  );
};

export default Social;
