import React from "react";
import CardWithTitle from "../cardWithTitle/CardWithTitle";
import LinkWithStar from "../linkWithStar/LinkWithStar";

type Props = {
  children: React.ReactNode;
  domain: string;
  title?: string;
  href?: string;
};

export default function ProjectCard({ children, href, domain, title }: Props) {
  return (
    <CardWithTitle
      title={
        <LinkWithStar
          domain={domain}
          title={title}
          withButton={true}
          href={href}
          biggerTitle={true}
        />
      }
      defaultTab="Description"
    >
      <div>{children}</div>
    </CardWithTitle>
  );
}
