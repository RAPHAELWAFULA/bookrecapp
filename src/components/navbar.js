import { useNavigate, Link } from 'react-router-dom';
import './navbar.css';
import { useState } from 'react';

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
      <div className="small-nav">

        <div className="navlinks">
          <Link to="/">EXPLORE</Link>
          <a href="/library" onClick={(e) => handleProtectedNav(e, "/library")}>LIBRARY</a>
          <a href="/favourites" onClick={(e) => handleProtectedNav(e, "/favourites")}>FAVOURITES</a>
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
