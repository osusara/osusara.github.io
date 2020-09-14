import React from "react";
import { Card, Carousel } from "react-bootstrap";

function VideosCarousel({ videos }) {
  return (
    <Carousel indicators={false} data-aos="fade-up">
      {videos.map((video) =>
        video.id.kind === "youtube#video" ? (
          <Carousel.Item key={video.id.videoId}>
            <div className="row mx-auto">
              <div className="col-md-5 col-xs-8 ml-auto my-4">
                <Card className="embed-responsive embed-responsive-16by9 shadow">
                  <iframe
                    title={video.snippet.title}
                    className="card embed-responsive-item"
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${video.id.videoId}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </Card>
              </div>
              <div className="col-md-4 col-xs-8 mr-auto my-auto">
                <h5>{video.snippet.title}</h5>
                <p className="text-secondary">{video.snippet.description}</p>
              </div>
            </div>
          </Carousel.Item>
        ) : (
          <></>
        )
      )}
    </Carousel>
  );
}

export default VideosCarousel;
