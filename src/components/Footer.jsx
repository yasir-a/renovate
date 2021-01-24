import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import "../styles/footer.css";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='logo-footer' style={{ color: "#fff" }}>
        Renovate
      </div>
      <div className='social-links'>
        <ul className='social-icons'>
          <li>
            <a href='*'>
              <FaFacebookSquare
                style={{ color: "yellow", marginLeft: "10px" }}
              />
            </a>
          </li>
          <li>
            <a href='*'>
              <FaInstagramSquare
                style={{ color: "yellow", marginLeft: "10px" }}
              />
            </a>
          </li>
          <li>
            <a href='*'>
              <FaTwitterSquare
                style={{ color: "yellow", marginLeft: "10px" }}
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
