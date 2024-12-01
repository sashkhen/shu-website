import clsx from "clsx";

import DeveloperSVG from "@/app/_icons/DeveloperSVG";
import ShuSVG from "@/app/_icons/ShuSVG";

import styles from "./Hero.module.scss";

type BaseProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "data-testid" | "ref"
>;

type HeroProps = BaseProps & {};

const Hero: React.FC<HeroProps> = ({ className, ...props }) => {
  return (
    <div className={clsx(styles.root, className)} {...props}>
      <div>
        <h1 className={styles.title}>Hey! I&apos;m Sasha</h1>
        <h3 className={styles.subtitle}>Front-end Web Dev</h3>
        <p className={styles.description}>
          I'm a passionate React developer with a keen eye for crafting
          beautiful, intuitive, and responsive user interfaces. My focus is on
          delivering clean, maintainable code that ensures seamless
          functionality and a great user experience. Whether it's building from
          scratch or enhancing existing projects, I strive to deliver solutions
          that meet user and business needs.
        </p>
      </div>
    </div>
  );
};

export default Hero;
