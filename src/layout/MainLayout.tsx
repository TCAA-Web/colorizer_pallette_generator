import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer/Footer";
import { Navigation } from "../components/Navigation/Navigation";

export const MainLayout = () => {
  return (
    <main>
      <Navigation />
      <Outlet></Outlet>
      <Footer />
    </main>
  );
};
