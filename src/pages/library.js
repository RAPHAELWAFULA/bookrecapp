import React, { useEffect, useState } from 'react';
import './library.css';

const themes = ['fiction', 'science', 'history', 'technology'];

const Library = ({ onLikeBook }) => {
  const [booksByTheme, setBooksByTheme] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      const newBooks = {};

      for (const theme of themes) {
        try {
          const res = await fetch(
            `https://www.googleapis.com/books/v1/volumes?q=subject:${theme}&maxResults=8`
          );
          const data = await res.json();
          newBooks[theme] = data.items || [];
        } catch (err) {
          console.error(`Error fetching books for theme: ${theme}`, err);
          newBooks[theme] = [];
        }
      }

      setBooksByTheme(newBooks);
      setLoading(false);
    };

    fetchBooks();
  }, []);

  if (loading) return <div className="loading">📖 Loading books...</div>;

  return (
    <div className="library-container">
      <h1>Library</h1>
      {themes.map((theme) => (
        <div key={theme} className="theme-section">
          <h2 className="theme-title">{theme.toUpperCase()}</h2>
          <div className="book-grid">
            {booksByTheme[theme]?.map((book) => {
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
                  <button
                    className="like-button"
                    onClick={() => onLikeBook(book)}
                  >
                    ❤️ Like
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Library;
