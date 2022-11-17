import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from  "./yt.module.css";

import VideosCarousel from "./VideosCarousel";

function Youtube({ youtube }) {
  return (
    <Container fluid={true} className={styles.yt_bg}>
      <div id="youtube-section" className="py-5">
        <Container>
          <Row>
            <Col className="my-auto">
              <h2 className="align-middle text-light my-auto mt-3">
                Video Contents
              </h2>
            </Col>
            <Col md="auto" className="my-auto">
              <Row className="my-auto profile-link">
                <Col md="auto" xs="auto">
                  <img className="profile-image" src={youtube.image} alt="Channel" />
                </Col>
                <Col className="my-auto pl-0">
                  <h6 className="mb-0 text-light">{youtube.channel}</h6>
                  <a
                    className={styles.subscribe_btn}
                    href={youtube.subscribe}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Youtube channel
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
    </Container>
  );
}

export default Youtube;
