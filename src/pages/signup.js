import React, { useState } from 'react';
import './signup.css';
import { useNavigate } from 'react-router-dom';
import axios from '../api/axios'; // or from your custom axios.js instance

const SignUp = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('❌ Passwords do not match!');
      return;
    }

    try {
      const res = await axios.post('/signup', {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });
      

      localStorage.setItem('token', res.data.token); // ✅ Moved here inside try block

      alert(`✅ ${res.data.message} Welcome, ${formData.name}!`);
      setIsAuthenticated(true);
      navigate('/library');
    } catch (err) {
      const errorMsg = err.response?.data?.message || 'Signup failed';
      alert(`❌ ${errorMsg}`);
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2 className="signup-title">Create Account</h2>

        <label style={{backgroundColor:"transparent"}}>Full Name</label>
        <input
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
        />

        <label style={{backgroundColor:"transparent"}}>Email</label>
        <input
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
        />

        <label style={{backgroundColor:"transparent"}}>Password</label>
        <div className="password-field" style={{backgroundColor:"transparent"}}>
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            required
            value={formData.password}
            onChange={handleChange}
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="toggle-password"
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>

        <label style={{backgroundColor:"transparent"}}>Confirm Password</label>
        <input
          type={showPassword ? 'text' : 'password'}
          name="confirmPassword"
          required
          value={formData.confirmPassword}
          onChange={handleChange}
        />

        <button type="submit" className="signup-button">Sign Up</button>

        <p className="signin-link" style={{backgroundColor:"transparent"}}>
          Already have an account? <a href="/signin" style={{backgroundColor:"transparent"}}>Sign In</a>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
