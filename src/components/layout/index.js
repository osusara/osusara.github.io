import React from "react";
import "./style.css";

import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="main my-3">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}

export default Layout;
