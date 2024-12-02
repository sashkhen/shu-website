import { Social } from "@/components/Social";

import styles from "./page.module.scss";

export default function Contact() {
  return (
    <div className={styles.root}>
      <h1>Get in Touch</h1>
      <p>
        I’d love to hear from you! Whether you’re looking to collaborate on a
        project, need a dedicated developer for your team, or just want to
        discuss ideas, feel free to reach out.
      </p>
      <section>
        <Social />
      </section>
    </div>
  );
}
