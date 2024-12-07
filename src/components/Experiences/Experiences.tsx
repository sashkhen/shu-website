"use client";

import clsx from "clsx";
import { useMemo } from "react";
import { DivProps } from "react-html-props";
import { FormattedMessage, useIntl } from "react-intl";

import data from "@/constants/data.json";

import { Experience } from "../Experience";
import styles from "./Experiences.module.scss";

type BaseProps = Omit<DivProps, "data-testid" | "ref">;

export type ExperiencesProps = BaseProps & {};

const Experiences: React.FC<ExperiencesProps> = ({ className, ...props }) => {
  const intl = useIntl();
  const notableProjects = useMemo(
    () => data.notableProjects as (keyof typeof data.employment)[],
    []
  );

  return (
    <div className={clsx(styles.root, className)} {...props}>
      <Experience
        order={0}
        title={intl.formatMessage({ id: "about.foreword.title" })}
        stack={data.skills}
      >
        <FormattedMessage id="about.foreword.text" tagName="p" />
        <FormattedMessage
          id="about.text"
          tagName="p"
          values={{
            primaryTechStack: data.primaryTechStack.join(", "),
            secondaryTechStack: data.secondaryTechStack.join(", "),
          }}
        />
      </Experience>
      {notableProjects.map((key, i) => (
        <Experience
          key={key}
          order={i + 1}
          title={intl.formatMessage({ id: `experience.${key}.title` })}
          subtitle={`${data.employment[key].position}, ${data.employment[key].company}`}
          startDate={data.employment[key].startDate}
          endDate={data.employment[key].endDate}
          stack={data.employment[key].techStack}
        >
          <FormattedMessage
            id={`experience.${key}.description`}
            tagName={"p"}
            values={{
              lean: (
                <a
                  key="lean"
                  href="https://en.wikipedia.org/wiki/Lean_thinking"
                  target="_blank"
                >
                  Lean
                </a>
              ),
            }}
          />
          {/* <FormattedMessage id={`experience.${key}.project`} tagName={"p"} /> */}
        </Experience>
      ))}
      <Experience
        order={notableProjects.length + 1}
        title={intl.formatMessage({ id: "about.afterword.title" })}
      >
        <FormattedMessage id="about.afterword.text" tagName="p" />
      </Experience>
    </div>
  );
};

export default Experiences;
