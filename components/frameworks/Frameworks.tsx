import React from "react";
import CardWithTitle from "../cardWithTitle/CardWithTitle";
import TelescopIcon from "../icons/TelescopIcon";
import LinkWithStar from "../linkWithStar/LinkWithStar";

export default function Frameworks() {
  const frameworks = [
    { domain: "vue", title: "Vue.js", starCount: "210k" },
    { domain: "facebook", title: "React.js", starCount: "220k" },
    { domain: "express", title: "Express.js", starCount: "70k" },
    { domain: "node", title: "Node", starCount: "110k" },
    { domain: "vercel", title: "Next.js", starCount: "130k" },
    { domain: "nuxt", title: "Nuxt.js", starCount: "60k" },
  ];
  return (
    <CardWithTitle title="Frameworks" icon={<TelescopIcon />}>
        <div className="divide-y divide-slate-700">
          {frameworks.map((framework) => (
            <div className="py-1" key={framework.domain}>
              <LinkWithStar
                domain={framework.domain}
                title={framework?.title || ""}
                starCount={framework.starCount}
              />
            </div>
          ))}
        </div>
      </CardWithTitle>
  )
}