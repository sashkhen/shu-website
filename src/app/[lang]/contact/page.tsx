import { Locale } from "i18n-config";

import { Social } from "@/components/Social";
import { TextContainer } from "@/components/TextContainer";
import { Typography } from "@/components/Typography";
import { getDictionary } from "@/utils/get-dictionary";

import styles from "./page.module.scss";

export default async function Contact(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await props.params;
  const dictionary = await getDictionary(lang);

  return (
    <div className={styles.root}>
      <Typography.H2>{dictionary.contact.title}</Typography.H2>
      <TextContainer>
        <Typography.P>{dictionary.contact.text}</Typography.P>
      </TextContainer>
      <section>
        <Social dictionary={dictionary.contact.social} />
      </section>
    </div>
  );
}
