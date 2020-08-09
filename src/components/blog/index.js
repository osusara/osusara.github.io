import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";

import BlogCard from "./BlogCrad";

function Blog() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@osusarakammalawatta`
    )
      .then((res) => res.json())
      .then((response) => {
        setData(response);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container fluid={true} id="blog">
      <Row>
        {isLoading
          ? "Loading..."
          : data.items.map((article) => (
              <Col md={4} xs={12}>
                <BlogCard article={article} />
              </Col>
            ))}
      </Row>
    </Container>
  );
}

export default Blog;
