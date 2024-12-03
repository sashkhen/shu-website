import clsx from "clsx";

import styles from "./TemplateName.module.scss";

type BaseProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "data-testid" | "ref"
>;

export type TemplateNameProps = BaseProps & {};

const TemplateName: React.FC<TemplateNameProps> = ({ className, ...props }) => {
  return (
    <div className={clsx(styles.root, className)} {...props}>
      {JSON.stringify(props)}
    </div>
  );
};

export default TemplateName;
