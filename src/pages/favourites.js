import React from 'react';
import './Favorites.css';

const Favourites = ({ likedBooks = [] }) => (
  <div className="favourites-container">
    <h1>Favourites</h1>
    {likedBooks.length === 0 ? (
      <p>No favourite books yet. ❤️</p>
    ) : (
      <div className="book-grid">
        {likedBooks.map((book) => {
          const info = book.volumeInfo;
          return (
            <div className="book-card" key={book.id}>
              <img
                src={info.imageLinks?.thumbnail || ''}
                alt={info.title}
                className="book-image"
              />
              <h3>{info.title}</h3>
              <p>{info.authors?.join(', ') || 'Unknown Author'}</p>
            </div>
          );
        })}
      </div>
    )}
  </div>
);

export default Favourites;
