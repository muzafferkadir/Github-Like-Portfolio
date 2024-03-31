import React from "react";
import SocialNetworksCard from "../socialNetworksCard/SocialNetworksCard";
import YoutubeVideosCard from "../youtubeVideosCard/YoutubeVideosCard";

export default function RightSideBar() {
  return (
    <div className="flex flex-col gap-y-3">
      <SocialNetworksCard />
      <YoutubeVideosCard />
    </div>
  );
}
