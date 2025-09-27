import React, { useEffect } from "react";

export function useOutsideClick(
    ref: React.RefObject<HTMLDivElement | null>,
    callback: (event: MouseEvent | TouchEvent) => void
) {
    useEffect(() => {
        const listener = (event: MouseEvent | TouchEvent) => {
            // si no hay ref o se hace click dentro → no dispares callback
            if (!ref.current || ref.current.contains(event.target as Node)) {
                return;
            }
            callback(event);
        };

        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);

        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
    }, [ref, callback]);
}