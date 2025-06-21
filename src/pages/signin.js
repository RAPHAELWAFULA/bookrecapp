import React, { useState } from 'react';
import './signin.css';
import { useNavigate } from 'react-router-dom';
import axios from '../api/axios'; // this must have baseURL set to /api/auth

const SignIn = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('/signin', { email, password }); // relative to baseURL

      localStorage.setItem('token', res.data.token);
      setIsAuthenticated(true);

      alert(`📚 Welcome back, ${res.data.name}! Bookrac missed you!`);
      navigate('/library');
    } catch (error) {
      const errorMsg = error.response?.data?.message || 'Signin failed';
      alert(`❌ ${errorMsg}`);
    }
  };

  return (
    <div className="signin-container">
      <form className="signin-form" onSubmit={handleSubmit}>
        <h2 className="signin-title" >Sign In</h2>

        <label
        style={{backgroundColor:"transparent"}}>Email</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label style={{backgroundColor:"transparent"}}>Password</label>
        <div className="password-field" style={{backgroundColor:"transparent"}}>
          <input
          
            type={showPassword ? 'text' : 'password'}
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="show-password"
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>

        <button type="submit" className="signin-button">Sign In</button>

        <p className="signup-link"style={{backgroundColor:"transparent"}}>
          Don't have an account? <a href="/signup" style={{backgroundColor:"transparent"}}>Sign up</a>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
