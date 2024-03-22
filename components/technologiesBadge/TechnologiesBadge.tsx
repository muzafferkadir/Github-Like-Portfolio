import React from "react";
import COLORS from "@/utils/technologiesColors";

type Props = {
  name: string;
};

export default function technologiesBadge({ name }: Props) {
  const generateRandomColor = (name: string) => {
    const h = Math.abs(name.split("").reduce((a, b) => a + b.charCodeAt(0), 0));
    const randomColor =
      "#" + ((h & 0x00ffffff) | 0x800000).toString(16).slice(1);
    return randomColor;
  };

  let color = COLORS.find((color) => color.name === name)?.color;
  if (!color) color = generateRandomColor(name);

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
