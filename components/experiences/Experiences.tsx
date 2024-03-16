import React from "react";
import Card from "../card/Card";
import CardWithTitle from "../cardWithTitle/CardWithTitle";
import TelescopIcon from "../icons/TelescopIcon";
import LibraryIcon from "../icons/LibraryIcon";
import LinkWithStar from "../linkWithStar/LinkWithStar";
import ProjectCard from "../projectCard/ProjectCard";

type Props = {};

export default function Experiences({}: Props) {
  return (
    <div>
      <h2 className="text-xl text-light-1 font-semibold mb-4">
        Work Experience
      </h2>
      <ProjectCard domain="Workhy-Mükellef" title="Frontend Developer" href="https://telescop.com">
        asd
      </ProjectCard>
    </div>
  );
}
