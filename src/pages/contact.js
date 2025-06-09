import React, { useState } from 'react';
import '../App.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    sex: '',
    comments: '',
    rating: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks, ${formData.name}! You rated us ${formData.rating} stars.`);
    setFormData({
      name: '',
      email: '',
      age: '',
      sex: '',
      comments: '',
      rating: ''
    });
  };

  return (
    <div className='container'>
    <div className="contact-container">
      <h2 style={{backgroundColor:"transparent"}}>Contact Us, we will appreciate your feedback</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="contact-input"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="contact-input"
        />
        <input
          type="number"
          name="age"
          placeholder="Your Age"
          value={formData.age}
          onChange={handleChange}
          required
          className="contact-input"
        />
        <select
          name="sex"
          value={formData.sex}
          onChange={handleChange}
          required
          className="contact-input"
        >
          <option value="">Select Sex</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Prefer not to say</option>
        </select>
        <textarea
          name="comments"
          placeholder="Your Comments"
          value={formData.comments}
          onChange={handleChange}
          required
          className="contact-textarea"
        />
        <select
          name="rating"
          value={formData.rating}
          onChange={handleChange}
          required
          className="contact-input"
        >
          <option value="">Rate Us (1–5)</option>
          <option value="1">★☆☆☆☆</option>
          <option value="2">★★☆☆☆</option>
          <option value="3">★★★☆☆</option>
          <option value="4">★★★★☆</option>
          <option value="5">★★★★★</option>
        </select>
        <button type="submit" className="contact-button">Send Message</button>
      </form>
    </div>
    </div>
  );
}

export default Contact;
