import { Background } from "@/components/Background";
import { Hero } from "@/components/Hero";
import { ThemeConfigurator } from "@/components/ThemeConfigurator";

import styles from "./page.module.scss";

export default async function Home() {
  return (
    <div className={styles.root}>
      <Background className={styles.background} />
      <Hero className={styles.hero} />
      <p>{`server: ${process.env.ENV_VARIABLE}, client: ${process.env.NEXT_PUBLIC_ENV_VARIABLE}`}</p>
      <ThemeConfigurator className={styles.themeConfig} />
    </div>
  );
}
