"use client";

import clsx from "clsx";
import { DivProps } from "react-html-props";
import { FormattedMessage } from "react-intl";

import { TextContainer } from "../TextContainer";
import { Typography } from "../Typography";
import styles from "./HeroAbout.module.scss";

type BaseProps = Omit<DivProps, "data-testid" | "ref">;

export type HeroAboutProps = BaseProps & {};

const HeroAbout: React.FC<HeroAboutProps> = ({ className, ...props }) => {
  return (
    <div className={clsx(styles.root, className)} {...props}>
      <Typography.H2>
        <FormattedMessage id="about.title" />
      </Typography.H2>
      <TextContainer>
        <Typography.P>
          <FormattedMessage id="about.subtitle" />
        </Typography.P>
      </TextContainer>
    </div>
  );
};

export default HeroAbout;
