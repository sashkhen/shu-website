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
            <FormattedMessage
              id={`experiences.[${i}].description`}
              values={{
                b: (chunks: React.ReactNode[]) => (
                  <b key={chunks.join()}>{chunks}</b>
                ),
                "line-through": (chunks: React.ReactNode[]) => (
                  <span
                    key={chunks.join()}
                    style={{ textDecoration: "line-through" }}
                  >
                    {chunks}
                  </span>
                ),
                lean: (
                  <a
                    key="lean"
                    href="https://en.wikipedia.org/wiki/Lean_thinking"
                    target="_blank"
                  >
                    lean
                  </a>
                ),
              }}
            />
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
