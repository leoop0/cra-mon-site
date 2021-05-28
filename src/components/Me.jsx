import React from "react";
import "../styles/Me.css";
import { Link } from "react-router-dom";
import imgMe from "../assets/img.png";

function Me() {
  return (
    <div className="me-container">
      <div className="me-content-container">
        <div className="me-text-container">
          <div className="rev-block delsecond">
            <h3>Qui suis-je ?</h3>
          </div>
          <div className="rev-block delthird">
            <p>
              Jeune développeur web front-end & web designer, je suis{" "}
              <strong>freelance</strong> depuis quelques temps.
            </p>
          </div>
          <div className="rev-block delthird">
            <p>
              J'ai l'occasion de m'occuper de différents sites web, qu'ils
              soient vitrine ou e-commerce, le plus souvent via Wordpress.
            </p>
          </div>
          <div className="rev-block delthird">
            <p>
              Si vous avez un projet, n'hésitez pas à{" "}
              <Link to="/contact" className="playfair">
                <strong className="playfair">me contacter</strong>
              </Link>
              .
            </p>
          </div>
          <div className="rev-block download"><a href="http://leofrati.fr/images/leo_frati_cv.pdf"><p>Voir mon CV.</p></a></div>
        </div>
        <div className="me-image-container">
          <div className="rev-block delthird">
            <img src={imgMe} alt="imgMe" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Me;
