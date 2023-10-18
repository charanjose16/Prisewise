import React from 'react'
import './Profile.css';
const Profile = () => {
  return (
    <div>
        <div className='prof-row'>
            <img className="user" src='user.png' width="100" height="100"></img>
            <h5 className='profile'>Profile Photo</h5>
        </div>
        <div className='container-fluid' >
          <div className='row user'>
            <div className='col profile'>
            <h5 className='prof'>Name</h5>

            </div>
            :
            <div className='col profile'>
            <h5 className='prof'>Charan Joseph</h5>
            </div>
          </div>
        </div>

        <div className='container-fluid' >
          <div className='row user'>
            <div className='col profile'>
            <h5 className='prof'>Email</h5>

            </div>
            :
            <div className='col profile'>
            <h5 className='prof'>Charanjoseph00@gmail.com</h5>
            </div>
          </div>
        </div>


        <div className='container-fluid' >
          <div className='row user'>
            <div className='col profile'>
            <h5 className='prof'>Phone</h5>

            </div>
            :
            <div className='col profile'>
            <h5 className='prof'>+91 7358425020</h5>
            </div>
          </div>
        </div>

        <div className='container-fluid' >
          <div className='row user'>
            <div className='col profile'>
            <h5 className='prof'>Location</h5>

            </div>
            :
            <div className='col profile'>
            <h5 className='prof'>Chenni,Tamilnadu</h5>
            </div>
          </div>
        </div>


    </div>
  )
}

export default Profile