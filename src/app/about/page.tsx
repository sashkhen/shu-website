import { Experience } from "@/components/Experience";
import { TextContainer } from "@/components/TextContainer";
import { Typography } from "@/components/Typography";
import data from "@/constants/data.json";

import styles from "./page.module.scss";

export default function About() {
  return (
    <div className={styles.root}>
      <div className={styles.heading}>
        <Typography.H2>About me</Typography.H2>
        <TextContainer>
          <Typography.P>
            I enjoy <b>creating</b> visually appealing things, I focus on{" "}
            <b>problem solving</b>, I have solid <b>communication</b> and
            presentation skills, I value <b>dedication</b>.
          </Typography.P>
        </TextContainer>
      </div>
      <Experience order={0} className={styles.section} title="About me">
        <div dangerouslySetInnerHTML={{ __html: data.bio }} />
      </Experience>
      {[...data.employment].reverse().map((experience, i) => (
        <Experience
          key={experience.startDate}
          className={styles.section}
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
        className={styles.section}
        title="Next up..."
      >
        <div dangerouslySetInnerHTML={{ __html: data.aspirations }} />
      </Experience>
    </div>
  );
}
