import React from 'react'
import './Coupons.css'
import {Link} from "react-router-dom";
export const Coupons = () => {
  return (
    <div>
        <div className="container-fluid">
      <div className='row mob-tit'>
      <Link to={'/home'} className="col-5"><i class="fa-solid fa-house fa-xl"></i></Link>
        <div className='col-6'><h4 className='mob-tit mob coup'>MY COUPONS</h4></div>
      </div> 
    </div>
    <div className="container-fluid">
        <div className="row coup">
          <div className="col-8 coup">
          <img className="coup" src='amazon.jpg' height="150" width="150"></img>
          <h5 className='coup'>Amazon Gift Coupon</h5>
          
          </div>
          
          <div className='col-3 coup '>
          <img className="" src='coup1.png' height='150' width='150'></img>
          <h5 className='coup-code'>Copy Coupon code</h5>
          
          </div>
          </div>
    </div>
    <div className="container-fluid">
        <div className="row coup">
          <div className="col-8 coup">
          <img className="coup-flip" src='flipkart.png' height="90" width="160"></img>
          <h5 className='coup-flip'>Flipkart Gift Coupon</h5>
          
          </div>
          
          <div className='col-3 coup '>
          <img className="" src='coup1.png' height='150' width='150'></img>
          <h5 className='coup-code'>Copy Coupon code</h5>
          
          </div>
          </div>
    </div>
    </div>
  )
}
export default Coupons;
