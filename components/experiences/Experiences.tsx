import React from "react";
import ProjectCard from "../projectCard/ProjectCard";
import ShowMoreWithButton from "../showMoreWithButton/ShowMoreWithButton";
import WorkExperiences from "../workExperiences/WorkExperiences";

type Props = {};

export default function Experiences({}: Props) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl text-light-1 font-semibold">Work Experience</h2>
      <div className="flex flex-col gap-4">
        <WorkExperiences />
      </div>
      <h2 className="text-xl text-light-1 font-semibold">Projects</h2>
      <div className="flex flex-col gap-4">
        <WorkExperiences />
      </div>
    </div>
  );
}
