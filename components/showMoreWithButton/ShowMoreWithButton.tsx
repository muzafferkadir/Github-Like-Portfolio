"use client";
import classnames from "classnames";
import React, { useState, useRef, useEffect } from "react";

type Props = {
  children: React.ReactNode;
};

export default function ShowMoreWithButton({ children }: Props) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);
  const breakpoint = 96; // 96px max-h-24 6rem

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [children]);

  const cx = classnames(
    "transition-all duration-500 ease-in-out text-slate-600 text-sm overflow-hidden",
    { "max-h-24": !open }
  );

  return (
    <div className={open ? "relative pb-5" : "relative"}>
      <div
        className={cx}
        ref={contentRef}
        style={{ maxHeight: open ? `${contentHeight}px` : "" }}
      >
        {children}
      </div>
      {contentHeight > breakpoint && (
        <button
          onClick={() => setOpen(!open)}
          className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 px-5 py-0.5 rounded text-blue bg-dark-3 border cursor-pointer font-semibold text-sm hover:underline hover:bg-dark-1"
        >
          <span>{open ? "Show less" : "Show more"}</span>
        </button>
      )}
    </div>
  );
}
