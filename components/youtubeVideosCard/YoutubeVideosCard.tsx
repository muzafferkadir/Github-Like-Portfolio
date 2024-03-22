import React from "react";
import CardWithTitle from "../cardWithTitle/CardWithTitle";
import { FaYoutube } from "react-icons/fa6";
import Link from "next/link";

type Props = {};

export default function YoutubeVideosCard({}: Props) {
  const urls = [
    {
      url: "Fi_ZY10wcCA",
      title: "Javascripte Yeni Başlayanların Bilmesi Gereken 8 Şey",
    },
    {
      url: "buTAVNiquI0",
      title: "Neden 2024'te Javascript Öğrenmelisin?",
    },
    {
      url: "oKQARhslM60",
      title:
        "Bilgisayarınıza Yapay Zeka Modellerini İndirin ve Ücretsiz Kullanın (LM Studio, Ollama)",
    },
  ];
  const srcBase = (url: string) => `https://www.youtube.com/embed/${url}`;

  const iframes = urls.map((video) => (
    <div key={video.url} className="py-4 border-b">
      <div className="title text-light-2 text-xs font-semibold pb-2 cursor-pointer">
        <Link className="title text-white hover:underline hover:text-blue" href={`https://www.youtube.com/watch?v=${video.url}`}>
          {video.title}
        </Link>
      </div>
      <div>
        <iframe
          className="w-full aspect-video"
          src={srcBase(video.url)}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  ));

  return (
    <CardWithTitle
      title="Youtube Videos"
      icon={<FaYoutube className="text-light-1 text-lg" />}
    >
      {iframes}
    </CardWithTitle>
  );
}
