import clsx from "clsx";
import { FormattedDate } from "react-intl";

import { BaseDivProps } from "@/types/base";

import { Pill } from "../Pill";
import { StickySection } from "../StickySection";
import styles from "./Experience.module.scss";

type BaseProps = Omit<BaseDivProps, "data-testid" | "ref">;

type ExperienceProps = BaseProps & {
  order: React.ReactNode;
  title?: string;
  subtitle?: string;
  startDate?: string;
  endDate?: string;
  stack?: string[];
};

const Experience: React.FC<ExperienceProps> = ({
  className,
  children,
  order,
  title,
  subtitle,
  startDate,
  endDate,
  stack,
  ...props
}) => {
  return (
    <StickySection
      className={clsx(styles.root, className)}
      stickyEl={<div className={styles.order}>{`0${order}`.slice(-2)}</div>}
      {...props}
    >
      <div className={styles.content}>
        <div className={styles.summary}>
          {title && <p className={styles.title}>{title}</p>}
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          {startDate && (
            <div className={styles.duration}>
              <span className={styles.date}>
                <FormattedDate value={startDate} year="numeric" />
              </span>
              {" — "}
              <span className={styles.date}>
                {endDate ? (
                  <FormattedDate value={endDate} year="numeric" />
                ) : (
                  "ongoing"
                )}
              </span>
            </div>
          )}
        </div>
        <div className={styles.description}>{children}</div>
        {stack?.length ? (
          <ul className={styles.stack}>
            {stack?.map((item) => (
              <li key={item}>
                <Pill>{item}</Pill>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </StickySection>
  );
};

export default Experience;
