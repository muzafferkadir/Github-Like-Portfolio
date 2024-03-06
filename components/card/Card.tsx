import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function Card({ children }: Props) {
  return <div className="border border-dark rounded p-4">{children}</div>;
}
