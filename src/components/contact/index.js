import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaBehance,
  FaYoutube,
} from "react-icons/fa";
import "./style.css"

function Contact() {
  return (
    <Container fluid={true}>
      <div id="contacts-section" className="py-5">
        <Container>
          <Row>
            <Col className="my-auto">
              <h2 className="align-middle my-auto mt-3">Contacts</h2>
            </Col>
          </Row>
          <hr />
          <p>
            If you have any inquiries, feel free to contact me via email. Also,
            find me on following social media.
          </p>

          <Row>
            <Col md={3} xs={12}>
              <a href="mailto:osusarak96@gmail.com">
                <Card className="shadow-sm contact-card">
                  <Card.Body className="text-center contact-text">
                    <FaEnvelope /> Email
                  </Card.Body>
                </Card>
              </a>
            </Col>
            <Col md={6} xs={12}>
              <Row className="m-auto">
                <a href="facebook.com/osusara" className="mx-auto">
                  <Card className="social-icon">
                    <Card.Body className="text-center px-2 contact-text">
                      <FaFacebook />
                    </Card.Body>
                  </Card>
                </a>
                <a href="facebook.com/osusara" className="mx-auto">
                  <Card className="social-icon">
                    <Card.Body className="text-center px-2 contact-text">
                      <FaLinkedin />
                    </Card.Body>
                  </Card>
                </a>
                <a href="facebook.com/osusara" className="mx-auto">
                  <Card className="social-icon">
                    <Card.Body className="text-center px-2 contact-text">
                      <FaTwitter />
                    </Card.Body>
                  </Card>
                </a>
                <a href="facebook.com/osusara" className="mx-auto">
                  <Card className="social-icon">
                    <Card.Body className="text-center px-2 contact-text">
                      <FaInstagram />
                    </Card.Body>
                  </Card>
                </a>
                <a href="facebook.com/osusara" className="mx-auto">
                  <Card className="social-icon">
                    <Card.Body className="text-center px-2 contact-text">
                      <FaBehance />
                    </Card.Body>
                  </Card>
                </a>
                <a href="facebook.com/osusara" className="mx-auto">
                  <Card className="social-icon">
                    <Card.Body className="text-center px-2 contact-text">
                      <FaYoutube />
                    </Card.Body>
                  </Card>
                </a>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </Container>
  );
}

export default Contact;
