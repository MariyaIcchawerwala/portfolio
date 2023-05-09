import {
  FaGithub,
  FaHome,
  FaLinkedin,
  FaLinkedinIn,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";
import "./Footer.css";
import { Link } from "react-router-dom";

import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContainer">
        <div className="left">
          <div className="adress">
            <FaHome size={20} className="icon" />
            <div>
              <p>95,Saiffee Mohalla</p>
              <p>ujjain</p>
            </div>
          </div>
          <div className="phone">
            <FaPhone size={20} className="icon" />
            <h4>9009020952</h4>
          </div>
          <div className="mail">
            <FaMailBulk size={20} className="icon" />
            <h4>mariyaicchawer@gmail.com</h4>
          </div>
        </div>
        <div className="right">
          <a
            href="https://www.linkedin.com/in/mariya-icchawarwala-53b417237/"
            target="_blank"
          >
            <FaLinkedin size={20} style={{ marginRight: "0.5rem" }} />{" "}
            <p>Linkedin Profile</p>
          </a>

          <a href="https://github.com/MariyaIcchawerwala" target="_blank">
            <FaGithub size={20} style={{ marginRight: "0.5rem" }} />{" "}
            <p>Github Profile</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
