import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";
import channelImage from "../../assets/yt-image.jpg";

import VideosCarousel from "./VideosCarousel";

function Youtube() {
  let videos = [
    {
      id: 1,
      url: "https://www.youtube.com/embed/UHNfYSQpxa0",
      title: "Haunted (Horror Short Film)",
      description:
        "Haunted is a horror short film by Ossa Films. 5 friends try to contact non-living entities and they get killed. Watch the full video.",
    },
    {
      id: 2,
      url: "https://www.youtube.com/embed/LN_HlJXcLNk",
      title: "Ossa Vines Compilation 2",
      description:
        "Funny, Weird, Magical vines compilation by Ossa Films. If you like it, give it a thumbs up and comment and share :)",
    },
    {
      id: 3,
      url: "https://www.youtube.com/embed/U-WVZme3au0",
      title: "One Day Trip to Singapore 'ඒක වෙනම ලෝකයක්'",
      description:
        "One day trip to Singapore. In my trip, we visited mainly Universal Studio and to see some landmarks. #Singapore​ #SriLanka​ #OSSAFILMS",
    },
  ];

  return (
    <div id="youtube-section" className="py-5 yt-bg">
      <Container>
        <Row>
          <Col className="my-auto">
            <h2 className="align-middle text-light my-auto mt-3">YouTube Channel</h2>
          </Col>
          <Col md="auto" className="my-auto">
            <Row className="my-auto yt-channel-link">
              <Col md="auto" xs="auto">
                <img className="yt-image" src={channelImage} alt="Channel" />
              </Col>
              <Col className="my-auto pl-0">
                <h6 className="mb-0 text-light">OSSA - ඔස්සා</h6>
                <a
                  className="subscribe-btn"
                  href="https://www.youtube.com/channel/UCN6Y4LVrJqi6xL5W3QFpI3A?sub_confirmation=1"
                >
                  Subscribe
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
        <hr className="bg-light" />

          <p className="text-center text-light">
            After the Advanced Level exams, I started this channel just as a
            hobby (video editing is one of my hobbies). OSSA - ඔස්සා channel
            cannot categorize specifically. I tried different things such as
            compilations, vlogs, musicals, short films and advanced visual
            effects. Feel free to visit there too and consider subscribing ;)
          </p>
          <VideosCarousel videos={videos} />
        </Container>
    </div>
  );
}

export default Youtube;
