import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import ScrollToTop from "./ScrollToTop";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="min-h-screen bg-white ">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default Layout;
