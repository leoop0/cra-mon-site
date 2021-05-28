import React from "react";
import "../styles/Footer.css";
import logoGithub from "../assets/logo-github.svg";
import logoInsta from "../assets/logo-instagram.svg";
import logoLinked from "../assets/logo-linkedin.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content-container">
        <Link to="/mentions-legales">Mentions Légales</Link>
        <div className="social-media">
          <a href="https://github.com/leoop0/" target="blank"><img src={logoGithub} alt="logoGithub" /></a>
          <a href="https://www.instagram.com/salutcest.leo/" target="blank"><img src={logoInsta} alt="logoInsta" /></a>
          <a href="https://www.linkedin.com/in/leofrati/" target="blank"><img src={logoLinked} alt="logoLinked" /></a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
