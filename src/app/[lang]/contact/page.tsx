import { Metadata } from "next/types";

import { HeroContact } from "@/components/HeroContact";
import { Social } from "@/components/Social";
import _metadata from "@/constants/metadata.json";

import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: `Contact | ${_metadata.title}`,
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
