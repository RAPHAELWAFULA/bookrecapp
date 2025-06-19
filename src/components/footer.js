import "./footer.css";
// import { useState } from "react";
// import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
    
      <div className="bottomfooter">
       <div className="bottom1">
        <div className="footerinfo">
        <h2 style={{backgroundColor:"#36454F",fontfamily:'exile',
paddingtop: '20px'}}>BOOKRAC</h2>
     <p> Your trusted book recomendation platform
      &copy; 2025 <a href="">BOOKRAC</a> . All rights reserved.
      Contact: <a href="">wafularaphael84@gmail.com</a>
      
      Privacy Policy, Terms of Service, © Copyright
      </p>
      
       


        </div>
        < div className="footericons">,
        
      <img src="/icons8-instagram-logo-40.png" alt="Book Cover" />
      <img src="/icons8-facebook-40.png" alt="Book Cover" />
      <img src="/icons8-whatsapp-40.png" alt="Book Cover" />
      <img src="/icons8-x-40.png" alt="Book Cover" />


        </div>
        </div>
        <div className="bottom2">
          <ul>
            <li><b>SERVICES</b></li>
            <li>Book recomending</li>
            <li> Easy book accesing</li>
            <li>Rated books</li>
            <li> Grouped by themes</li>
          </ul>
        </div>

        <div className="bottom3">
          <ul>
            <li><b>SUPPORT</b></li>
            <li><a href="">Help Centre</a></li>
            <li><a href="">FAQ</a></li>
            <li><a href="">Error Support</a></li>
            <li><a href="">Contact Us</a></li>
          </ul>
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
      <div className="topfooter">
        <div className="top1">
          <p>Copywright of 2025 BOOKRAC all rights reserved by BOOKRAC</p>
        </div>
        <div className="top2">
          <p>Privacy Policy Terms & Conditions Cockie Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
