// components/Login.js
import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const { username, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to your server's login endpoint
      const response = await axios.post('http://localhost:5000/login', {
        username,
        password,
      });

      // Handle success, display a success message, or redirect the user
      console.log('User logged in successfully:', response.data);
    } catch (error) {
      // Handle errors, such as displaying error messages to the user
      console.error('Error logging in:', error.response.data);
    }
  };

  return (
    <div className='loginbox'>
      <div className='logobox'>
        <img src="logo.png" alt="" width="120" height="160" />
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
