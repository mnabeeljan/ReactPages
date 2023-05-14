import React from "react";
import "./css/Footer.css";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";


function Footer() {
  return (
    <div className="footer-container">

    <div className="left">
        <p>Muhammad Nabeel's Website</p>
        <p>If you want to login? Please <Link to="/signin" style={{textDecoration:'none'}}>Sign in</Link></p>
        <p>Or want to create new account? <Link to="/signup" style={{textDecoration:'none'}}>Sign up </Link> </p>
    </div>

      <div className="footer-text">
        <p>Saylani Mass IT Training Program</p>
        <p>&copy; 2023 All Rights Reserved</p>
        <p>For more info please visit <Link className="link" to="/contact">Contact us</Link></p>
      </div>



      <div className="social-media">
        <a
          href="https://www.facebook.com/SaylaniMassITTraining/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.instagram.com/p/Cj2msz8Mgnv/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaInstagram />
        </a>
        <a
          href="https://pk.linkedin.com/in/saylanimassittraining"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaLinkedin />
        </a>
      </div>

    </div>
  );
}

export default Footer;
