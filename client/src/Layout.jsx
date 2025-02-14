import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./Footer.jsx";

const Layout = () => {
  return (
    <React.Fragment>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </React.Fragment>
  );
};

export default Layout;
