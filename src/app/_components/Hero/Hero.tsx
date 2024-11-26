import clsx from "clsx";

import DeveloperSVG from "@/app/_icons/DeveloperSVG";

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
      </div>
      <div className={styles.illustration}>
        <DeveloperSVG />
      </div>
    </div>
  );
};

export default Hero;
