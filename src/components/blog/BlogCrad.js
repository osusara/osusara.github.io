import React from "react";
import { Card } from "react-bootstrap";

function BlogCard({ article }) {
  return (
    <Card>
      <div className="blog-div">
        <Card.Img src={article.thumbnail} className="blog-img" />
      </div>
      <Card.Body>
        <Card.Title>{article.title}</Card.Title>
        <small>{article.pubDate}</small>
        <Card.Link href={article.link} target="_blank">
          Read More
        </Card.Link>
      </Card.Body>
    </Card>
  );
}

export default BlogCard;
