import { useNavigate, Link } from 'react-router-dom';
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
  <Link to="/">EXPLORE</Link>
  <Link to="/favourites">FAVOURITES</Link>
  <Link to="/library">LIBRARY</Link>
  <Link to="/AddBooks">ADD A BOOK</Link>
  <Link to="/MyBooks">MY LIBRARY</Link>
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
