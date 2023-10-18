import React from 'react';
import './Home.css';
import { dummyData } from '../data/data';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="maindiv">
  
    <div class="offcanvas offcanvas-start w-10" tabIndex="-1" id="offcanvas" >
    <div class="offcanvas-header">
        <h5 class="offcanvas-title d-none d-sm-block" id="offcanvas">Menu</h5>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body px-0">
        <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-start" id="menu">
            <li class="nav-item">
                <a href="/home" class="nav-link text-truncate">
                    <i class="fa-solid fa-house"></i>  <span class="ms-1 d-none d-sm-inline">Home</span>
                </a>
            </li>
            
            <li class="dropdown">
                <a href="#" class="nav-link dropdown-toggle  text-truncate" id="dropdown" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="fa-solid fa-language"></i>  <span class="ms-1 d-none d-sm-inline">Language</span>
                </a>
                <ul class="dropdown-menu text-small shadow" aria-labelledby="dropdown">
                    <li><a class="dropdown-item" href="#">English</a></li>
                    <li><a class="dropdown-item" href="#">French</a></li>
                    <li><a class="dropdown-item" href="#">Spanish</a></li>
                    <li><a class="dropdown-item" href="#">Chinese</a></li>

                </ul>
            </li>
           
            <li>
                <a href="#" class="nav-link text-truncate">
                <i class="fa-solid fa-phone"></i>  <span class="ms-1 d-none d-sm-inline">Contact Us</span></a>
            </li>
            <li>
                <a href="#" class="nav-link text-truncate">
                <i class="fa-solid fa-star"></i>  <span class="ms-1 d-none d-sm-inline">Rate our App</span> </a>
            </li>
            <li>
                <a href="#" class="nav-link text-truncate">
                <i class="fa-solid fa-circle-info"></i>  <span class="ms-1 d-none d-sm-inline">About</span> </a>
            </li>
            <li>
                <a href="#" class="nav-link text-truncate">
                <i class="fa-solid fa-gift"></i>  <span class="ms-1 d-none d-sm-inline">My Coupons</span> </a>
            </li>
            <li>
                <a href="/login" class="nav-link text-truncate">
                <i class="fa-solid fa-right-from-bracket"></i>  <span class="ms-1 d-none d-sm-inline">Log out</span> </a>
            </li>
        </ul>
    </div>
</div>
   
      <div className="container-fluid">
        <div className="row">
          <div className="col-1 logo btn float-end"  data-bs-toggle="offcanvas" data-bs-target="#offcanvas" typeof='button' aria-label="Close">
          
            <i className="fa-solid fa-bars fa-xl"  ></i>  
            
          </div>
          <div className="col-1 logo">
            <img className="homepage-logo" src="logo.png" alt="" width="25" height="28" />
          </div>
          <div className="col-1 pricewise">
            <h6>PriceWise</h6>
          </div>
          <div className="col-6">
            <input type="search" id="form1" className="form-control" placeholder="Search" />
          </div>
          <div className="col-1">
            <button type="button" className="btn btn-primary search-button">
              <i className="fas fa-search"></i>
            </button>
          </div>
          <Link to={'/notifications'} className="col-1">
            <i className="fa-solid fa-bell fa-xl"></i>
          </Link>
          <Link to={'/profile'} className="col-1">
            <i className="fa-solid fa-user fa-xl"></i>
          </Link>
          <div className="col-1">
            <i className="fa-solid fa-ellipsis-vertical fa-xl"></i>
          </div>
        </div>
      </div>
      <hr />
      <div className="container-fluid category">
        <div className="row">
          <Link to={'/mobiles'} className="col-2">
            <h6 className='cat-list'>Mobiles</h6>
          </Link>
          <Link to={'/laptops'} className="col-2">
            <h6 className='cat-list'>Laptops</h6>
          </Link>
          <Link to={'/televisions'} className="col-2">
            <h6 className='cat-list'>Television</h6>
          </Link>
          <Link to={'/fridge'} className="col-2">
            <h6 className='cat-list'>Fridge</h6>
          </Link>
          <Link to={'/earphones'} className="col-2">
            <h6 className='cat-list'>Earphones</h6>
          </Link>
          <Link to={'/tablets'} className="col-1">
            <h6 className='cat-list'>Tablets</h6>
          </Link>
          <div className="col-1">
          <h5 className='viewall'>View all </h5>
          </div>
        </div>
      </div>
      <section className="colored-section" id="testimonials">
      <div id="testimonial-carousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active container-fluid  ">
            <img className="testimonial-image" src="banner4.jpg" alt="banner1" />
          </div>
          <div className="carousel-item container-fluid">
            <img className="testimonial-image" src="banner2.jpg" alt="banner2" />
          </div>
          <div className="carousel-item container-fluid">
            <img className="testimonial-image" src="banner1.jpg" alt="banner2" />
          </div>
          <div className="carousel-item container-fluid">
            <img className="testimonial-image" src="banner3.jpg" alt="banner2" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#testimonial-carousel" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#testimonial-carousel" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </section>

<hr></hr>
      <div className="container-fluid category">
        <div className="row">
          <div className="col-11">
            <h5 className='pop-title'>Popular Mobiles</h5>
          </div>
          <div className="col-1">
          <h5 className='viewall'>View all </h5>
          </div>
          
        </div>
      </div>
    
      <div class="container d-flex justify-content-center mt-3 mb-3">
            
            <div class="row">
                {dummyData.map(data =>
                    <Link to={'/detail'} class="col-md-4">
                
                    <div class="card card-body mt-3">
                                <div class="media align-items-center align-items-lg-start text-center text-lg-left flex-column flex-lg-row">
                                    <div class="mr-2 mb-3 mb-lg-0">
                                        
                                            <img className="phones" src={data.img} width="150" height="150" alt=""/>
                                       
                                    </div>
    
                                    <div class="media-body">
                                        <h6 class="media-title font-weight-semibold">
                                            <a href="#" data-abc="true">{data.title}</a>
                                        </h6>
    
                                        <ul class="list-inline list-inline-dotted mb-3 mb-lg-2">
                                            <li class="list-inline-item"><a href="#" class="text-muted" data-abc="true">Phones</a></li>
                                            <li class="list-inline-item"><a href="#" class="text-muted" data-abc="true">Mobiles</a></li>
                                        </ul>
    
                                        <p class="mb-3">{data.desc}</p>
    
                                        
                                    </div>
    
                                    <div class="mt-3 mt-lg-0 ml-lg-3 text-center">
                                        <h3 class="mb-0 font-weight-semibold">{data.price}</h3>
    
                                        <div>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
    
                                        </div>
    
                                      
    
                                        
                                    </div>
                                </div>
                            </div>
                            </Link>
                )}
               
     
               
                                
            </div>
        </div>

        <div className='footer'>
            <h5 className='copyright'>©2023 Copyright  PriseWise</h5>
        </div>

    </div>
  );
};

export default Home;
