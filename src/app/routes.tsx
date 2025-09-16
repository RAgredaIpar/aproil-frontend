import { createBrowserRouter } from "react-router-dom";

import PublicLayout from "../pages/public/_layout/PublicLayout.tsx";
import HomePage from "../pages/public/HomePage";
import { getPlaygroundRoutes } from "../playground/routes";

export const router = createBrowserRouter([
  {
    element: <PublicLayout />,
    children: [{ path: "/", element: <HomePage /> }],
  },
  ...getPlaygroundRoutes(),
]);
