import React from "react";
import LibraryIcon from "../icons/LibraryIcon";
import StarIcon from "../icons/StarIcon";
import Bagde from "../badge/Bagde";

type Props = {
  domain: string;
  title?: string;
  href?: string;
  starCount?: string;
  withButton?: boolean;
};

export default function LinkWithStar({
  domain,
  title,
  href,
  starCount,
  withButton = false,
}: Props) {
  return (
    <div className="flex justify-between">
      <div className="flex items-center hover:underline hover:text-blue">
        <LibraryIcon />
        <a href={href} className="ml-2 text-blue-1 cursor-pointer">
          {domain}
        </a>
        {title && (
          <>
            <span className="text-light-1 mx-1 no-underline">/</span>
            <a href={href} className="ml-auto text-blue-1 cursor-pointer">
              {title}
            </a>
          </>
        )}
      </div>
      {withButton ? (
        <a href={href} className="flex items-center bg-primary rounded px-3 py-0.5 border border-light cursor-pointer">
          <StarIcon />
          <span className="text-white ml-2 text-xs font-medium">Star</span>
          {starCount && <Bagde text={starCount} className="ml-2" />}
        </a>
      ) : (
        <a href={href} className="flex items-center cursor-default">
          <StarIcon />
          <span className="ml-1 text-light-1 hover:text-blue">{starCount}</span>
        </a>
      )}
    </div>
  );
}
