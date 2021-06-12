import React from "react";
import { Card } from "react-bootstrap";

function BlogCard({ article }) {
  return (
    <a href={article.link} target="_blank" rel="noopener noreferrer">
      <Card
        className="blog-card"
        style={{ backgroundImage: `url(${article.thumbnail})` }}
      >
        <Card.Body className="blog-body">
          <p className="blog-text mb-auto">
            <b className="blog-title">{article.title}</b>
            <br />
            <small>{article.pubDate}</small>
          </p>
        </Card.Body>
      </Card>
    </a>
  );
}

export default BlogCard;
