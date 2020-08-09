import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Landing() {
  return (
    <Container fluid={true}>
      <Row>
        <Col md={6} xs={12}>
          <img />
        </Col>
        <Col md={6} xs={12}>
          <h1>Osusara Kammalawatta</h1>
          <p>
            Software Engineer Intern at 99X Technology. An undergraduate in
            Information Systems at SUSL. I’m a developer, a designer and a
            content creator.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Landing;
