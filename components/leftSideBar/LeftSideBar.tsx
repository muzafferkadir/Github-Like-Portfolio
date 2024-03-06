import React from "react";
import ProfileCard from "../profileCard/ProfileCard";
import FrameworksCard from "../frameworks/Frameworks";
import Technologies from "../technologies/Technologies";
import SoftSkills from "../softSkills/SoftSkills";
import Education from "../education/Education";

export default function LeftSideBar() {
  return (
    <div className="flex flex-col gap-y-3">
      <ProfileCard />
      <FrameworksCard />
      <Technologies />
      <SoftSkills />
      <Education />
    </div>
  );
}
