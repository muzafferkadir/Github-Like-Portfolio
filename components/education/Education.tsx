import React from "react";
import CardWithTitle from "../cardWithTitle/CardWithTitle";
import UniversityIcon from "../icons/UniversityIcon";

export default function Education() {
  return (
    <CardWithTitle title="Education" icon={<UniversityIcon />}>
      <div className="divide-y divide-slate-700 flex flex-col">
        <div className="pb-3">
          <div className="text-sm font-light mb-1">
            Karadeniz Technical University
          </div>
          <div className="text-xs text-slate-500">
            B.S. in Computer Engineering
          </div>
          <div className="text-xs text-slate-500">
            {" "}
            (2016 - 2021) GPA: 3.01/4.0
          </div>
        </div>
        <div className="pt-3">
          <div className="text-sm font-light mb-1">
            Karadeniz Technical University
          </div>
          <div className="text-xs text-slate-500">
            M.S. in Computer Engineering
          </div>
          <div className="text-xs text-slate-500"> (2022 - now) </div>
        </div>
      </div>
    </CardWithTitle>
  );
}
