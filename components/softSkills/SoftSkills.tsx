"use client"; 

import React, { useState } from "react";
import CardWithTitle from "../cardWithTitle/CardWithTitle";
import TelescopIcon from "../icons/TelescopIcon";
import Bagde from "../badge/Bagde";

export default function SoftSkills() {
  const softSkills = [
    "Teamwork",
    "Problem-solving",
    "Adaptability",
    "Work ethic",
    "Creativity",
    "Critical thinking",
    "Emotional intelligence",
  ];

  const [shownSkills, setShownSkills] = useState(softSkills.slice(0, 5));
  
  return (
    <CardWithTitle title="Soft Skills" icon={<TelescopIcon />}>
      <div className="flex flex-wrap gap-2">
        {shownSkills.map((skill, index) => (
          <Bagde text={skill} key={index} />
        ))}
      </div>
      {shownSkills.length < softSkills.length && (
        <button
          className="ml-1 mt-3 text-xs text-blue font-medium"
          onClick={() => setShownSkills(softSkills)}
        >
          <span className="ml-0.5">↓</span> See all skills
        </button>
      )}
    </CardWithTitle>
  );
}
