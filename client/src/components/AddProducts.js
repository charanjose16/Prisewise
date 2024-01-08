import React, { useState } from 'react'
import "./AddProducts.css"
import { db } from '../firebase'
import { Link } from 'react-router-dom'
import { addDoc, collection } from 'firebase/firestore'
const AddProducts = () => {

  const [category,setCategory]=useState("")
  const [productName,setProductName]=useState("")
  const [info1,setInfo1]=useState("")
  const [info2,setInfo2]=useState("")
  const [info3,setInfo3]=useState("")
  const [info4,setInfo4]=useState("")
  const [amazon,setAmazon]=useState()
  const [flipkart,setFlipkart]=useState()
  const [snapdeal,setSnapdeal]=useState()
  const [ebay,setEbay]=useState()
  const [best_price,setBestPrice]=useState()
  const [img,setImg]=useState("")
  const [loading,setLoading]=useState(false);

  const handleProductChange = (e) => {
    setCategory(e.target.value)
  }

  const resetData = () => {
    setCategory("")
      setProductName("")
      setInfo1("");
      setInfo2("");
      setInfo3("");
      setInfo4("");
      setAmazon("");
      setFlipkart("");
      setSnapdeal("");
      setEbay("");
      setImg("");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(amazon<snapdeal && amazon < flipkart && amazon < ebay){
      setBestPrice(amazon);
    }else if(flipkart<snapdeal && flipkart < amazon && flipkart < ebay){
      setBestPrice(flipkart);
    }else if (snapdeal<flipkart && snapdeal < amazon && snapdeal < ebay){
      setBestPrice(snapdeal)
    }else{
      setBestPrice(ebay);
    }

    const formData = {
      1:info1,
      2:info2,
      3:info3,
      4:info4,
      amazon,
      flipkart,
      ebay,
      best_price,
      snapdeal,
      name:productName,
      image:img
    }
    try{
      setLoading(true)
      const docRef= await addDoc(collection(db,category),formData)
      resetData();
      setLoading(false)
    }catch(err){
      setLoading(false)
      console.error(err.message)
    }
  }

  return (
    <div>
     <div className='logobox'>
       <img className="logoimg admin" src="logo.png" alt="" width="70" height="90" />
       <h3 className='admin-pw'>PriceWise</h3>
    </div>
    <form >
    <select  className="col-5 add-pr" name="products" id="products" value={category} onChange={handleProductChange} >
          <option className='sp'>Select Product</option>
          <option value="earphones">Earphones</option>
          <option value="fridge">Fridge</option>
          <option value="laptops">Laptops</option>
          <option value="mobiles">Mobiles</option>
          <option value="tablets">Tablets</option>
          <option value="televisons">Televisons</option>
    </select>
        <input  className="col-5 add-pr" placeholder='Product Name' value={productName} onChange={(e)=>setProductName(e.target.value)}/>
        {/* <input className="col-5 add-pr" placeholder='Enter id'/> */}
        <input className="col-5 add-pr" placeholder='Info 1' value={info1} onChange={(e)=>setInfo1(e.target.value)}/>
        <input className="col-5 add-pr" placeholder='Info 2' value={info2} onChange={(e)=>setInfo2(e.target.value)}/>
        <input className="col-5 add-pr" placeholder='Info 3' value={info3} onChange={(e)=>setInfo3(e.target.value)}/>
        <input className="col-5 add-pr" placeholder='Info 4' value={info4} onChange={(e)=>setInfo4(e.target.value)}/>
        <input className="col-5 add-pr" placeholder='Amazon' value={amazon} onChange={(e)=>setAmazon(e.target.value)}/>
        <input className="col-5 add-pr" placeholder='Flipkart' value={flipkart} onChange={(e)=>setFlipkart(e.target.value)}/>
        <input className="col-5 add-pr" placeholder='Snapdeal' value={snapdeal} onChange={(e)=>setSnapdeal(e.target.value)}/>
        <input className="col-5 add-pr" placeholder='Ebay' value={ebay} onChange={(e)=>setEbay(e.target.value)} />
        {/* <input className="col-5 add-pr" placeholder='Best Price' value={best_price} onChange={(e)=>setBestPrice(e.target.value)}/> */}
        <input className="col-5 add-pr" placeholder='Image' value={img} onChange={(e)=>setImg(e.target.value)} />
     
       
        <div className='adm-but-sub'>
        {loading 
          ? <p>Submitting...</p>
          :
        <button className="sub-btn" type="submit" class="btn btn-primary col-7 submit-add" onClick={handleSubmit}>Submit</button>
        }
        <button type="button" class="btn btn-primary col-7 submit-add" onClick={resetData}>Reset</button>
      
        </div>
    </form>
  </div>
  )
}

export default AddProducts