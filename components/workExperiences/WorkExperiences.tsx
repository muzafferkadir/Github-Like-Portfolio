import React from "react";
import ShowMoreWithButton from "../showMoreWithButton/ShowMoreWithButton";
import ProjectCard from "../projectCard/ProjectCard";

export default function WorkExperiences() {
  return (
    <>
      <ProjectCard
        domain="Workhy-Mükellef"
        title="Frontend Developer"
        startDate={new Date("2023-10-01")}
        href="https://mukellef.co/"
        tecnologies={[
          "JavaScript",
          "Vue",
          "Nuxt.js",
          "TailwindCSS",
          "Bootstrap",
        ]}
      >
        <ShowMoreWithButton>
          <div>
            <ul>
              <li>
                - Contributed to Mukellef&apos;s frontend utilizing Vue.js,
                Nuxt.js, Bootstrap, and Tailwind.
              </li>
              <li>
                - Employed story point estimation techniques for efficient task
                planning and prioritization. Actively participating in Agile
                methodologies.
              </li>
              <li>
                - Focused on creating user interfaces with UI/UX principles.
              </li>
            </ul>
          </div>
        </ShowMoreWithButton>
      </ProjectCard>
      <ProjectCard
        domain="PATH Product & Software House"
        title="Web Developer"
        startDate={new Date("2022-10-01")}
        endDate={new Date("2023-10-01")}
        href="https://path.com.tr/"
        tecnologies={["React", "TypeScript", "Next.js", "SCSS"]}
      >
        <ShowMoreWithButton>
          <div>
            <ul>
              <li>
                - Contributed to the frontend development of various projects,
                using technologies such as React, Next JS, Typescript, SCSS, and
                Websocket.
              </li>
              <li>
                - Utilized Jira for project management and Implemented Agile
                methodologies for project requirements and delivered results
                within given timelines.
              </li>
              <li>
                - Assisted in the development of some of the most visited (12th)
                websites in Turkey. Gained experience in SEO (Search Engine
                Optimisation)
              </li>
              <li>
                - Paid attention to UI/UX considerations, aiming to create
                user-friendly interfaces.
              </li>
            </ul>
          </div>
        </ShowMoreWithButton>
      </ProjectCard>
      <ProjectCard
        domain="Bordo.io"
        title="Full-Stack Developer"
        startDate={new Date("2020-10-01")}
        endDate={new Date("2022-10-01")}
        href="https://bordo.io/"
        tecnologies={[
          "Node",
          "JavaScript",
          "Vue",
          "Nuxt.js",
          "Bootstrap",
          "MongoDB",
          "Express.js",
          "PostgreSQL",
        ]}
      >
        <ShowMoreWithButton>
          <div>
            <ul>
              <li>
                - Developed backend and front-end solutions for multiple API
                services, utilizing a Node.js tech stack, including ExpressJS,
                Nuxt.js, MongoDB, Redis, and Docker.
              </li>
              <li>
                - Designed and integrated microservices architecture for
                real-time communication platforms, connecting to various social
                media APIs using Kafka and Kong.
              </li>
              <li>
                - Developed a subscription management system using Express.js
                and Postgresql.
              </li>
              <li>
                - Engineered front-end interfaces for diverse applications
                ranging from messaging platforms to cybersecurity, using VueJS,
                Nuxt.js, Socket.io, Vuex, and others.
              </li>
              <li>
                - Ensured application security and user authentication with
                tools like PassportJS and Okta, and implemented payment
                processing integrations.
              </li>
              <li>
                - Worked collaboratively on developing a corporate website and
                other client-facing products with a focus on responsive design
                and user experience.
              </li>
            </ul>
          </div>
        </ShowMoreWithButton>
      </ProjectCard>
      <ProjectCard
        domain="Freelance"
        title="Full-Stack Developer"
        startDate={new Date("2018-10-01")}
        tecnologies={[
          "JavaScript",
          "Express.js",
          "React",
          "Nuxt.js",
          "Vue",
          "Bootstrap",
          "Azure",
          "MongoDB",
        ]}
      >
        <ShowMoreWithButton>
          <div>
            <ul>
              <li>
                - Led full-stack web projects, using frameworks like Next.js,
                Nuxt.js and Express.js, and managed deployments on platforms
                like Azure.
              </li>
              <li>
                - Designed responsive UI/UX with Vue.js, and developed
                interactive features with JavaScript libraries.
              </li>
              <li>
                - Maintained and optimized web applications, ensuring
                scalability and user-centric enhancements.
              </li>
            </ul>
          </div>
        </ShowMoreWithButton>
      </ProjectCard>
    </>
  );
}
