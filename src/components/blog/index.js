import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";

import BlogCard from "./BlogCrad";
import Profile from "./Profile";

function Blog() {
  const [data, setData] = useState([]);
  const [latest, setLatest] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@osusarakammalawatta`)
      .then((res) => res.json())
      .then((response) => {
        setData(response);
        setLatest([
          response.items[0],
          response.items[1],
          response.items[2],
          response.items[3],
        ]);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container fluid={true} id="blog-section">
      {isLoading ? (
        <h2>Blogs Loading...</h2>
      ) : (
        <>
          <Row>
            <Col>
              <h2 className="align-middle mt-3">Blogs</h2>
            </Col>
            <Col md="auto" xs={12}>
              <Profile feed={data.feed} className="m-auto" />
            </Col>
          </Row>
          <hr className="mt-0" />
          <Row>
            {latest.map((article) => (
              <Col lg={3} md={3} xs={12} className="my-3">
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
