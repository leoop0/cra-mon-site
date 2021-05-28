import React from "react";
import "../styles/Banner.css";

function Banner() {
  return (
    <div className="banner-container">
      <div className="banner-content-container">
        <div className="rev-block revB">
          <h1>
            <span className="playfair">léo frati, </span>développeur web & web
            designer
          </h1>
        </div>
        <div className="rev-block delfirst">
          <h2>freelance à Bordeaux</h2>
        </div>
      </div>
    </div>
  );
}

export default Banner;
