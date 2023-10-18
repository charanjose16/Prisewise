import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const { username, password } = formData;

  // Define a function to handle changes in the form inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Define a function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can add code to handle form submission, such as making an API request to validate the user.

    // After successful login, redirect to the "home.js" page
    navigate('/Home');
  };

  return (
    <div>
      <div className='logobox'>
        <img className="logoimg" src="logo.png" alt="" width="120" height="160" />
        <h3>PriceWise</h3>
      </div>
      <h2 className='login'>LOGIN</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            placeholder='USERNAME'
            value={username}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            placeholder='PASSWORD'
            value={password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary log-sign-button">
          LOGIN
        </button>
      </form>
    </div>
  );
};

export default Login;
