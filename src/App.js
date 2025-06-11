import Navbar from "./components/navbar";
import Explore from "./pages/explore";
import Favourites from "./pages/favourites";
import Library from "./pages/library";
import Contact from "./pages/contact";
import Footer from "./components/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import './App.css';
// import { useState } from "react";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import Favorites from "./pages/favourites";
import React, { useState } from 'react';


function App() {
  const [likedBooks, setLikedBooks] = useState([]);

  const handleLikeBook = (book) => {
    if (!likedBooks.some((b) => b.id === book.id)) {
      setLikedBooks([...likedBooks, book]);
    }
  };
  
  return (
    <Router>
      {/* {location.pathname !== "/" && <Navbar />} */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Explore />} />
        <Route path="/favourite" element={<Favourites likedBooks={likedBooks} />} />
        <Route path="/library" element={<Library onLikeBook={handleLikeBook} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<SignIn />} />
        
        
      </Routes>
      <Footer />
      
    </Router>
  );
};

export default App;
