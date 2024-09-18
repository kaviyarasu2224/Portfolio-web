import React, { useState } from "react";
import "./Navbar.css";
import { Navbar, Nav, Container } from "react-bootstrap";

const MyNavbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      // bg="dark"
      variant="dark"
      fixed="top"
      className="navbar"
    >
      <Container>
        <Navbar.Brand href="#home" className="nav-logo">
          K ⩓⩔ i
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto nav-menu">
            <Nav.Link
              href="#home"
              className={`nav-link ${menu === "home" ? "active" : ""}`}
              onClick={() => setMenu("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#about"
              className={`nav-link ${menu === "about" ? "active" : ""}`}
              onClick={() => setMenu("about")}
            >
              About Me
            </Nav.Link>
            <Nav.Link
              href="#service"
              className={`nav-link ${menu === "service" ? "active" : ""}`}
              onClick={() => setMenu("service")}
            >
              Services
            </Nav.Link>
            <Nav.Link
              href="#portfolio"
              className={`nav-link ${menu === "portfolio" ? "active" : ""}`}
              onClick={() => setMenu("portfolio")}
            >
              Portfolio
            </Nav.Link>
            <Nav.Link
              href="#contact"
              className={`nav-link ${menu === "contact" ? "active" : ""}`}
              onClick={() => setMenu("contact")}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
