"use client";
import React, { useState } from "react";
import LibraryIcon from "../icons/LibraryIcon";
import StarIcon from "../icons/StarIcon";
import Bagde from "../badge/Bagde";
import classnames from "classnames";

type Props = {
  domain: string;
  title?: string;
  href?: string;
  starCount?: string;
  withButton?: boolean;
  biggerTitle?: boolean;
  starred?: boolean;
};

export default function LinkWithStar({
  domain,
  title,
  href,
  starCount,
  withButton = false,
  biggerTitle,
  starred,
}: Props) {
  const cx = classnames(
    "flex items-start hover:underline hover:text-blue",
    {
      "text-lg md:text-xl": biggerTitle,
    }
  );

  const [isStarred, setIsStarred] = useState(starred);
  const handleStarClick = () => {
    setIsStarred(!isStarred);
  };
  return (
    <div className="flex justify-between flex-grow">
      <div className={cx}>
        <LibraryIcon className="min-w-4 mt-1.5" />
        <div className="flex flex-wrap">
          <a href={href} className="ml-2 text-blue-1 cursor-pointer">
            {domain}
          </a>
          {title && (
            <>
              <span className="text-light-1 mx-1 no-underline">/</span>
              <a href={href} className="text-blue-1 cursor-pointer">
                {title}
              </a>
            </>
          )}
        </div>
      </div>
      {withButton ? (
        <span
          className="flex items-center bg-primary rounded px-2.5 py-1.5 border border-light cursor-pointer hover:border-light-1 max-h-8"
          onClick={handleStarClick}
        >
          <StarIcon starred={isStarred} />
          <span className="text-white ml-2 text-xs font-medium">
            {isStarred ? "Starred" : "Star"}
          </span>
          {starCount && <Bagde text={starCount} className="ml-2" />}
        </span>
      ) : (
        <span
          className="flex items-center cursor-default"
          onClick={handleStarClick}
        >
          <StarIcon starred={isStarred} />
          <span className="ml-1 text-light-1 hover:text-blue">{starCount}</span>
        </span>
      )}
    </div>
  );
}
