import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/public/HomePage";
import { getPlaygroundRoutes } from "./playground/routes";

const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    ...getPlaygroundRoutes(), // /playground solo en dev
]);

export default function App() {
    return <RouterProvider router={router} />;
}
