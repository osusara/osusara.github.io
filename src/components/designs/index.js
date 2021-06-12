import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";

function Designs({ instagram }) {
  return (
    <Container fluid={true}>
      <div id="design-section" className="py-5">
        <Container>
          <Row>
            <Col className="my-auto">
              <h2 className="align-middle my-auto mt-3">Design Portfolio</h2>
            </Col>
            <Col md="auto" className="my-auto">
              <Row className="my-auto yt-channel-link">
                <Col md="auto" xs="auto">
                  <img
                    className="yt-image"
                    src={instagram.image}
                    alt="Channel"
                  />
                </Col>
                <Col className="my-auto pl-0">
                  <h6 className="mb-0">{instagram.username}</h6>
                  <a
                    className="ig-link"
                    href={instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </Col>
              </Row>
            </Col>
          </Row>
          <hr className="bg-light" />
          <p>{instagram.description}</p>

          <Row>
            {instagram.designs.map((design) => (
              <Col
                key={design.id}
                md={4}
                xs={12}
                className="p-1 ig-cards"
              >
                <div className="ig-images-div">
                  <img src={design.url} className="w-100" alt="nothing" />
                  <p className="ig-caption w-100 px-3">{design.caption}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </Container>
  );
}

export default Designs;
