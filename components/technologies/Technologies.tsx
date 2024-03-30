"use client"; 

import React, { useState } from "react";
import CardWithTitle from "../cardWithTitle/CardWithTitle";
import TelescopIcon from "../icons/TelescopIcon";
import Bagde from "../badge/Bagde";

export default function Technologies() {
  const allTechnologies = [
    "JavaScript",
    "Typescript",
    "MongoDB",
    "PostgreSQL",
    "Figma",
    "Tailwind CSS",
    "Docker",
    "AWS",
    "Azure",
    "Postman",
    "Webpack",
    "Jira",
    "Git",
    "Socket.io",
    "Kafka",
    "HTML",
    "CSS",
    "SCSS",
    "Nest JS",
    "Kong API Gateway",
    "Bootstrap",
    "Fabric JS",
    "Vuepress",
    "Bull JS",
    "Mongoose",
    "Sequelize ORM",
    "Swagger",
    "Insomnia",
    "WordPress",
    "Redis",
    "Arduino",
    "Python",
  ];

  const [shownTechnologies, setShownTechnologies] = useState(allTechnologies.slice(0, 14));
  
  return (
    <CardWithTitle title="Tech Stack" icon={<TelescopIcon />}>
      <div className="flex flex-wrap gap-2">
        {shownTechnologies.map((technology, index) => (
          <Bagde text={technology} key={index} />
        ))}
      </div>
      {shownTechnologies.length < allTechnologies.length && (
        <button
          className="ml-1 mt-3 text-xs text-blue font-medium"
          onClick={() => setShownTechnologies(allTechnologies)}
        >
          <span className="ml-0.5">↓</span> See all technologies
        </button>
      )}
    </CardWithTitle>
  );
}
