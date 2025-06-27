import React, { useEffect, useState } from 'react';
import './Favorites.css';
import axios from '../api/axios';

const Favourites = () => {
  const [favouriteBooks, setFavouriteBooks] = useState([]);

  useEffect(() => {
    const fetchFavourites = async () => {
      try {
        const res = await axios.get('/user/favourites');
        setFavouriteBooks(res.data);
      } catch (error) {
        alert(`❌ Failed to fetch favourites: ${error.response?.data?.message || error.message}`);

      }
    };
    fetchFavourites();
  }, []);

  return (
    <div className="favourites-container">
      <h1>Favourites</h1>
      {favouriteBooks.length === 0 ? (
        <p>No favourite books yet. ❤️</p>
      ) : (
        <div className="book-grid">
          {favouriteBooks.map((book) => (
            <div className="book-card" key={book._id || book.id}>
              <img src={book.thumbnail || ''} alt={book.title} className="book-image" />
              <h3>{book.title}</h3>
              <p>{book.authors?.join(', ') || 'Unknown Author'}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favourites;
