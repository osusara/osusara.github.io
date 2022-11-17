import React, { useEffect, useState } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import "./style.css"
import RepoCard from "./RepoCard";

function Projects({ github }) {
  const [isLoading, setIsLoading] = useState(true);
  const [repos, setRepos] = useState([]);
  const [profile, setProfile] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {
    const res = await fetch(github.profile_api);
    const data = await res.json();
    setProfile(data);
    setIsLoading(false);
  }

  return (
    <Container className="projects-section" fluid={true}>
      <div id="projects-section" className="py-5">
        <Container>
          <Row>
            <Col className="my-auto">
              <h2 className="align-middle my-auto mt-3">Projects</h2>
            </Col>
            {isLoading ? (
              <Spinner animation="grow" className="m-auto" size="sm" />
            ) : (
              <Col md="auto" className="my-auto">
                <Row className="my-auto profile-link">
                  <Col md="auto" xs="auto">
                    <img
                      className="profile-image"
                      src={profile.avatar_url}
                      alt="Channel"
                    />
                  </Col>
                  <Col className="my-auto pl-0">
                    <h6 className="mb-0">{profile.login}</h6>
                    <a
                      className="gh-link"
                      href={github.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </Col>
                </Row>
              </Col>
            )}
          </Row>

          <hr className="bg-light" />
          <p>{profile.bio}</p>

          {error ? (
            <>
              <h5>{error.msg}</h5>
              <p>
                Visit:{" "}
                <a className="gh-link" href={github.url}>
                  {github.url}
                </a>
              </p>
            </>
          ) : (
            <Row>
              {repos.map((repo) =>
                isLoading ? (
                  <Spinner animation="grow" className="m-auto" />
                ) : (
                  <RepoCard item={repo} />
                )
              )}
            </Row>
          )}
        </Container>
      </div>
    </Container>
  );
}

export default Projects;
