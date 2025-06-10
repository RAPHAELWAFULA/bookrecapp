import React from 'react';
import './Favorites.css';

const Favorites = ({ favoriteBooks = [], onRemoveFavorite }) => {
    if (favoriteBooks.length === 0) {
      return <div className="no-favorites">No favorite books yet. ❤️</div>;
    }
  
    return (
      <div className="favorites-container">
        <h2 className="favorites-title">My Favorite Books</h2>
        <div className="favorites-grid">
          {favoriteBooks.map((book) => (
            <div className="favorite-card" key={book.id}>
              <img src={book.cover} alt={book.title} className="book-cover" />
              <h3>{book.title}</h3>
              <p>{book.author}</p>
              <button
                className="remove-button"
                onClick={() => onRemoveFavorite(book.id)}
              >
                💔 Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
export default Favorites;
