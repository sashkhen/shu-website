import { Locale } from "i18n-config";

import { Social } from "@/components/Social";
import { TextContainer } from "@/components/TextContainer";
import { Typography } from "@/components/Typography";
import data from "@/constants/data.json";
import { getDictionary } from "@/utils/get-dictionary";

import styles from "./page.module.scss";

export default async function Contact(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await props.params;
  const dictionary = await getDictionary(lang);

  return (
    <div className={styles.root}>
      <div>
        <Typography.H2>{dictionary.contact.title}</Typography.H2>
        <TextContainer>
          <Typography.P>{dictionary.contact.text}</Typography.P>
          <Typography.P>
            {dictionary.contact.emailText}{" "}
            <a href={`mailto:${data.contact.email}`} target="_blank">
              {data.contact.email}
            </a>
            , {dictionary.contact.githubText}{" "}
            <a href={data.contact.github} target="_blank">
              github
            </a>
            , {dictionary.contact.codepenText}{" "}
            <a href={data.contact.codepen} target="_blank">
              codepen
            </a>
            ,{" "}
            {dictionary.contact.cvText
              .trim()
              .replace(/\w+[.!?]?$/, "")
              .trim()}{" "}
            <a href={data.contact.cv} target="_blank">
              {dictionary.contact.cvText.trim().split(" ").slice(-1)}
            </a>
            , {dictionary.contact.socialMediaText}{" "}
            <span>@{data.contact.username}</span>.
          </Typography.P>
        </TextContainer>
      </div>

      <section>
        <Social dictionary={dictionary.contact.social} />
      </section>
    </div>
  );
}
