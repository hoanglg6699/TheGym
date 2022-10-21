import React from "react";
import "./Footer.css";
import GitHub from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import LinkedIn from "../../assets/linkedin.png";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="Footer-container">
      <hr />
      <div className="footer">
        <div className="socials-link">
          <img src={GitHub} alt="" />
          <img src={Instagram} alt="" />
          <img src={LinkedIn} alt="" />
        </div>
        <div className="Footer-logo">
          <img src={logo} alt="" />
        </div>
      </div>

      <div className="blur footer-blur1"></div>
      <div className="blur footer-blur2"></div>
    </div>
  );
};

export default Footer;
