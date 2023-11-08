import React from 'react'
import "./Detail.css"
import {Link} from 'react-router-dom';
const Teledetail = () => {
  return (
    <div>
    <Link to={'/home'} className="col-6"><i class="fa-solid fa-house fa-xl det"></i></Link>
    <div className='text-center'>
    <img className="main-img" src='tv1.png' width="370" height="260" alt='laptop-img'/>
    </div>
    <h3 className='title-text'>Mi Tv LED 50"</h3>
    <div className='text-center price'>
      <h4 className='bprice'>Best Price   <span className='rate'>  Rs.65,499</span></h4>
    </div>
    <hr></hr>
    <div className="container-fluid">
        <div className="row brands amazon">
          <div className="col-3 price-tabs text-center ">
          <img className='amazon' src='amazon.jpg' width="80px" height="80px" alt='amazon-img'/>
          </div>
          <div className='col-3 price-tabs'>
           <h4 className='brand-price'>Rs.65,400</h4>
          </div>
          
          <div className='col-3 price-tabs'>
           <div className='row stars'>
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
      </div>
      </div>



      <div className="container-fluid">
        <div className="row brands flip">
          <div className="col-3 price-tabs text-center">
          <img className='flipkart' src='flipkart.png' width="75px" height="45px" alt='flipkart-img'/>
          </div>
          <div className='col-3 price-tabs'>
           <h4 className='brand-price'>Rs.66,499</h4>
          </div>
          
          <div className='col-3 price-tabs'>
           <div className='row stars'>
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
      </div>
      </div>



      <div className="container-fluid">
        <div className="row brands snapdeal">
          <div className="col-3 price-tabs text-center ">
          <img className='snapdeal' src='snapdeal.png' width="57px" height="57px" alt='snapdeal-img'/>
          </div>
          <div className='col-3 price-tabs'>
           <h4 className='brand-price'>Rs.67,199</h4>
          </div>
          
          <div className='col-3 price-tabs'>
           <div className='row stars'>
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
      </div>
      </div>



      <div className="container-fluid">
        <div className="row brands ebay">
          <div className="col-3 price-tabs text-center ">
          <img className='ebay' src='ebay.png' width="57px" height="57px" alt='ebay-img'/>
          </div>
          <div className='col-3 price-tabs'>
           <h4 className='brand-price'>Rs.70,000</h4>
          </div>
          
          <div className='col-3 price-tabs'>
           <div className='row stars'>
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
      </div>
      </div>

      <hr></hr>
      <div className='specification-block'>
      <h4 className='phone-tit'>Mi Tv LED 50" Specs</h4>

      <h5><span>Design and Display</span></h5>
      <ul type="square">
      <li><span className='specs'>Dimensions:</span> 160.7 x 74.1 x 8.4 mm (6.33 x 2.92 x 0.33 in)</li>
      <li><span className='specs'>Weight:</span> 188 grams (6.63 ounces)</li>
      <li><span className='specs'>Build:</span> Glass front (Corning Gorilla Glass 5), glass back (Corning Gorilla Glass 5), aluminum frame</li>
      <li><span className='specs'>Display:</span> 6.55 inches Fluid AMOLED capacitive touchscreen, 1080 x 2400 pixels resolution, 20:9 aspect ratio, 402 ppi pixel density, 120Hz refresh rate</li>
      </ul>
      <h5><span>performance</span></h5>
      <ul type="square">
      <li><span className='specs'>CPU:</span> Qualcomm Snapdragon 865 (7nm+)</li>
      <li><span className='specs'>GPU:</span> Adreno 650</li>
      <li><span className='specs'>GPU:</span> Adreno 650RAM: 8GB or 12GB LPDDR4X</li>
      <li><span className='specs'>Storage:</span> 128GB or 256GB UFS 3.1</li>
      </ul>
      
      <h5><span>Camera system</span></h5>
      <ul type="square">
      <li><span className='specs'>Main Camera:</span> Quad-camera setup</li>
      <li><span className='specs'>Wide:</span>48 MP, f/1.7, 26mm </li>
      <li><span className='specs'>Macro:</span>5 MP, f/2.4</li>
      <li><span className='specs'>Ultrawide:</span>16 MP, f/2.2 14mm</li> 
      <li><span className='specs'>Depth:</span>2 MP, f/2.4</li>
      <li><span className='specs'>Front Camera:</span> 16 MP, f/2.4 (wide)</li>
      <li><span className='specs'>Video Recording:</span> Up to 4K at 60fps</li>
      </ul>


      <h5><span>Battery</span></h5>
      <ul type="square">
      <li><span className='specs'>Type:</span> Li-Po 4500 mAh, non-removable</li>
      <li><span className='specs'>Charging:</span>Warp Charge 65 (65W fast charging)</li>
      </ul>

      <h5><span>Battery</span></h5>
      <ul type="square">
      <li><span className='specs'>Operating System:</span> IOS 16.0</li>
      </ul>

      <h5><span>Other Features</span></h5>
      <ul type="square">
      <li>In-display fingerprint sensor</li>
      <li>Stereo speakers</li>
      <li>5G connectivity</li>
      <li>NFC (Near Field Communication)</li>
      <li>Dual SIM (Nano-SIM, dual stand-by)</li>
      </ul>
      </div>
      
 

    </div>
  )
}

export default Teledetail;