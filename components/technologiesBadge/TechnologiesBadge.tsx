import React from "react";
import COLORS from "@/utils/technologiesColors";

type Props = {
  name: string;
};

export default function technologiesBadge({ name }: Props) {
  const generateRandomColor = (name: string) => {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    const color = (hash | 0x080808).toString(16).substr(-6).toUpperCase();
    return `#${color.padStart(6, "0")}`;
  };

  let color = COLORS.find((color) => color.name === name)?.color;
  if (!color) {
    color = generateRandomColor(name);
  }

  return (
    <div className="flex items-center">
      <span
        className="rounded-full w-[12px] h-[12px] inline-block border border-light-1 mr-1 relative"
        style={{ backgroundColor: color }}
      ></span>
      <span className="text-xs text-light-1">{name}</span>
    </div>
  );
}
