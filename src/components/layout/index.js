import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";

import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <>
      <Header />
      <Container fluid={true} className="main my-3">
        <Row>
          <Col md={10} xs={12} className="mx-auto">
            <main>{children}</main>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Layout;
