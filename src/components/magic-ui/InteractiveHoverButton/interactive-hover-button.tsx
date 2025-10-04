import {cn} from "@lib/utils"
import {ArrowRight} from "lucide-react"
import React from "react"

type InteractiveHoverButtonProps = {} & React.ButtonHTMLAttributes<HTMLButtonElement>

export const InteractiveHoverButton = React.forwardRef<
    HTMLButtonElement,
    InteractiveHoverButtonProps
>(({children, className, ...props}, ref) => {
    return (
        <button
            ref={ref}
            className={cn(
                "group bg-[#E30613] relative w-auto cursor-pointer overflow-hidden rounded-full border border-[#E30613] p-4 px-6 text-center font-semibold",
                className
            )}
            {...props}
        >
            <div className="flex items-center gap-2 lg:p-3 md:p-2">
                <div
                    className="bg-white h-4 w-4 rounded-full transition-all duration-300 group-hover:scale-[100.8]"></div>
                <span
                    className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0 text-white uppercase">
          {children}
        </span>
            </div>
            <div
                className="text-[#E30613] absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100 uppercase">
                <span>{children}</span>
                <ArrowRight className="2xl:w-10 2xl:h-10 "/>
            </div>
        </button>
    )
})

InteractiveHoverButton.displayName = "InteractiveHoverButton"
