import React from "react";
import { Card, Carousel } from "react-bootstrap";

function VideosCarousel({ videos }) {
  return (
    <Carousel indicators={false} data-aos="fade-up">
      {videos.map((video) => (
        <Carousel.Item key={video.id}>
          <div className="row mx-auto">
            <div className="col-lg-5 col-md-7 col-xs-8 ml-auto my-4">
              <Card className="embed-responsive embed-responsive-16by9 shadow">
                <iframe
                  title={video}
                  className="card embed-responsive-item"
                  width="560"
                  height="315"
                  src={video.url}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </Card>
            </div>
            <div className="col-lg-4 col-md-5 col-xs-8 mr-auto my-auto">
              <h5 className="text-white">{video.title}</h5>
              <p className="text-light">{video.description}</p>
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default VideosCarousel;
