import React from "react";

type Props = {
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
};

export default function CardWithTitle({ title, children, icon }: Props) {
  return (
    <div className="border border-dark rounded">
      <h3 className="text-sm font-semibold bg-dark-2 p-4 flex items-center border-b border-dark">
        {icon && <span className="mr-2">{icon}</span>}
        {title}
      </h3>
      <div className="px-4 py-2">{children}</div>
    </div>
  );
}
