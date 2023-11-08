import React from 'react'
import './About.css'
import { Link } from 'react-router-dom'
export const About = () => {
  return (
    <div>
        <div className="container-fluid">
      <div className='row mob-tit'>
      <Link to={'/home'} className="col-6"><i class="fa-solid fa-house fa-xl"></i></Link>
        <div className='col-6'><h4 className='mob-tit mob'>ABOUT US</h4></div>
      </div> 
    </div>
    </div>
  )
}
