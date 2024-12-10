"use client";
import clsx from "clsx";
import { useMemo } from "react";
import { DivProps } from "react-html-props";

import data from "@/constants/data.json";
import useEmailLink from "@/hooks/useEmailLink";

import { Typography } from "../Typography";
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
};

const Social: React.FC<SocialProps> = ({ className, ...props }) => {
  const emailLink = useEmailLink(data.contact.email);
  const links: SocialLink[] = useMemo(
    () =>
      Object.keys(LINKS)
        .map((key) => LINKS[key])
        .concat({ label: "email", pathname: emailLink }),
    [emailLink]
  );
  return (
    <Typography.P
      className={clsx(styles.root, className)}
      size="large"
      {...props}
    >
      {links.map((link) => (
        <a key={link.label} href={link.pathname} target="_blank">
          {link.label}
        </a>
      ))}
    </Typography.P>
  );
};

export default Social;
