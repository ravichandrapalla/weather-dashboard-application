import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

export const Layout = () => {
  return (
    <div id="grid-layout">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
