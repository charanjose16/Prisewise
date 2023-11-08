import React from 'react'
import  { useEffect, useState } from 'react'
import "./Mobiles.css"
import { Link } from 'react-router-dom';
import { getFridge } from '../features/firebase/fridgeDB';
const Fridge = () => {
  const [fridge,setFridge]=useState(null)
  
    const getFridgeData = async() => {
      const res = await getFridge();
      setFridge(res)
    }
  
    console.log(fridge)
    useEffect(()=>{
      getFridgeData()
    },[])
  return (
    <div>
    <div className="container-fluid">
      <div className='row mob-tit'>
      <Link to={'/home'} className="col-6"><i class="fa-solid fa-house fa-xl"></i></Link>
        <div className='col-6'><h4 className='mob-tit mob'>FRIDGE</h4></div>
      </div> 
    </div>
    <div className="container-fluid mobiles">
    {fridge?.map(data => (
        <div className="row">
          <Link to={'/detail'} state={data} className="col-4">
          <img className="main-img fri1 " src={data.image} width="100" height="200"  alt="Apple iPhone XR" />
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
          </div>
          <hr className='mobs-hr'></hr>
          </div>
          ))}
          </div>




          
       
    </div>
  )
}
export default Fridge