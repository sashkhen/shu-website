import { Locale } from "i18n-config";
import { Metadata } from "next/types";

import { Experience } from "@/components/Experience";
import { TextContainer } from "@/components/TextContainer";
import { Typography } from "@/components/Typography";
import data from "@/constants/data.json";
import _metadata from "@/constants/metadata.json";
import { getDictionary } from "@/utils/get-dictionary";

import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: `About | ${_metadata.title}`,
};

export default async function About(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await props.params;

  const dictionary = await getDictionary(lang);

  return (
    <div className={styles.root}>
      <div className={styles.heading}>
        <Typography.H2>{dictionary.about.title}</Typography.H2>
        <TextContainer>
          <Typography.P>
            <span dangerouslySetInnerHTML={{ __html: dictionary.about.text }} />
          </Typography.P>
        </TextContainer>
      </div>
      <Experience order={0} title={dictionary.about.foreword.title}>
        <div
          dangerouslySetInnerHTML={{ __html: dictionary.about.foreword.text }}
        />
      </Experience>
      {[...data.employment].reverse().map((experience, i) => (
        <Experience
          key={experience.startDate}
          order={i + 1}
          title={experience.position}
          subtitle={experience.company}
          startDate={experience.startDate}
          endDate={experience.endDate}
          stack={experience.techStack}
        >
          {experience.description}
        </Experience>
      ))}
      <Experience
        order={data.employment.length + 1}
        title={dictionary.about.afterword.title}
      >
        <div
          dangerouslySetInnerHTML={{ __html: dictionary.about.afterword.text }}
        />
      </Experience>
    </div>
  );
}
