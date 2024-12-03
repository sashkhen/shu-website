import clsx from "clsx";

import { TextContainer } from "../TextContainer";
import { Typography } from "../Typography";
import styles from "./Hero.module.scss";

type BaseProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "data-testid" | "ref"
>;

type HeroProps = BaseProps & {};

const config = {
  title: "Hey! I'm Sasha",
  subtitle: "Front-end Web Dev",
  text: "I'm a passionate React developer with a keen eye for crafting beautiful, intuitive, and responsive user interfaces. My focus is on delivering clean, maintainable code that ensures seamless functionality and a great user experience. Whether it's building from scratch or enhancing existing projects, I strive to deliver solutions that meet user and business needs.",
};

const Hero: React.FC<HeroProps> = ({ className, ...props }) => {
  return (
    <div className={clsx(styles.root, className)} {...props}>
      <div>
        <Typography.H1>{config.title}</Typography.H1>
        <Typography.H2>{config.subtitle}</Typography.H2>
        <TextContainer className={styles.text}>
          <Typography.P>{config.text}</Typography.P>
        </TextContainer>
      </div>
    </div>
  );
};

export default Hero;
