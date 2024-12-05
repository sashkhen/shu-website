"use client";

import clsx from "clsx";
import { useState } from "react";

import useOnScroll from "@/hooks/useOnScroll";
import { ButtonProps } from "@/types/base";

import { Button } from "../Button";
import styles from "./BackToTop.module.scss";

type BaseProps = Omit<ButtonProps, "data-testid" | "ref">;

export type BackToTopProps = BaseProps & {};

const BackToTop: React.FC<BackToTopProps> = ({
  className,
  onClick,
  ...props
}) => {
  const [visible, setVisible] = useState(false);

  useOnScroll(() => {
    setVisible(!!window.scrollY);
  }, 100);

  return (
    <Button
      className={clsx(styles.root, className)}
      data-visible={visible}
      size="medium"
      shape="circle"
      onClick={(e) => {
        window.scrollTo(0, 0);
        onClick?.(e);
      }}
      {...props}
    >
      ⭡
    </Button>
  );
};

export default BackToTop;
