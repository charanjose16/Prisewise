import React from 'react'
import './Notifications.css';
import { Link } from 'react-router-dom';
const Notifications = () => {
  return (
    <div>
    <div className='not-header'>
      <h4 className='mob-tit not'>NOTIFICATIONS</h4>
    </div>

   <div className="container-fluid">
        <div className="row not">
          <div className="col-8 set">
          <h5 className='not-det'>Price Drop on all Iphones</h5>
          <p>Apple Festive Offer now in India: iPhone 15, Mac, iPad and more 
          available with up to Rs 10,000 discount.</p>
          </div>
          
          <div className='col-3 set'>
          <img className="not-img" src='iphones.png' height='160' width='220'></img>
          
          </div>
          </div>
    </div>


    <div className="container-fluid">
        <div className="row not">
          <div className="col-8 set">
          <h5 className='not-det'>Sensational 499 Sale Extravaganza!</h5>
          <p>All for just Rs.499! It's a once-in-a-lifetime chance to elevate your lifestyle without emptying your wallet.</p>
          </div>
          
          <div className='col-3 set'>
          <img className="not-img" src='not2.png' height='160' width='200'></img>
          
          </div>
          </div>
    </div>
   


    <div className="container-fluid">
        <div className="row not">
          <div className="col-8 set">
          <h5 className='not-det'>Gadgets Spectacular: Save 35% on Innovation!</h5>
          <p>Embrace the future today and redefine your tech-savvy lifestyle at an unbeatable 35% off.</p>
          </div>
          
          <div className='col-3 set'>
          <img className="not-img" src='not3.png' height='160' width='200'></img>
          
          </div>
          </div>
    </div>


    <div className="container-fluid">
        <div className="row not">
          <div className="col-8 set">
          <h5 className='not-det'>Affordable Finds under $699</h5>
          <p>Stop by our store or browse our online selection today to find incredible products priced under $699.Shop smart, save big.</p>
          </div>
          
          <div className='col-3 set'>
          <img className="not-img" src='not4.png' height='160' width='200'></img>
          
          </div>
          </div>
    </div>

    
    
    </div>
  )}
  export default Notifications