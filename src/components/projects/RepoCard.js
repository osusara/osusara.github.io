import React from "react";
import { Col, Card, Row, Badge } from "react-bootstrap";

const RepoCard = ({ item }) => {
  const { id, title, description, technologies, url } = item;

  return (
    <Col key={id} md={4} xs={6} className="p-2 ig-cards">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-dark"
      >
        <Card className="project-card">
          <Card.Body>
            <h5>{title}</h5>
            <p className="project-description">{description}</p>
            <br />
            <Row className="project-stats">
              <Col md={12}>
                {technologies.map((tech) => (
                  <Badge key={tech} pill bg="primary">{tech}</Badge>
                ))}
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </a>
    </Col>
  );
};

export default RepoCard;
