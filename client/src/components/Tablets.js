import React from 'react'
import "./Mobiles.css"
import  { useEffect, useState } from 'react'
import { getTablets } from '../features/firebase/tabletsDB';
import { Link } from 'react-router-dom';
const Tablets = () => {
  const [tablets,setTablets]=useState(null)
  
  const getTabletsData = async() => {
    const res = await getTablets();
    setTablets(res)
  }

  console.log(tablets)
  useEffect(()=>{
    getTabletsData()
  },[])
  return (
    <div>
    <div className="container-fluid">
      <div className='row mob-tit'>
      <Link to={'/home'} className="col-6"><i class="fa-solid fa-house fa-xl"></i></Link>
        <div className='col-6'><h4 className='mob-tit mob'>TABLETS</h4></div>
      </div> 
    </div>
    <div className="container-fluid mobiles">
    {tablets?.map(data => (
        <div className="row">
          <Link to={'/detail'} state={data} className="col-4">
          <img className="main-img tab1 " src={data.image} width="250" height="180"  alt="Apple iPhone XR" />
          </Link>
          <div className='col-4'>
          <h4 className='title-text'>{data.name}</h4>
          <ul type="circle">
            <li>{data["1"]}</li>
            <li>{data["2"]}</li>
            <li>{data["3"]}</li>
            <li>{data["4"]}</li>
          </ul>
          </div>
          <div className='col-4'>
          <h4 className='brand-price'>Rs.{data.best_price}</h4>
          <div className='row stars mobiles'>
           <div className='col-1'>
            <i class="fa fa-star"></i>
            </div>
            <div className='col-1'>
            <i class="fa fa-star"></i>
            </div>
            <div className='col-1'>
            <i class="fa fa-star"></i>
            </div>
            <div className='col-1'>
            <i class="fa fa-star"></i>
            </div>
            <div className='col-1'>
            <i class="fa fa-star"></i>
            </div>
            </div>
          </div><hr className='mobs-hr'></hr>
          </div>
          ))}
          </div>


          
       
    </div>
  )
}
export default Tablets