"use client";

import clsx from "clsx";
import { DivProps } from "react-html-props";
import { FormattedMessage } from "react-intl";

import data from "@/constants/data.json";

import { TextContainer } from "../TextContainer";
import { Typography } from "../Typography";
import styles from "./HeroContact.module.scss";

type BaseProps = Omit<DivProps, "data-testid" | "ref">;

export type HeroContactProps = BaseProps & {};

const HeroContact: React.FC<HeroContactProps> = ({ className, ...props }) => {
  return (
    <div className={clsx(styles.root, className)} {...props}>
      <Typography.H2>
        <FormattedMessage id="contact.title" />
      </Typography.H2>
      <TextContainer>
        <Typography.P>
          <FormattedMessage id="contact.subtitle" />
        </Typography.P>
        <Typography.P>
          <FormattedMessage
            id="contact.text"
            values={{
              email: (
                <a
                  key="email"
                  href={`mailto:${data.contact.email}`}
                  target="_blank"
                >
                  {data.contact.email}
                </a>
              ),
              github: (
                <a key="github" href={data.contact.github} target="_blank">
                  github
                </a>
              ),
              codepen: (
                <a key="codepen" href={data.contact.codepen} target="_blank">
                  codepen
                </a>
              ),
              username: <b key="username">@{data.contact.username}</b>,
              cv: (
                <a key="cv" href={data.contact.cv} target="_blank">
                  resume
                </a>
              ),
            }}
          />
        </Typography.P>
      </TextContainer>
    </div>
  );
};

export default HeroContact;
