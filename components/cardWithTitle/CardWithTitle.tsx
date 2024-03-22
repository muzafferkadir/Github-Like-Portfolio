import React from "react";
import CodeIcon from "../icons/CodeIcon";
import PreviewableImage from "../previewableImage/PreviewableImage";

type Props = {
  title: string | React.ReactNode;
  children: React.ReactNode;
  icon?: React.ReactNode;
  defaultTab?: string;
  footer?: React.ReactNode;
  image?: string;
};

export default function CardWithTitle({
  title,
  children,
  icon,
  defaultTab,
  footer,
  image,
}: Props) {
  return (
    <div className="border border-dark rounded">
      <div className="bg-dark-2 border-b border-dark">
        {image && (
          <PreviewableImage
            src={image}
            className="h-auto w-full max-h-[275px] object-cover"
            sizes="30rem"
            width={275}
            height={275}
            title={title?.toString() || "Product Title"}
          />
        )}

        <h3 className="px-4 py-3.5 text-sm font-semibold flex items-center">
          {icon && <span className="mr-2">{icon}</span>}
          {title}
        </h3>
        {defaultTab && (
          <ul className="flex items-center text-xs mx-5 -mb-px">
            <li className="mr-2 border-1 p-2 bg-primary rounded-t border-dark border-b-0">
              <a href="#" className="text-white flex gap-2">
                <CodeIcon />
                {defaultTab}
              </a>
            </li>
          </ul>
        )}
      </div>
      <div className="px-4 py-2 shadow-[inset_0px_-10px_10px_0px_rgba(0,0,0,0.25)]">
        {children}
      </div>
      {footer && <div className="px-4 py-2 border-t border-dark">{footer}</div>}
    </div>
  );
}
