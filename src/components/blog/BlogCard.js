import React from "react";
import { Card } from "react-bootstrap";
import styles from "./blog.module.css";

function BlogCard({ article }) {
  return (
    <a href={article.link} target="_blank" rel="noopener noreferrer">
      <Card
        className={styles.blog_card}
        style={{ backgroundImage: `url(${article.thumbnail})` }}
      >
        <Card.Body className={styles.blog_body}>
          <p className={`${styles.blog_text} mb-auto`}>
            <b className={styles.blog_title}>{article.title}</b>
            <br />
            <small>{article.pubDate}</small>
          </p>
        </Card.Body>
      </Card>
    </a>
  );
}

export default BlogCard;
