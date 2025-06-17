import "./footer.css";
// import { useState } from "react";
// import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="topfooter">
        <img src="/footerlogo.png" alt=""/>
      </div>
      <div className="bottomfooter">
     
        <div className="footerinfo">
        <h2 style={{backgroundColor:"#36454F"}}>BOOKRAC</h2>
     <p> Your trusted book recomendation platform
      &copy; 2025 <a href="">BOOKRAC</a> . All rights reserved.
      Contact: <a href="">wafularaphael84@gmail.com</a>
      
      Privacy Policy, Terms of Service, © Copyright
      </p>
      
        Follow me:{" "}
        <p>
        <a
          href="https://github.com/RAPHAELWAFULA?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>{" "}
        |{" "}
        <a
          href="https://www.linkedin.com/in/raphael-wafula-64650333b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a></p>


        </div>
        < div className="footericons">
        
      <img src="/iconX2.png" alt="Book Cover" />
      <img src="/iconfb2.png" alt="Book Cover" />
      <img src="/iconwhatsap2.png" alt="Book Cover" />
      <img src="/iconisnta2.png" alt="Book Cover" />


        </div>
        <div className="footerlinks" style={{
      
        }}>
        <ul>
          <li><a href="">FAQ</a></li>
          <li><a href="">TELL</a></li>
          <li><a href="">ABOUT</a></li>
          <li><a href="">HOME</a></li>
          <li><a href="">HELP</a></li>
        </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
