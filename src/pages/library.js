import React, { useEffect, useState } from 'react';
import './library.css';
import { useNavigate } from 'react-router-dom';

const themes = [
  'fiction', 'science', 'history', 'technology', 'art',
  'travel', 'biography', 'business', 'health', 'romance',
  'sports', 'cooking', 'love', 'horse','music','religion and doctrines','legends and myths','horror','disney books'
];

const Library = ({ onLikeBook }) => {
  const [booksByTheme, setBooksByTheme] = useState({});
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [bookSearchTerm, setBookSearchTerm] = useState('');
  const [ratings, setRatings] = useState({});
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      const newBooks = {};

      for (const theme of themes) {
        try {
          const res = await fetch(
            `https://www.googleapis.com/books/v1/volumes?q=subject:${theme}&maxResults=40`
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

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRatingChange = (bookId, value) => {
    setRatings((prev) => ({ ...prev, [bookId]: value }));
  };

  if (loading) return <div className="loading">📖 Loading books...</div>;

  const filteredThemes = themes.filter((theme) =>
    theme.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="library-container">
      <h1>Library</h1>

      <input
        type="text"
        placeholder="Search by theme..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />

      <input
        type="text"
        placeholder="Search by book title..."
        value={bookSearchTerm}
        onChange={(e) => setBookSearchTerm(e.target.value)}
        className="search-bar"
        style={{ marginTop: '10px' }}
      />

      {filteredThemes.map((theme) => {
        const filteredBooks = booksByTheme[theme]?.filter((book) =>
          book.volumeInfo?.title?.toLowerCase().includes(bookSearchTerm.toLowerCase())
        );

        if (!filteredBooks || filteredBooks.length === 0) return null;

        return (
          <div key={theme} className="theme-section">
            <h2 className="theme-title">{theme.toUpperCase()}</h2>
            <div className="book-grid">
              {filteredBooks.map((book) => {
                const info = book.volumeInfo;
                const bookId = book.id;
                return (
                  <div className="book-card" key={bookId}>
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
                    <select
                      name="rating"
                      value={ratings[bookId] || ''}
                      onChange={(e) => handleRatingChange(bookId, e.target.value)}
                      className="contact-input"
                      style={{ color: 'black', marginTop: '10px' }}
                    >
                      <option value="">Rate this book (1–5)</option>
                      <option value="1">★☆☆☆☆</option>
                      <option value="2">★★☆☆☆</option>
                      <option value="3">★★★☆☆</option>
                      <option value="4">★★★★☆</option>
                      <option value="5">★★★★★</option>
                    </select>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}

      {/* Scroll to Top Button */}
      {showScroll && (
        <button className="scroll-to-top show" onClick={scrollToTop}>
          ⬆️
        </button>
      )}
    </div>
  );
};

export default Library;
