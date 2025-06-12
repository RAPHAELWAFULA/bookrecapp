import React, { useEffect, useState } from 'react';
import './MyBooks.css';

const MyBooks = () => {
  const [myBooks, setMyBooks] = useState([]);
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem('myBooks')) || [];
    setMyBooks(storedBooks);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const removeBook = (indexToRemove) => {
    const updatedBooks = myBooks.filter((_, index) => index !== indexToRemove);
    setMyBooks(updatedBooks);
    localStorage.setItem('myBooks', JSON.stringify(updatedBooks));
  };

  return (
    <div className="my-books-container">
      <h2>My Books</h2>
      {myBooks.length === 0 ? (
        <p className="no-books-message">You have no saved books.</p>
      ) : (
        <div className="book2-grid">
          {myBooks.map((book, index) => (
            <div key={index} className="book-card">
              <img src={book.image} alt={book.title} />
              <h3>{book.title}</h3>
              <p>By: {book.author}</p>
              <p>Rating: {book.rating} ★</p>
              <button className="remove-button" onClick={() => removeBook(index)}>
                ❌ Remove
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Scroll to Top Button */}
      {showScroll && (
      <button
      className={`scroll-to-top ${showScroll ? 'show' : ''}`}
      onClick={scrollToTop}
    >
      ⬆️
    </button>
    
      )}
    </div>
  );
};

export default MyBooks;
