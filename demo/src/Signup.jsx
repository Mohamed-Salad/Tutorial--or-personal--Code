import React from 'react';
import './Signup.css';
import Navbar from './Navbar';

const Signup = () => {
  return (
    <div className="Nav">
        <Navbar />
    <div className="Background"></div>   
    <div className="signup-container">
      <h2>Create an Account</h2>
      <form className="signup-form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input 
            type="text" 
            id="username" 
            placeholder="Enter your username" 
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            placeholder="Enter your email" 
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password" 
            placeholder="Enter your password" 
          />
        </div>

        <button type="submit" className="signup-btn">
          Sign Up
        </button>
      </form>
    </div>
    </div>
  );
};

export default Signup;
