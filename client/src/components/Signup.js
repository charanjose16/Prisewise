// components/Signup.js
import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css';
const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const { username,  password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to your server's user registration endpoint
      const response = await axios.post('http://localhost:5000/signup', {
        username,
        password,
      });

      // Handle success, display a success message, or redirect the user
      console.log('User registered successfully:', response.data);
      window.location='/login';
    } catch (error) {
      // Handle errors, such as displaying error messages to the user
      console.error('Error registering user:', error.response.data);
    }
  };

  return (
   
     <div className='signupbox'>
     <div className='logobox'>
      <img className="logoimg" src="logo.png" alt="" width="120" height="160"></img>
      <h3>PriceWise</h3>
     </div>
      <h2 className='signup'>SIGN UP</h2>
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
           SIGNUP
        </button>
      </form>
    </div>
   
  );
};

export default Signup;
