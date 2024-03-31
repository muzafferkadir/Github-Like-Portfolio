import React from "react";
import ShowMoreWithButton from "../showMoreWithButton/ShowMoreWithButton";
import ProjectCard from "../projectCard/ProjectCard";

export default function Projects() {
  return (
    <>
      <ProjectCard
        domain="banausta.com"
        image="/projects/banausta.png"
        href="https://banausta.com/"
        tecnologies={[
          "Node",
          "Express.js",
          "MongoDB",
          "React",
          "SCSS",
          "Azure",
          "Next.js",
        ]}
      >
        <ShowMoreWithButton>
          banausta.com is a artisan search site. Worked on the full-stack part
          and led the project. Node, Express.js, MongoDB, React, SCSS, and Azure
          are used.
        </ShowMoreWithButton>
      </ProjectCard>
      <ProjectCard
        domain="mukellef.co"
        href="https://mukellef.co/"
        image="/projects/mukellef.png"
        tecnologies={[
          "JavaScript",
          "Vue",
          "Nuxt.js",
          "TailwindCSS",
          "Bootstrap",
        ]}
      >
        <ShowMoreWithButton>
          mukellef.co is a company formation tool. Worked on the front-end part.
          Vue, Nuxt.js, and Tailwind are used.
        </ShowMoreWithButton>
      </ProjectCard>
      <ProjectCard
        domain="IGaming (PATH)"
        tecnologies={["React", "TypeScript", "Next.js", "SCSS"]}
      >
        <ShowMoreWithButton>
          IGaming is a online gaming platform. Worked on the front-end part.
          React, Next.js, and SCSS are used.
        </ShowMoreWithButton>
      </ProjectCard>
      <ProjectCard
        domain="sozcu.com.tr (PATH)"
        href="https://sozcu.com.tr/"
        image="/projects/sozcu.png"
        tecnologies={["JavaScript", "Bootstrap"]}
      >
        <ShowMoreWithButton>
          sozcu.com.tr is a one of the biggest news website in Turkey. news
          website. Worked on the front-end part. Javascript and Bootstrap are
          used.
        </ShowMoreWithButton>
      </ProjectCard>
      <ProjectCard
        domain="monochat.ai"
        href="https://monochat.ai/"
        image="/projects/omnimessage.png"
        tecnologies={[
          "JavaScript",
          "Node",
          "MongoDB",
          "Postgresql",
          "Express.js",
          "Vue",
          "Nuxt.js",
          "Bootstrap",
        ]}
      >
        <ShowMoreWithButton>
          monochat.ai is a chatbot platform. Worked on the full-stack part.
          Node, Express.js, MongoDB, Postgresql, Vue, Nuxt.js, and Bootstrap are
          used.
        </ShowMoreWithButton>
      </ProjectCard>
      <ProjectCard
        domain="printbi.co"
        href="https://printbi.co/"
        tecnologies={["Vue", "Nuxt.js", "SCSS", "Fabric JS"]}
      >
        <ShowMoreWithButton>
          printbi.co is a online design and print platform (print on demand).
          Worked on the front-end part. Vue, Nuxt.js, and SCSS are used.
        </ShowMoreWithButton>
      </ProjectCard>
    </>
  );
}
