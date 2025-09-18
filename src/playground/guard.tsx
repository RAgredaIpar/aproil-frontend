import { Navigate } from "react-router-dom";

import type { ReactNode } from "react";

const enabled =
  import.meta.env.DEV || import.meta.env.VITE_ENABLE_PLAYGROUND === "true";

export function PlaygroundGate({ children }: { children: ReactNode }) {
  if (!enabled) return <Navigate to="/" replace />;
  return <>{children}</>;
}
