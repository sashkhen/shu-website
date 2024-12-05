import clsx from "clsx";

import { BaseDivProps } from "@/types/base";

import styles from "./TemplateName.module.scss";

type BaseProps = Omit<BaseDivProps, "data-testid" | "ref">;

export type TemplateNameProps = BaseProps & {};

const TemplateName: React.FC<TemplateNameProps> = ({ className, ...props }) => {
  return (
    <div className={clsx(styles.root, className)} {...props}>
      {JSON.stringify(props)}
    </div>
  );
};

export default TemplateName;
