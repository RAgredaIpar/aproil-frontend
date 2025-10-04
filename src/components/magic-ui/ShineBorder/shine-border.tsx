"use client";

import { cn } from "@lib/utils";
import * as React from "react";

type ShineBorderProps = {
  borderWidth?: number;
  shineColor?: string | string[];
  className?: string;
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export function ShineBorder({
  borderWidth = 1,
  shineColor = "#000000",
  className,
  style,
  children,
  ...props
}: ShineBorderProps) {
  const colorString = Array.isArray(shineColor)
    ? shineColor.join(",")
    : shineColor;

  return (
    <div className={cn("relative z-0", className)} style={style} {...props}>
      <div
        style={
          {
            "--border-width": `${borderWidth}px`,
            backgroundImage: `radial-gradient(transparent, transparent, ${colorString}, transparent, transparent)`,
            backgroundSize: "300% 300%",
            mask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
            WebkitMask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            padding: "var(--border-width)",
          } as React.CSSProperties
        }
        className="pointer-events-none absolute inset-0 size-full rounded-[inherit] will-change-[background-position] z-1 motion-safe:animate-shine"
      />

      <div className="relative z-0">{children}</div>
    </div>
  );
}
