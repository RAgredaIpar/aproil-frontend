import { RouterProvider, createBrowserRouter } from "react-router-dom";

import PublicLayout from "./pages/public/_layout/PublicLayout.tsx";
import { getPlaygroundRoutes } from "./playground/routes";

const router = createBrowserRouter([
  { path: "/", element: <PublicLayout /> },
  ...getPlaygroundRoutes(), // /playground solo en dev
]);

export default function App() {
  return <RouterProvider router={router} />;
}
