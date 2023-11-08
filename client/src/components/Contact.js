import React from 'react'
import './Contact.css'
import {Link} from 'react-router-dom';

const Contact = () => {
  return (
    <div>
        <div className="container-fluid">
      <div className='row mob-tit'>
      <Link to={'/home'} className="col-5"><i class="fa-solid fa-house fa-xl"></i></Link>
        <div className='col-7'><h4 className='mob-tit mob'>CONTACT US</h4></div>
      </div> 
    </div>
    <div class="form-group cont" >
  <label className="cont" for="comment">Write to us:</label>
  <textarea class="form-control" rows="15" id="comment"></textarea>
   </div>
   <button type="button" class="btn btn-primary btn-lg btn-block">SUBMIT</button>
    
    </div>
  )
}

export default Contact