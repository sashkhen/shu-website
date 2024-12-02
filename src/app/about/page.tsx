import { Experience } from "@/components/Experience";
import data from "@/constants/data.json";

import styles from "./page.module.scss";

export default function About() {
  return (
    <div className={styles.root}>
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
