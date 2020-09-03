import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Contact() {
  return (
    <Container fluid={true}>
      <Row>
        <Col>
          <h2 className="align-middle mt-3">Contacts</h2>
        </Col>
      </Row>
      <hr className="mt-0" />
    </Container>
  );
}

export default Contact;
