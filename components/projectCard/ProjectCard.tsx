import React from "react";
import CardWithTitle from "../cardWithTitle/CardWithTitle";
import LinkWithStar from "../linkWithStar/LinkWithStar";
import { GoCalendar } from "react-icons/go";
import TechnologiesBadge from "../technologiesBadge/TechnologiesBadge";
import Image from "next/image";

type Props = {
  children: React.ReactNode;
  domain: string;
  title?: string;
  href?: string;
  startDate?: number | Date;
  endDate?: number | Date;
  tecnologies?: string[];
  image?: string;
};

export default function ProjectCard({
  children,
  href,
  domain,
  title,
  startDate,
  endDate,
  tecnologies,
  image,
}: Props) {
  let startedDate = startDate ? new Date(startDate) : null;
  let endedDate = endDate ? new Date(endDate) : null;

  const isFooterExist = tecnologies || startDate || endDate;

  const getDateStr = (date: Date) => {
    return (
      date.toLocaleString("default", { month: "short" }) +
      " " +
      date.getFullYear()
    );
  };

  const footer = (
    <div className="flex gap-2 items-center py-2 flex-wrap">
      {startDate && (
        <div className="flex gap-1 items-center text-xs text-light-1">
          <GoCalendar />
          <span className="text-nowrap">
            {startedDate && getDateStr(startedDate)}
            {" - "}
            {!endedDate && startDate && "Present"}
            {endedDate && getDateStr(endedDate)}
          </span>
        </div>
      )}
      <div className="flex flex-wrap gap-1 items-center text-xs text-light-1">
        {tecnologies &&
          tecnologies.map((tecnology, index) => (
            <span
              key={index}
              className="flex gap-1 items-center text-xs text-light-1 mr-1.5"
            >
              <TechnologiesBadge name={tecnology} />
            </span>
          ))}
      </div>
    </div>
  );

  return (
    <CardWithTitle
      title={<LinkWithStar
        domain={domain}
        title={title}
        withButton={true}
        href={href}
        biggerTitle={true}
      />}
      footer={isFooterExist ? footer : undefined}
      image={image}
      defaultTab="Description"
    >
      <div className="py-2">{children}</div>
    </CardWithTitle>
  );
}
