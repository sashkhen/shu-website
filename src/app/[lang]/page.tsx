import { Locale } from "i18n-config";

import { Background } from "@/components/Background";
import { Hero } from "@/components/Hero";
import { ThemeConfigurator } from "@/components/ThemeConfigurator";
import { getDictionary } from "@/utils/get-dictionary";

import styles from "./page.module.scss";

export default async function Home(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await props.params;

  const dictionary = await getDictionary(lang);

  return (
    <div className={styles.root}>
      <Background />
      <Hero dictionary={dictionary.home.hero} className={styles.hero} />
      <ThemeConfigurator dictionary={dictionary.home.theme} />
    </div>
  );
}
