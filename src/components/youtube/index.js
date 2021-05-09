import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";

import VideosCarousel from "./VideosCarousel";

function Youtube({ youtube }) {
  return (
    <div id="youtube-section" className="py-5 yt-bg">
      <Container>
        <Row>
          <Col className="my-auto">
            <h2 className="align-middle text-light my-auto mt-3">
              YouTube Channel
            </h2>
          </Col>
          <Col md="auto" className="my-auto">
            <Row className="my-auto yt-channel-link">
              <Col md="auto" xs="auto">
                <img className="yt-image" src={youtube.image} alt="Channel" />
              </Col>
              <Col className="my-auto pl-0">
                <h6 className="mb-0 text-light">{youtube.channel}</h6>
                <a
                  className="subscribe-btn"
                  href={youtube.subscribe}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Subscribe
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
        <hr className="bg-light" />

        <p className="text-light">{youtube.description}</p>
        <VideosCarousel videos={youtube.videos} />
      </Container>
    </div>
  );
}

export default Youtube;
