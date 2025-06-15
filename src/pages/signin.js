import React, { useState } from 'react';
import './signin.css'; // Ensure this is in the same folder or adjust the path
// import { Router } from 'react-router-dom';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    // Add authentication logic here
  };

  const handleGoogleSignIn = () => {
    console.log('Sign in with Google clicked');
    // Integrate with Google OAuth here
  };

  return (
    
        
    <div className="signin-container">
      <form className="signin-form" onSubmit={handleSubmit}>
        <h2 className="signin-title">Sign In</h2>

        <label>Email</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password</label>
        <div className="password-field">
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

        <button type="submit" className="signin-button"> Sign In</button>

        <div className="google-signin-container">
          <div className="divider">or</div>
          <button type="button" className="google-button" onClick={handleGoogleSignIn}>
            <img
              src="https://developers.google.com/identity/images/g-logo.png"
              alt="Google"
              className="google-logo"
            />
            Sign in with Google
          </button>
        </div>

        <p className="signup-link">
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
      </form>
    </div>
    
  );
};

export default SignIn;
