import React from "react";
import FrameworksCard from "../frameworks/Frameworks";
import SocialNetworksCard from "../socialNetworksCard/socialNetworksCard";
import YoutubeVideosCard from "../youtubeVideosCard/YoutubeVideosCard";

export default function RightSideBar() {
  return (
    <div className="flex flex-col gap-y-3">
      <SocialNetworksCard />
      <YoutubeVideosCard />
    </div>
  );
}
