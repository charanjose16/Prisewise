import React, { useContext, useState } from 'react';
import './Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { loginWithEmailAndPassword } from '../api/api';
import AuthContext from '../features/context/authContext';

const Login = () => {
  const navigate = useNavigate();
  const {setIsLoggedIn,setCurrentUser} =useContext(AuthContext);


  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  // Define a function to handle changes in the form inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Define a function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await loginWithEmailAndPassword(email,password);
    if(res.success){
        setIsLoggedIn(true)
        setCurrentUser(res.user)
        navigate('/home');
    }
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
            id="email"
            name="email"
            placeholder='Email'
            value={email}
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
      <div className='reg'>
        Don't have an account?<a href="/signup" className='reg'> Sign up here.</a>
      </div>
      
    </div>
  );
};

export default Login;
