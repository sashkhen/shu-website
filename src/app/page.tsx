import { Background } from "@/components/Background";
import { Hero } from "@/components/Hero";
import { ThemeConfigurator } from "@/components/ThemeConfigurator";

import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.root}>
      <Hero />
      <ThemeConfigurator />
      <Background />
    </div>
  );
}
