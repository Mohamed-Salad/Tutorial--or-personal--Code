import React, { useState } from 'react';
import './Login.css';
import Navbar from './Navbar'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Dummy form submission handler (no backend)
  const handleLogin = (e) => {
    e.preventDefault();
    // For now, just log the values (or handle them however you want)
    console.log('Logging in with:', { email, password });
    // You could also show an alert, redirect, or just reset the form, etc.
  };

  return (
    <div className="Navbar">
        <Navbar />
        <div className="Background"></div>    
    <div className="login-container">
      
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input 
            type="username"
            id="username"
            placeholder="Enter your username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input 
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="login-btn">
          Log In
        </button>
      </form>
    </div>
    </div>
  );
};

export default Login;
