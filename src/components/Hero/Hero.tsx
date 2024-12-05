"use client";

import clsx from "clsx";
import { FormattedMessage } from "react-intl";

import { DivProps } from "@/types/base";

import { TextContainer } from "../TextContainer";
import { Typography } from "../Typography";
import styles from "./Hero.module.scss";

type BaseProps = Omit<DivProps, "data-testid" | "ref">;

type HeroProps = BaseProps & {};

const Hero: React.FC<HeroProps> = ({ className, ...props }) => {
  return (
    <div className={clsx(styles.root, className)} {...props}>
      <div>
        <Typography.H1>
          <FormattedMessage id="hero.title" />
        </Typography.H1>
        <Typography.H2>
          <FormattedMessage id="hero.subtitle" />
        </Typography.H2>
        <TextContainer className={styles.text}>
          <Typography.P>
            <FormattedMessage id="hero.text" />
          </Typography.P>
        </TextContainer>
      </div>
    </div>
  );
};

export default Hero;
