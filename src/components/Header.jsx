import React, { useState } from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import logoGithub from "../assets/logo-github.svg";
import logoInsta from "../assets/logo-instagram.svg";
import logoLinked from "../assets/logo-linkedin.svg";

function Header() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);
  return (
    <div className="header">
      <nav>
        <div className="navLogo">
          <div id="custom-logo">
            <Link to="/">
              <img src={logo} alt="logo" onClick={closeMenu} />
            </Link>{" "}
          </div>
        </div>
        <div
          className={click ? "navInput navInputActive" : "navInput"}
          id="inputNav"
          onClick={handleClick}
        >
          <div className="menu-icon cursor-link" onClick={handleClick}>
            <span
              className="nav-transform-left menu-icon-line menu-icon-line-left"
              id="left-nav"
            ></span>
            <span
              className="nav-transform-middle menu-icon-line"
              id="middle-nav"
            ></span>
            <span
              className="nav-transform-right menu-icon-line menu-icon-line-right"
              id="right-nav"
            ></span>
          </div>
        </div>
      </nav>
      <div id="menu-nav" className={click ? "menu-nav-active" : "menu-nav"}>
        <div className="menu-content">
          <ul id="menu-txt">
            <li>
              <p>01.</p>
              <Link to="/" className="content-nav" onClick={closeMenu}>
                Accueil.
              </Link>
            </li>
            <li>
              <p>02.</p>
              <Link to="/dev" className="content-nav" onClick={closeMenu}>
                Dev Web.
              </Link>
            </li>
            <li>
              <p>03.</p>
              <Link to="/uidesign" className="content-nav" onClick={closeMenu}>
                UI Design.
              </Link>
            </li>
            <li>
               <p>04.</p>
               <Link to="/contact" className="content-nav" onClick={closeMenu}>Contact.</Link>
            </li>
          </ul>
        </div>
        <div id="media">
          <Link to="/">
          <img src={logoInsta} alt="logoInsta" />
          </Link>
          <Link to="/">
          <img src={logoLinked} alt="logoLinked" />
          </Link>
          <Link to="/">
          <img src={logoGithub} alt="logoGithub" />
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Header;
