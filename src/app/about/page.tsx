import { Metadata } from "next/types";

import { Experiences } from "@/components/Experiences";
import HeroAbout from "@/components/HeroAbout/HeroAbout";
import { METADATA } from "@/constants/metadata";

import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: `About | ${METADATA.title}`,
};

export default async function About() {
  return (
    <div className={styles.root}>
      <HeroAbout className={styles.heading} />
      <Experiences />
    </div>
  );
}
