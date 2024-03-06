import React from "react";
import classNames from "classnames";

type Props = {
  text: string;
  className?: string;
};

export default function Bagde({ text, className }: Props) {
  const classes = classNames(
    "bg-dark-1 text-white text-xs font-medium rounded-[12px] px-2 py-0.5",
    className
  );
  return <span className={classes}>{text}</span>;
}
