import React from "react";
import { Container } from "react-bootstrap";
import "./style.css"

import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <>
      <Header />
      <Container fluid={true} className="main my-3">
        <main>{children}</main>
      </Container>
      <Footer />
    </>
  );
}

export default Layout;
