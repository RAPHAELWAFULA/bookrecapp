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


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Explore />} />
        <Route path="/Favourite" element={<Favourites />} />
        <Route path="/library" element={<Library />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<SignIn />} />
        
        
      </Routes>
      <Footer />
      
    </Router>
  );
};

export default App;
