import React from "react";
import Footer from "../footer";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
