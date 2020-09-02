import React from "react";
import { Media } from "react-bootstrap";

function Profile({ feed }) {
  return (
    <Media className="media-div">
      <a
        href={feed.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="profile-image mr-3"
          src={feed.image}
          alt="Generic placeholder"
        />
      </a>
      <Media.Body>
        <p className="profile-text">
          <a
            className="profile-link"
            href={feed.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            @osusarakammalawatta
          </a>
          <br />
          <a
            className="profile-link-description"
            href={feed.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {feed.description}
          </a>
        </p>
      </Media.Body>
    </Media>
  );
}

export default Profile;
