import React from "react";
import CardWithTitle from "../cardWithTitle/CardWithTitle";
import TelescopIcon from "../icons/TelescopIcon";
import LinkWithStar from "../linkWithStar/LinkWithStar";

export default function Frameworks() {
  const frameworks = [
    { domain: "vue", title: "Vue.js", starCount: "210k", href: "https://vuejs.org/" },
    { domain: "facebook", title: "React.js", starCount: "220k", href: "https://react.dev/" },
    { domain: "express", title: "Express.js", starCount: "70k", href: "https://expressjs.com/" },
    { domain: "node", title: "Node", starCount: "110k", href: "https://nodejs.org/" },
    { domain: "vercel", title: "Next.js", starCount: "130k", href: "https://nextjs.org/" },
    { domain: "nuxt", title: "Nuxt.js", starCount: "60k", href: "https://nuxt.com/" },
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
                href={framework?.href}
              />
            </div>
          ))}
        </div>
      </CardWithTitle>
  )
}