import { Outlet } from "react-router-dom";
import Navbar from "./home/Navbar";
import Footer from "./home/Footer";

function AppLayout() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
