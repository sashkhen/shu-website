import { Social } from "@/components/Social";
import { TextContainer } from "@/components/TextContainer";
import { Typography } from "@/components/Typography";

import styles from "./page.module.scss";

export default function Contact() {
  return (
    <div className={styles.root}>
      <Typography.H2>Get in Touch</Typography.H2>
      <TextContainer>
        <Typography.P>
          I&apos;d love to hear from you! Whether you&apos;re looking to
          collaborate on a project, need a dedicated developer for your team, or
          just want to discuss ideas, feel free to reach out.
        </Typography.P>
      </TextContainer>
      <section>
        <Social />
      </section>
    </div>
  );
}
