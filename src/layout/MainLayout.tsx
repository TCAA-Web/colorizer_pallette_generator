import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer/Footer";
import { Navigation } from "../components/Navigation/Navigation";
import { ToastContainer } from "react-toastify";
export const MainLayout = () => {
  return (
    <main>
      <Navigation />
      <Outlet></Outlet>
      <ToastContainer position="bottom-right" theme="dark" />
      <Footer />
    </main>
  );
};
