"use client";

import clsx from "clsx";
import Link from "next/link";
import { FormattedMessage } from "react-intl";

import { DivProps } from "@/types/base";

import { TextContainer } from "../TextContainer";
import { Typography } from "../Typography";
import styles from "./NotFound.module.scss";

type BaseProps = Omit<DivProps, "data-testid" | "ref">;

export type NotFoundProps = BaseProps & {};

const NotFound: React.FC<NotFoundProps> = ({ className, ...props }) => {
  return (
    <div className={clsx(styles.root, className)} {...props}>
      <div>
        <Typography.H1>
          <FormattedMessage id="notFound.title" />
        </Typography.H1>
        <TextContainer>
          <Typography.H2>
            <FormattedMessage id="notFound.text" />
          </Typography.H2>
        </TextContainer>
        <Typography.P size="large">
          <Link href="/">
            <FormattedMessage id="notFound.back" />
          </Link>
        </Typography.P>
      </div>
    </div>
  );
};

export default NotFound;
