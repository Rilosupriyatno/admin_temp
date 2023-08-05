import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      <Sidebar />
      <main>{children}</main>
    </React.Fragment>
  );
};

export default Layout;
