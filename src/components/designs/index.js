import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./design.module.css";

function Designs({ behance }) {
  return (
    <Container fluid={true} className={styles.design_bg}>
      <div id="design-section" className="py-5 text-light">
        <Container>
          <Row>
            <Col className="my-auto">
              <h2 className="align-middle my-auto mt-3">Design Portfolio</h2>
            </Col>
            <Col md="auto" className="my-auto">
              <Row className="my-auto profile-link">
                <Col md="auto" xs="auto">
                  <img
                    className="profile-image"
                    src={behance.image}
                    alt="Channel"
                  />
                </Col>
                <Col className="my-auto pl-0">
                  <h6 className="mb-0">{behance.username}</h6>
                  <a
                    className={styles.b_link}
                    href={behance.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Behance
                  </a>
                </Col>
              </Row>
            </Col>
          </Row>
          <hr className="bg-light" />
          <p>{behance.description}</p>

          <Row>
            {behance.designs.map((design) => (
              <Col
                key={design.id}
                md={4}
                xs={12}
                className={`py-1 px-3 ${styles.b_cards}`}
              >
                <a
                  href={design.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.b_images_div}
                >
                  <img
                    src={design.image}
                    className={`${styles.b_img} w-100`}
                    alt="nothing"
                  />
                  <img
                    src={design.caption}
                    className={`${styles.b_caption} w-100`}
                    alt="nothing"
                  />
                </a>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </Container>
  );
}

export default Designs;
