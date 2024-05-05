import React, { useEffect, useState } from 'react'
import { dummyData } from '../data/data'
import "./AddProducts.css"

const BestPrice = () => {
    
  return (
    <div>
    <div style={{display:"flex",justifyContent:"center",height:"40px",fontFamily:"sans-serif",marginTop:"30px"}}>
        <h2 style={{fontWeight:"600"}}>
            Best Price for the Day
        </h2>
    </div>
{dummyData.map((data)=>(
   <div className='bp-main-div'>
    <div className='bp-det'>
        <h3 style={{width:"600px",fontFamily:"sans-serif"}}>{data.title}</h3>
        <img src={data.img} width="300px" height="200px" style={{objectFit:"contain",mixBlendMode:"multiply"}}></img>
        <h3 style={{fontFamily:"sans-serif"}}>Best Price : <span>Rs.{data.price}</span></h3>
    </div>
    </div>

))}

    </div>
  )
}

export default BestPrice