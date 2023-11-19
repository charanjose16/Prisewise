import React from 'react'
import './Recent.css';
import { Link } from 'react-router-dom';
const Recent = () => {
  return (
    <div>
    
    <div className="container-fluid">
      <div className='row mob-tit'>
      <Link to={'/home'} className="col-5"><i class="fa-solid fa-house fa-xl"></i></Link>
        <div className='col-7'><h4 className='mob-tit mob'>RECENT SEARCHES</h4></div>
      </div> 
    </div>

   <div className="container-fluid">
        <div className="row not">
          <div className="col-5 set">
          <Link to={'/teledetail'} className="col-4">
             <div className='row'>
                 <div className='col-3 '>
                 <img className="recent-pic" src='tv1.png' width="170" height="150"  alt="Apple iPhone XR"/>
                 </div>
                 <div className='col-4 recent'>
                <ul classname='recent'>
                    <li className='rec-li'>Mi Tv LED 50"</li>
                    <li className='cost'> Rs.65,499</li>
                </ul>
             </div>
                 <div className='col-3'>
                <p className='recent-tag'>21 mins ago</p>
                 </div>
                 <div className='col-2'>
                 <i className="fa-regular fa-clock fa-xl"></i>
                 </div>

             </div>
            

             </Link>
          </div>
          
          <div className='col-5 set'>
          <Link to={'/eardetail'} className="col-4">
          <div className='row'>
                 <div className='col-3 '>
                 <img className="main-img  " src='e1.png' width="115" height="150"  alt="Apple iPhone XR" />
                 </div>
                 <div className='col-4 recent'>
                <ul classname='recent'>
                    <li className='rec-li'>Beats Solo 2</li>
                    <li className='cost'>Rs.15,400</li>
                </ul>
             </div>
                 <div className='col-3'>
                <p className='recent-tag'>40 mins ago</p>
                 </div>
                 <div className='col-2'>
                 <i className="fa-regular fa-clock fa-xl"></i>
                 </div>

             </div>
             </Link>
          </div>
          </div>
    </div>


    <div className="container-fluid">
        <div className="row not">
          <div className="col-5 set recent">
          <Link to={'/lapdetail'} >
             <div className='row'>
                 <div className='col-3 '>
                 <img className='rec-lap' src='lap1.png' width="180" height="150"  alt="Apple iPhone XR"/>
                 </div>
                 <div className='col-4 recent'>
                <ul classname='recent'>
                    <li className='rec-li'>HP i3 10th Gen 4GB</li>
                    <li className='cost'>Rs.65,400</li>
                </ul>
             </div>
                 <div className='col-3'>
                <p className='recent-tag'>1 day ago</p>
                 </div>
                 <div className='col-2'>
                 <i className="fa-regular fa-clock fa-xl"></i>
                 </div>

             </div>
            
             </Link>
          
          </div>
          
          <div className='col-5 set recent'>
          <Link to={'/tabdetail'} >
          <div className='row'>
                 <div className='col-3 '>
                 <img className="rec-lap " src='tab1.jpg' width="160" height="150"  alt="Apple iPhone XR" />
                 </div>
                 <div className='col-4 recent'>
                <ul classname='recent'>
                    <li className='rec-li'>Samsung Galaxy A8</li>
                    <li className='cost'>Rs.8,999</li>
                </ul>
             </div>
                 <div className='col-3'>
                <p className='recent-tag'>2 days ago</p>
                 </div>
                 <div className='col-2'>
                 <i className="fa-regular fa-clock fa-xl"></i>
                 </div>

             </div>
             </Link>
          </div>
          </div>
    </div>



    </div>
  )
}

export default Recent