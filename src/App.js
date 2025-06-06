import Navbar from "./components/navbar";
import Explore from "./pages/explore";
import Recomandations from "./pages/recomandations";
import Library from "./pages/library";
import Contact from "./pages/contact";
import Footer from "./components/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import './App.css';
// import { useState } from "react";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Explore />} />
        <Route path="/recomandations" element={<Recomandations />} />
        <Route path="/library" element={<Library />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
};

export default App;
