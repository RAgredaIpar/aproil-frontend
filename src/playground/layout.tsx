import { Link, Outlet, useLocation } from "react-router-dom";

import { demos } from "./demos";

export default function PlaygroundLayout() {
  const { pathname } = useLocation();
  return (
    <div className="min-h-dvh grid grid-cols-[240px_1fr]">
      <aside className="border-r p-4">
        <h2 className="font-semibold mb-3">Playground</h2>
        <nav className="space-y-2">
          {demos.map((d) => {
            const to = `/playground/${d.path}`;
            const active = pathname === to;
            return (
              <div key={d.path}>
                <Link className={active ? "font-medium" : ""} to={to}>
                  {d.title}
                </Link>
              </div>
            );
          })}
        </nav>
      </aside>
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
}
