import React from "react";
import WorkExperiences from "../workExperiences/WorkExperiences";
import Projects from "../projects/Projects";

export default function Experiences() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl text-light-1 font-semibold">Work Experience</h2>
      <div className="flex flex-col gap-4">
        <WorkExperiences />
      </div>
      <h2 className="text-xl text-light-1 font-semibold">Projects</h2>
      <div className="flex flex-col gap-4">
        <Projects />
      </div>
    </div>
  );
}
