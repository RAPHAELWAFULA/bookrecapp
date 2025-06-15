import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Explore from "./pages/explore";
import Favourites from "./pages/favourites";
import Library from "./pages/library";
import AddBooks from "./pages/AddBooks";
import MyBooks from "./pages/MyBooks";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";

import './App.css';

function App() {
  const [likedBooks, setLikedBooks] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // 🔐 auth state

  const handleLikeBook = (book) => {
    if (!likedBooks.some((b) => b.id === book.id)) {
      setLikedBooks([...likedBooks, book]);
    }
  };

  return (
    <Router>
      {/* Navbar now receives isAuthenticated */}
      <Navbar isAuthenticated={isAuthenticated} />

      <Routes>
        {/* Pass setIsAuthenticated to Explore so user can log in */}
        <Route path="/" element={<Explore setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp setIsAuthenticated={setIsAuthenticated} />} />


        {/* These routes require authentication via Navbar's link protection */}
        <Route path="/favourite" element={<Favourites likedBooks={likedBooks} />} />
        <Route path="/library" element={<Library onLikeBook={handleLikeBook} />} />
        <Route path="/AddBooks" element={<AddBooks />} />
        <Route path="/MyBooks" element={<MyBooks />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
