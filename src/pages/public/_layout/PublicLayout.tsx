import { Outlet } from "react-router-dom";

import Footer from "../_components/Footer";
import Header from "../_components/Header";

export default function PublicLayout() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-4">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
