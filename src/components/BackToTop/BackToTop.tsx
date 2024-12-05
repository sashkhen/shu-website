"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";

import useOnScroll from "@/hooks/useOnScroll";

import { Button, ButtonProps } from "../Button";
import styles from "./BackToTop.module.scss";

export type BackToTopProps = ButtonProps & {};

const BackToTop: React.FC<BackToTopProps> = ({
  className,
  onClick,
  ...props
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(!!window.scrollY);
  }, []);

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
      ☝️
    </Button>
  );
};

export default BackToTop;
