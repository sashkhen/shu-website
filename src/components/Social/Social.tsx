import clsx from "clsx";
import { useMemo } from "react";

import data from "@/constants/data.json";
import { DivProps } from "@/types/base";
import { Dictionary } from "@/types/i18n";

import styles from "./Social.module.scss";

type BaseProps = Omit<DivProps, "data-testid" | "ref">;

export type SocialProps = BaseProps & {
  dictionary: Dictionary["contact"]["social"];
};

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
    label: "cv",
    pathname: data.contact.cv,
  },
  email: {
    label: "email",
    pathname: `mailto:${data.contact.email}`,
  },
};

const Social: React.FC<SocialProps> = ({ className, dictionary, ...props }) => {
  const links: SocialLink[] = useMemo(
    () =>
      Object.keys(LINKS).map((key) => {
        return {
          ...LINKS[key],
          label: dictionary[key as keyof typeof dictionary] || LINKS[key].label,
        };
      }),
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
