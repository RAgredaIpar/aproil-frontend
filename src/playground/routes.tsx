import { lazy, Suspense } from "react";

import { demos } from "./demos";
import { PlaygroundGate } from "./guard";
import PlaygroundLayout from "./layout";

import type { RouteObject } from "react-router-dom";

const enabled =
  import.meta.env.DEV || import.meta.env.VITE_ENABLE_PLAYGROUND === "true";

export function getPlaygroundRoutes(): RouteObject[] {
  if (!enabled) return [];

  const children: RouteObject[] = demos.map((d) => {
    const Comp = lazy(d.loader);
    return {
      path: d.path,
      element: (
        <Suspense fallback={<div>Cargando demo…</div>}>
          <Comp />
        </Suspense>
      ),
    };
  });

  return [
    {
      path: "/playground",
      element: (
        <PlaygroundGate>
          <PlaygroundLayout />
        </PlaygroundGate>
      ),
      children: [
        ...children,
        { index: true, element: <div>Elige un demo en el menú.</div> },
      ],
    },
  ];
}
