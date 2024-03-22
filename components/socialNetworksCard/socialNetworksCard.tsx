import React from "react";
import CardWithTitle from "../cardWithTitle/CardWithTitle";
import PeopleIcon from "../icons/PeopleIcon";
import Link from "next/link";
import LinkIcon from "../icons/LinkIcon";

export default function Frameworks() {
  return (
    <CardWithTitle title="Social Networks" icon={<PeopleIcon />}>
      <div className="flex flex-row border-b py-2">
        <Link
          className="flex hover:underline gap-x-2 items-center"
          href={"https://blog.mkdir.dev/"}
        >
          <LinkIcon />
          Blog
        </Link>
      </div>
      <div className="flex flex-row border-b py-2">
        <Link
          className="flex hover:underline gap-x-2 items-center"
          href={"https://www.linkedin.com/in/muzafferkadir/"}
        >
          <LinkIcon />
          LinkedIn
        </Link>
      </div>
      <div className="flex flex-row py-2">
        <Link
          className="flex hover:underline gap-x-2 items-center"
          href={"https://www.youtube.com/@muzafferkadir"}
        >
          <LinkIcon />
          Youtube
        </Link>
      </div>
    </CardWithTitle>
  );
}
