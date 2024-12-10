import { Metadata } from "next/types";

import { HeroContact } from "@/components/HeroContact";
import { Social } from "@/components/Social";
import { METADATA } from "@/constants/metadata";

import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: `Contact | ${METADATA.title}`,
};

export default async function Contact() {
  return (
    <div className={styles.root}>
      <HeroContact />
      <section>
        <Social />
      </section>
    </div>
  );
}
