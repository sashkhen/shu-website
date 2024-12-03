import clsx from "clsx";

import data from "@/constants/data.json";

import styles from "./Social.module.scss";

type BaseProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "data-testid" | "ref"
>;

export type SocialProps = BaseProps & {};

const Social: React.FC<SocialProps> = ({ className, ...props }) => {
  return (
    <div className={clsx(styles.root, className)} {...props}>
      <a href={data.contact.github} target="_blank">
        github
      </a>
      <a href={data.contact.linkedin} target="_blank">
        linkedin
      </a>
      <a href={data.contact.cv} target="_blank">
        resume
      </a>
      <a href={`mailto:${data.contact.email}`} target="_blank">
        email
      </a>
    </div>
  );
};

export default Social;
