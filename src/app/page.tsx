import { Background } from "./_components/Background";
import { Hero } from "./_components/Hero";
import { ThemeConfigurator } from "./_components/ThemeConfigurator";
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
