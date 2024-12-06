import { Background } from "@/components/Background";
import { Hero } from "@/components/Hero";
import { ThemeConfigurator } from "@/components/ThemeConfigurator";

import styles from "./page.module.scss";

export default async function Home() {
  return (
    <div className={styles.root}>
      <Background className={styles.background} />
      <Hero className={styles.hero} />
      <ThemeConfigurator className={styles.themeConfig} />
    </div>
  );
}
