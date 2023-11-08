import React from "react";
import "./Rate.css";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";


const secondExample = {
  size: 50,
  count: 5,
  color: "black",
  activeColor: "red",
  value: 7.5,
  a11y: true,
  isHalf: true,
  emptyIcon: <i className="far fa-star" />,
  halfIcon: <i className="fa fa-star-half-alt" />,
  filledIcon: <i className="fa fa-star" />,
  onChange: newValue => {
    console.log(`Example 2: new value is ${newValue}`);
  }
};



export default function Rate() {
  return (
    <div className="App">
    <div className="container-fluid">
      <div className='row mob-tit'>
      <Link to={'/home'} className="col-5"><i class="fa-solid fa-house fa-xl"></i></Link>
        <div className='col-7'><h4 className='mob-tit mob'>RATE OUR APP</h4></div>
      </div> 
    </div>
      <ReactStars {...secondExample} />
      <div class="form-group cont" >
      <label className="cont" for="comment"></label>
  <textarea class="form-control" rows="15" id="comment" placeholder="Give a Feedback or Write something about us!"></textarea>
   </div>
   <button type="button" class="btn btn-primary btn-lg btn-block">SUBMIT</button>
      
    </div>
  );
}
