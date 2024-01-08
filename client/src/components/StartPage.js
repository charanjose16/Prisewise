import React from 'react'
import './StartPage.css';
import { Link } from 'react-router-dom';

const StartPage = () => {
  return (
    <div className='start-container'>
        <img className='start-bgs' src='startpage.jpg' alt="" height="100%" width="100%"/>

        <div><h1 className='start-head'>PriceWise </h1></div>
        <div><p className="start-p"> PricesWise is comparing prices across various e-commerce platforms has never been easier.</p></div>
      <div className='start-log'>
        <img src="logo.png" alt="" width="120" height="160" />
       
      </div>
        <div class="container button-cont">
           <div class="row">
              <div class="col-2 btn-1">
              <Link to={'/login'}>
                  <button className='start-btn' >USER LOGIN</button></Link>
                </div>
                <div class="col-2 btn-2">
                <Link to={'/admin'}>
                  <button className='start-btn'>ADMIN LOGIN</button></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default StartPage