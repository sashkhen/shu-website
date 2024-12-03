import clsx from "clsx";

import { DivProps } from "@/types/base";
import { Dictionary } from "@/types/i18n";

import { TextContainer } from "../TextContainer";
import { Typography } from "../Typography";
import styles from "./Hero.module.scss";

type BaseProps = Omit<DivProps, "data-testid" | "ref">;

type HeroProps = BaseProps & {
  dictionary: Dictionary["home"]["hero"];
};

const Hero: React.FC<HeroProps> = ({ className, dictionary, ...props }) => {
  return (
    <div className={clsx(styles.root, className)} {...props}>
      <div>
        <Typography.H1>{dictionary.title}</Typography.H1>
        <Typography.H2>{dictionary.subtitle}</Typography.H2>
        <TextContainer className={styles.text}>
          <Typography.P>{dictionary.text}</Typography.P>
        </TextContainer>
      </div>
    </div>
  );
};

export default Hero;
