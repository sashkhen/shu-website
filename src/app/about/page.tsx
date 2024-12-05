import { Metadata } from "next/types";

import { Experiences } from "@/components/Experiences";
import HeroAbout from "@/components/HeroAbout/HeroAbout";
import _metadata from "@/constants/metadata.json";

import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: `About | ${_metadata.title}`,
};

export default async function About() {
  return (
    <div className={styles.root}>
      <HeroAbout className={styles.heading} />
      <Experiences />
    </div>
  );
}
