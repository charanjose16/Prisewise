// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Detail from './components/Detail';
import Mobiles from './components/Mobiles';
import Lapdetail from './components/Lapdetail';  
import Laptops from './components/Laptops';
import Televisions from './components/Televisions';
import Teledetail from './components/Teledetail';
import Fridgedetail from './components/Fridgedetail';
import Fridge from './components/Fridge';
import Earphones from './components/Earphones';
import Eardetail from './components/Eardetail';
import Tablets from './components/Tablets';
import Tabdetail from './components/Tabdetail';
import Notifications from './components/Notifications';
import Profile from './components/Profile';
import Recent from './components/Recent';
import Viewall from './components/Viewall';
import Contact from './components/Contact';
import Rate from './components/Rate';
import { About } from './components/About';
import {AuthProvider} from './features/context/authContext';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <AuthProvider
      value={{ isLoggedIn, setIsLoggedIn, currentUser, setCurrentUser }}
    >
        <Routes>
         <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path='/home'  element={<Home/>} />
          {/* <Route path='/detail/:id'  element={<Detail/>} /> */}
          <Route path='/detail'  element={<Detail/>} />
          <Route path='/mobiles'  element={<Mobiles/>} />
          <Route path='/lapdetail'  element={<Lapdetail/>} />
          <Route path='/laptops'  element={<Laptops/>} />
          <Route path='/televisions'  element={<Televisions/>} />
          <Route path='/teledetail'  element={<Teledetail/>} />
          <Route path='/fridge'  element={<Fridge/>} />
          <Route path='/fridgedetail'  element={<Fridgedetail/>} />
          <Route path='/earphones'  element={<Earphones/>} />
          <Route path='/eardetail'  element={<Eardetail/>} />
          <Route path='/tablets'  element={<Tablets/>} />
          <Route path='/tabdetail'  element={<Tabdetail/>} />
          <Route path='/notifications'  element={<Notifications/>} />
          <Route path='/Profile'  element={<Profile/>} />
          <Route path='/recent'  element={<Recent/>} />
          <Route path='/viewall'  element={<Viewall/>} />
          <Route path='/contact'  element={<Contact/>} />
          <Route path='/rate'  element={<Rate/>} />
          <Route path='/about'  element={<About/>} />


        </Routes>
        </AuthProvider>
  );
}

export default App;
