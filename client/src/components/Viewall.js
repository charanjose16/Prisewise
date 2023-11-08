import React from 'react'
import './Viewall.css';
import { Link } from "react-router-dom";
const Viewall = () => {
  return (
    <div>
        <div className="container-fluid">
      <div className='row mob-tit'>
      <Link to={'/home'} className="col-5"><i class="fa-solid fa-house fa-xl"></i></Link>
        <div className='col-7'><h4 className='mob-tit mob'>CATEGORIES</h4></div>
      </div> 
    </div>

   <div className="container-fluid">
        <div className="row not">
          <div className="col-3 set cat">
          <Link to={'/mobiles'} className="col-4">
             <div className='row'>
                 <div className='col-3 '>
                 <img className="recent-pic" src='https://i.imgur.com/Aj0L4Wa.jpg' width="150" height="150"  alt="Apple iPhone XR"/>
                 </div>
                 <div className='col-6'>
                <h4 className='cat-tag'>Mobiles</h4>
                 </div>

             </div>
            

             </Link>
          </div>

          <div className="col-3 set cat">
          <Link to={'/earphones'} className="col-4">
             <div className='row'>
                 <div className='col-3 '>
                 <img className="main-img fri1 " src='e1.png' width="115" height="150"  alt="Apple iPhone XR" />
                 </div>
                 <div className='col-6'>
                <h4 className='cat-tag'>Earphones</h4>
                 </div>

             </div>
            

             </Link>
          </div>

          <div className="col-3 set cat">
          <Link to={'/laptops'} className="col-4">
             <div className='row'>
                 <div className='col-3 '>
                 <img className='rec-lap' src='lap1.png' width="180" height="150"  alt="Apple iPhone XR"/>
                 </div>
                 <div className='col-6'>
                <h4 className='cat-tag'>Laptops</h4>
                 </div>

             </div>
            

             </Link>
          </div>


          <div className="col-3 set cat two">
          <Link to={'/tablets'} className="col-4">
             <div className='row'>
                 <div className='col-3 '>
                 <img className="rec-lap " src='tab1.jpg' width="160" height="150"  alt="Apple iPhone XR" />
                 </div>
                 <div className='col-6'>
                <h4 className='cat-tag'>Tablets</h4>
                 </div>

             </div>
            

             </Link>
          </div>

          <div className="col-3 set cat two">
          <Link to={'/televisions'} className="col-4">
             <div className='row'>
                 <div className='col-3 '>
                 <img className="main-img lap1 tv" src='tv1.png' width="170" height="130"  alt="Apple iPhone XR"/>
                 </div>
                 <div className='col-6'>
                <h4 className='cat-tag'>Televisions</h4>
                 </div>

             </div>
            

             </Link>
          </div>

          <div className="col-3 set cat two">
          <Link to={'/fridge'} className="col-4">
             <div className='row'>
                 <div className='col-3 '>
                 <img className="main-img fri1 fri" src='fri1.png' width="77" height="150"  alt="Apple iPhone XR" />
                 </div>
                 <div className='col-6'>
                <h4 className='cat-tag'>Fridge</h4>
                 </div>

             </div>
            

             </Link>
          </div>


          </div>
    </div>

    </div>
  )
}

export default Viewall