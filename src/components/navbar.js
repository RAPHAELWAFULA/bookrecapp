import { useNavigate } from 'react-router-dom';
import './navbar.css';
import { useState } from 'react';
import { FaHome } from 'react-icons/fa';

const Navbar = ({ isAuthenticated }) => {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleProtectedNav = (e, path) => {
    e.preventDefault();
    if (isAuthenticated) {
      navigate(path);
    } else {
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);
    }
  };

  return (
    <div className="navbar">
    
      <div className='small-nav'>
     

      <a href="/" style={{ display: "none", color: "white" }} className="homeicon">
        <FaHome />
      </a>

      <div className="navlinks">
        {/* Protected Links */}
        <a href="/" onClick={(e) => handleProtectedNav(e, "/")}>EXPLORE</a>
        <a href="/favourite" onClick={(e) => handleProtectedNav(e, "/favourite")}>FAVOURITES</a>
        <a href="/library" onClick={(e) => handleProtectedNav(e, "/library")}>LIBRARY</a>
        <a href="/AddBooks" onClick={(e) => handleProtectedNav(e, "/AddBooks")}>ADD A BOOK</a>
        <a href="/MyBooks" onClick={(e) => handleProtectedNav(e, "/MyBooks")}>MY LIBRARY</a>
      </div>
      <div className="logo">
        <h1>BOOKRAC</h1>
      </div>

      <h1 className="read">
        <img
          src="/footerlogo.png"
          alt="logo"
          style={{ width: "100px", height: "70px" }}
        />
      </h1>

      {/* Popup */}
      {showPopup && (
        <div className="popup">
          ⚠️ Please sign in first!
        </div>
      )}
      </div>
    </div>
  );
};

export default Navbar;
