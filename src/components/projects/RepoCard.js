import React from "react";
import { Col, Card, Row } from "react-bootstrap";
import { VscRepoForked, VscStarEmpty, VscCircleFilled } from "react-icons/vsc";

const RepoCard = ({ item }) => {
  const { repo, description, language, stars, forks } = item;

  return (
    <Col key={repo} md={4} xs={6} className="p-2 ig-cards">
      <Card className="project-card">
        <Card.Body>
          <h5>{repo}</h5>
          <p>{description}</p>
          <br />
          <Row className="project-stats">
            <Col md={8}>
              <VscCircleFilled className="mb-1" /> {language}
            </Col>
            <Col md={2}>
              <VscStarEmpty className="mb-1" /> {stars}
            </Col>
            <Col md={2}>
              <VscRepoForked className="mb-1" /> {forks}
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default RepoCard;
