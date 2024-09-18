import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faWhatsapp,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="footer-top align-items-center">
          <Col md={6} className="footer-left">
            <h1>Kavi</h1>
            <p>
              I am a frontend developer from Tamil Nadu with experience in
              various freelance projects.
            </p>
          </Col>
          <Col
            md={6}
            className="footer-right d-flex justify-content-md-end justify-content-center"
          >
            <a
              href="mailto:kaviyarasu2224@gmail.com"
              // target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a
              href="https://wa.me/919095850341"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
            <a
              href="https://www.linkedin.com/in/kaviyarasu22/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://github.com/kaviyarasu2224"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </Col>
        </Row>

        <hr className="line" />

        <Row className="footer-bottom align-items-center">
          <Col md={6} className="footer-bottom-left">
            © 2024 Kaviyarasu. All rights reserved.
          </Col>
          <Col
            md={6}
            className="footer-bottom-right d-flex justify-content-md-end justify-content-center"
          >
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
