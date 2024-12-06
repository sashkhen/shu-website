"use client";

import clsx from "clsx";
import { FormattedMessage, useIntl } from "react-intl";

import data from "@/constants/data.json";
import { BaseDivProps } from "@/types/base";

import { Experience } from "../Experience";
import styles from "./Experiences.module.scss";

type BaseProps = Omit<BaseDivProps, "data-testid" | "ref">;

export type ExperiencesProps = BaseProps & {};

const Experiences: React.FC<ExperiencesProps> = ({ className, ...props }) => {
  const intl = useIntl();

  return (
    <div className={clsx(styles.root, className)} {...props}>
      <Experience
        order={0}
        title={intl.formatMessage({ id: "about.foreword.title" })}
      >
        <FormattedMessage id="about.foreword.text" />
      </Experience>
      {[...data.employment]
        .map((experience, i, arr) => (
          <Experience
            key={experience.startDate}
            order={arr.length - i}
            title={experience.position}
            subtitle={experience.company}
            startDate={experience.startDate}
            endDate={experience.endDate}
            stack={experience.techStack}
          >
            <p>{`server: ${process.env.ENV_VARIABLE}, client: ${process.env.NEXT_PUBLIC_ENV_VARIABLE}`}</p>
            <FormattedMessage id={`experiences.[${i}].description`} />
          </Experience>
        ))
        .reverse()}
      <Experience
        order={data.employment.length + 1}
        title={intl.formatMessage({ id: "about.afterword.title" })}
      >
        <FormattedMessage id="about.afterword.text" />
      </Experience>
    </div>
  );
};

export default Experiences;
