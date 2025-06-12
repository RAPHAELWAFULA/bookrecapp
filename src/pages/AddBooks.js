import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddBooks.css';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [rating, setRating] = useState('');
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => setImage(reader.result);
    if (file) reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = { title, author, rating, image };

    const savedBooks = JSON.parse(localStorage.getItem('myBooks')) || [];
    savedBooks.push(newBook);
    localStorage.setItem('myBooks', JSON.stringify(savedBooks));

    navigate('/my-books');
  };

  return (
    <div className="add-book-container">
      <h2>Add a New Book</h2>
      <form className="book-form" onSubmit={handleSubmit}>
        <label>
          Book Title:
          <input value={title} onChange={(e) => setTitle(e.target.value)} required />
        </label>
        <label>
          Author Name:
          <input value={author} onChange={(e) => setAuthor(e.target.value)} required />
        </label>
        <label>
          Rating:
          <select value={rating} onChange={(e) => setRating(e.target.value)} required>
            <option value="">Select</option>
            <option value="1">★☆☆☆☆</option>
            <option value="2">★★☆☆☆</option>
            <option value="3">★★★☆☆</option>
            <option value="4">★★★★☆</option>
            <option value="5">★★★★★</option>
          </select>
        </label>
        <label>
          Upload Image:
          <input type="file" accept="image/*" onChange={handleImageUpload} required />
        </label>
        <button type="submit">Save Book</button>
      </form>
    </div>
  );
};

export default AddBook;
