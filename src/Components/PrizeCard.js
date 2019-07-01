import React from "react";
import "bulma/css/bulma.css";


function PrizeCard({ prizeName, imgSrc, points }) {
  return (
    <div className="personal-card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={imgSrc} alt={prizeName} />
        </figure>
      </div>
      <p className="title is-5">{prizeName}</p>
      <div className="center">
        <div className="media">
          <div className="media-content">
          <figure className ="image is-48x48">
              <img src = "https://image.freepik.com/vector-gratis/comienzo_53876-25533.jpg"></img>
              <p className="subtitle is-6 over-text">{points}</p>
          </figure>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrizeCard;
