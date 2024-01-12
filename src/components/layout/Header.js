import React, { useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

function Header() {
  const [toggle, setToggle] = useState(false);

  return (
    <Container fluid={true} className="bg-white fixed-top mb-2 navbar-fix">
      <Navbar expand="lg" className="container navbar-light navbar-fix">
        <Navbar.Brand href="#" className="brand-link">
          osusara
        </Navbar.Brand>

        <Navbar.Toggle
          className="text-primary toggle-button-fix"
          aria-controls="basic-navbar-nav"
          onClick={(e) => setToggle(!toggle)}
        >
          <span
            className={`btn toggle-inner-button-fix hamburger hamburger--slider ${
              toggle ? "is-active" : ""
            } `}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav navbar-fix">
          <Nav className="ml-auto">
            <Nav.Link href="#header-section">Home</Nav.Link>
            <Nav.Link href="#internship-section">Internship</Nav.Link>
            <Nav.Link href="#gallery-section">Gallery</Nav.Link>
            <Nav.Link href="#blog-section">Blogs</Nav.Link>
            <Nav.Link href="#social-section">Feeds</Nav.Link>
            <Nav.Link href="#faq-section">FAQ</Nav.Link>
            <Nav.Link href="#contact-section">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}

export default Header;
