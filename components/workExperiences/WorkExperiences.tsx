import React from "react";
import ShowMoreWithButton from "../showMoreWithButton/ShowMoreWithButton";
import ProjectCard from "../projectCard/ProjectCard";

export default function WorkExperiences() {
  return (
    <>
      <ProjectCard
        domain="Workhy-Mükellef"
        title="Frontend Developer"
        startDate={new Date("2022-09-25")}
        endDate={Date.now()}
        tecnologies={["React", "TypeScript", "TailwindCSS", "GraphQL", "JavaScript", "C", "HTML"]}
        href="#"
      >
        <ShowMoreWithButton>
          <p>
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum sunt in culpa
            qui officia deserunt mollit anim id est laborum.
          </p>
        </ShowMoreWithButton>
      </ProjectCard>
      <ProjectCard
        domain="Workhy-Mükellef"
        title="Frontend Developer"
        startDate={new Date("2022-09-25")}
        endDate={Date.now()}
        tecnologies={["React", "TypeScript"]}
        href="#"
        image="/projects/mukellef.png"
      >
        <ShowMoreWithButton>
          <p>
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum sunt in culpa
            qui officia deserunt mollit anim id est laborum.
          </p>
        </ShowMoreWithButton>
      </ProjectCard>
    </>
  );
}
