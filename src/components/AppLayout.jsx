import { Outlet } from "react-router-dom";
import Navbar from "./home/Navbar";
import Footer from "./home/Footer";

function AppLayout() {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
