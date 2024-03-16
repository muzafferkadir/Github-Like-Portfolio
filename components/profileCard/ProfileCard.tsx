'use client';
import React, { useState } from "react";
import Card from "../card/Card";
import Image from "next/image";
import LocationIcon from "../icons/LocationIcon";
import UniversityIcon from "../icons/UniversityIcon";
import LinkIcon from "../icons/LinkIcon";
import EmailIcon from "../icons/EmailIcon";

export default function ProfileCard() {
  const emailAddress = "muzafferkadiryilmaz@gmail.com";
  const [email, setEmail] = useState(emailAddress);

  const hoverEmail = () => setEmail("Click to copy");
  const leaveEmail = () => setEmail(emailAddress);
  const copyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setEmail("Copied");
  };

  return (
    <Card>
      <div className="flex flex-col items-center">
        <Image
          src="/pp.jpg"
          alt="Picture of the author"
          width={150}
          height={150}
          className="rounded-full"
        />
        <h2 className="text-xl font-bold mt-4 text-center">
          Muzaffer Kadir YILMAZ
        </h2>
        <p className="text-sm text-light-1">Software Engineer</p>
        <div className="mt-4 w-full">
          <a
            href="mailto:muzafferkadiryilmaz@gmail.com"
            className="bg-dark-2 text-white-2 py-1 rounded border border-dark-1 w-full block text-center text-sm font-medium hover:bg-dark-1 hover:border-light-2 transition-all duration-200 ease-in-out"
          >
            Send email
          </a>
        </div>
        <div className="flex items-center mt-4 gap-1 w-full">
          <LocationIcon />
          <p className="text-sm text-light-1">Samsun, Turkey</p>
        </div>
        <div className="flex items-center mt-2 gap-1 w-full">
          <UniversityIcon />
          <p className="text-sm text-light-1">Karadeniz Technical University</p>
        </div>
        <div className="flex items-center mt-2 gap-1 w-full">
          <LinkIcon />
          <a
            href="https://mkdir.dev"
            className="text-sm text-light-1 hover:text-blue hover:underline hover:underline-blue"
          >
            mkdir.dev
          </a>
        </div>
        <div className="flex items-center mt-2 gap-1 w-full">
          <LinkIcon />
          <a
            href="https://muzafferkadir.com"
            className="text-sm text-light-1 hover:text-blue hover:underline hover:underline-blue"
          >
            muzafferkadir.com
          </a>
        </div>
        <div className="flex items-center mt-2 gap-1 w-full">
          <EmailIcon />
          <p
            className="text-sm text-light-1 cursor-pointer w-full truncate"
            onMouseEnter={hoverEmail}
            onMouseLeave={leaveEmail}
            onClick={copyEmail}
          >
            {email}
          </p>
        </div>
      </div>
    </Card>
  );
}
