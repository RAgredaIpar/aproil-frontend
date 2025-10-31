import Link from "next/link";
import { ArrowRight } from "lucide-react";
import React from "react";
import { cn } from "@lib/utils";

type InteractiveHoverButtonProps = {
    href: string;
    color?: string;
    textColor?: string;
    hoverColor?: string;
    hoverTextColor?: string;
    lineColor?: string;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "color">;

export const InteractiveHoverButton = React.forwardRef<
    HTMLAnchorElement,
    InteractiveHoverButtonProps
>(({ children, className, href, color = "#E30613", textColor = "#FFFFFF", hoverColor = "#FFFFFF", hoverTextColor = "#E30613", lineColor = "#E30613", ...props }, ref) => {
    return (
        <Link
            ref={ref}
            href={href}
            className={cn(
                // único extra: inline-block para replicar el display del <button>
                "group relative inline-block w-auto cursor-pointer overflow-hidden rounded-full border p-4 px-6 text-center font-semibold",
                className
            )}
            style={{
                backgroundColor: color,
                borderColor: lineColor,
            }}
            {...props}
        >
            <div className="flex items-center gap-2 lg:p-3 md:p-2">
                <div
                    className="h-4 w-4 rounded-full transition-all duration-300 group-hover:scale-[100.8]"
                    style={{ backgroundColor: hoverColor }}
                />
                <span
                    className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0 text-white uppercase"
                    style={{ color: textColor }}
                >
          {children}
        </span>
            </div>

            <div
                className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100 uppercase"
                style={{ backgroundColor: hoverColor }}
            >
                <span style={{ color: hoverTextColor }}>{children}</span>
                <ArrowRight className="2xl:w-10 2xl:h-10" style={{ color: hoverTextColor }} />
            </div>
        </Link>
    );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";
