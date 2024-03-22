"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
  src: string;
  title: string;
} & Omit<React.ComponentProps<typeof Image>, "src" | "alt">;

const PreviewableImage = ({ src, title, ...rest }: Props) => {
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  const openImageFullScreen = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <Image src={src} alt={title} onClick={openImageFullScreen} {...rest} />

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 z-40 flex justify-center items-center p-4"
          onClick={closeModal}
        >
          <button
            onClick={closeModal}
            className="absolute top-1 right-1 rounded-full p-2 text-5xl"
          >
            <span>&times;</span>
          </button>
          <div
            className="relative p-4 rounded-lg w-full max-w-full h-full max-h-full"
            style={{ width: "80vw", height: "80vh" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="h-full">
              <Image
                src={src}
                alt={title.toString()}
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PreviewableImage;
