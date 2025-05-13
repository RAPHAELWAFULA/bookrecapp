import "./footer.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <p>&copy; 2025 Your Name. All rights reserved.</p>
      <p>Contact: your.email@example.com</p>
      <p>
        Follow me:{" "}
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>{" "}
        |{" "}
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </p>
      <div className="footericons">{/* You can add icons here later */}</div>
    </div>
  );
};

export default Footer;
