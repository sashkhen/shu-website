"use client";

import clsx from "clsx";
import { DivProps } from "react-html-props";
import { FormattedMessage } from "react-intl";

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
          <FormattedMessage id="home.title" values={{ br: <br key="br" /> }} />
        </Typography.H1>
        <Typography.H3>
          <FormattedMessage id="home.subtitle" />
        </Typography.H3>
        <TextContainer className={styles.text}>
          <Typography.P>
            <FormattedMessage id="home.text" />
          </Typography.P>
        </TextContainer>
      </div>
    </div>
  );
};

export default Hero;
