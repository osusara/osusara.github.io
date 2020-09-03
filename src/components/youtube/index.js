import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { YOUTUBE_API_KEY, YOUTUBE_CHANNEL } from "../../secretsManager";
import "./style.css";

import Videos from "./Videos";

require("dotenv").config();

function Youtube() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${YOUTUBE_CHANNEL}&part=snippet,id&order=date&maxResults=5`)
      .then((res) => res.json())
      .then((response) => {
        setData(response);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container fluid={true}>
      {isLoading ? (
        <h2>Videos Loading...</h2>
      ) : (
        <>
          <Row>
            <Col>
              <h2 className="align-middle mt-3">Video Contents</h2>
            </Col>
          </Row>
          <hr className="mt-0" />
          <Row>
            <Col lg={12} md={12} xs={12} className="my-3">
              <Videos videos={data.items} />
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
}

export default Youtube;
