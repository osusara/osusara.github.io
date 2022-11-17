import React, { useState, useEffect } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import styles from "./blog.module.css";

import BlogCard from "./BlogCard";

function Blog({ medium }) {
  const [data, setData] = useState([]);
  const [latest, setLatest] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(medium.api)
      .then((res) => res.json())
      .then((response) => {
        setData(response);
        setLatest(response.items.slice(0, 8));
        setIsLoading(false);
      })
      .catch((err) =>
        setError({
          error: err,
          msg: "Sorry Something went wrong while fetching blogs",
        })
      );
  }, [medium]);

  return (
    <Container fluid={true} className={styles.blog_bg}>
      <div id="blog-section" className="py-5">
        <Container>
          <Row>
            <Col className="my-auto">
              <h2 className="align-middle my-auto mt-3">Tech Articles</h2>
            </Col>
            {isLoading ? (
              <Spinner animation="grow" className="m-auto" size="sm" />
            ) : (
              <Col md="auto" className="my-auto">
                <Row className="my-auto profile_link">
                  <Col md="auto" xs="auto">
                    <img
                      className="profile-image"
                      src={data.feed.image}
                      alt="Page"
                    />
                  </Col>
                  <Col className="my-auto pl-0">
                    <h6 className="mb-0">@osusarak</h6>
                    <a
                      className={styles.stories_btn}
                      href={data.feed.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Medium Page
                    </a>
                  </Col>
                </Row>
              </Col>
            )}
          </Row>

          <hr />
          {!isLoading && <p>{data.feed.description}</p>}

          {error ? (
            <>
              <h5>{error.msg}</h5>
              <p>
                Visit:{" "}
                <a className={styles.stories_btn} href={medium.url}>
                  {medium.url}
                </a>
              </p>
            </>
          ) : (
            <Row>
              {latest.map((article) =>
                isLoading ? (
                  <Spinner animation="grow" className="m-auto" />
                ) : (
                  <Col
                    lg={3}
                    md={4}
                    xs={6}
                    key={article.title}
                    className={`my-3 ${styles.artical_card}`}
                  >
                    <BlogCard article={article} />
                  </Col>
                )
              )}
            </Row>
          )}
        </Container>
      </div>
    </Container>
  );
}

export default Blog;
