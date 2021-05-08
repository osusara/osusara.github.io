import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";

import BlogCard from "./BlogCard";

function Blog() {
  const [data, setData] = useState([]);
  const [latest, setLatest] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@osusarak`)
      .then((res) => res.json())
      .then((response) => {
        setData(response);
        setLatest(response.items.slice(0, 8));
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container id="blog-section" className="my-3">
      {isLoading ? (
        <h2>Blogs Loading...</h2>
      ) : (
        <>
          <Row>
            <Col className="my-auto">
              <h2 className="align-middle my-auto mt-3">Medium Stories</h2>
            </Col>
            <Col md="auto" className="my-auto">
              <Row className="my-auto m-page-link">
                <Col md="auto" xs="auto">
                  <img className="m-image" src={data.feed.image} alt="Page" />
                </Col>
                <Col className="my-auto pl-0">
                  <h6 className="mb-0">@osusarak</h6>
                  <a
                    className="stories-btn"
                    href={data.feed.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    More Stories
                  </a>
                </Col>
              </Row>
            </Col>
          </Row>

          <hr />
          <Row>
            {latest.map((article) => (
              <Col lg={3} md={4} xs={12} key={article.title} className="my-3">
                <BlogCard article={article} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </Container>
  );
}

export default Blog;
