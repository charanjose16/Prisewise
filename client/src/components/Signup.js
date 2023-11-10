// components/Signup.js
import React, { useContext, useState } from 'react';
import axios from 'axios';
import './Signup.css';
import { registerWithEmailAndPassword } from '../api/api';
import AuthContext from '../features/context/authContext';
import { useNavigate } from 'react-router-dom';
const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    phone: '',
  });

  const navigate = useNavigate()

  const {setIsLoggedIn,setCurrentUser} = useContext(AuthContext)

  const { username, email,phone, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await registerWithEmailAndPassword(formData);
      if(res.success){
          setCurrentUser(res.user)
          setIsLoggedIn(true)
          navigate('/login')
          console.log(res.user)
      }
  } catch (error) {
      console.error(error.message)
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
            placeholder='ENTER USERNAME'
            value={username}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="phone"
            name="phone"
            placeholder='ENTER PHONE NUMBER'
            value={phone}
            maxLength={10}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder='ENTER EMAIL'
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
            placeholder='ENTER 6 DIGIT PASSWORD'
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
