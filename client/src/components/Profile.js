import React, { useContext } from 'react'
import './Profile.css';
import {Link} from 'react-router-dom';
import AuthContext from '../features/context/authContext';

const Profile = () => {
  const { currentUser, setCurrentUser, isLoggedIn, setIsLoggedIn } =  useContext(AuthContext);

  console.log(currentUser)

  return (
    <div>
    <div className="container-fluid">
      <div className='row mob-tit'>
      <Link to={'/home'} className="col-5"><i class="fa-solid fa-house fa-xl"></i></Link>
        <div className='col-7'><h4 className='mob-tit mob pro'>PROFILE</h4></div>
      </div> 
    </div>
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
            <h5 className='prof'>{currentUser?.name}</h5>
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
            <h5 className='prof'>{currentUser?.email}</h5>
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
            <h5 className='prof'>+91 {currentUser?.phone}</h5>
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