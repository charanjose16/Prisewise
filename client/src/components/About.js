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

    <h5><span>About us</span></h5>
      <ul type="square">
      <li>Welcome to PriceWise, your trusted partner in ensuring fair and competitive pricing in the dynamic world of e-commerce and government procurement. At PriceWise, we are committed to empowering users with the tools they need to make informed decisions when it comes to purchasing products on Government e-Marketplace (GeM) and other leading e-commerce platforms.</li>
      
      </ul>

      <h5><span>Our Mission</span></h5>
      <ul type="square">
      <li>Our mission is simple yet profound: to bridge the gap between the public sector and private e-marketplaces, ensuring that everyone has access to transparent pricing information. We believe that by doing so, we contribute to the growth and efficiency of the Indian economy while fostering fair competition and better value for consumers.</li>      
      </ul>

      

      <h5><span>Why Price Comparison Matters</span></h5>
      <ul type="square">
      <li>In today's fast-paced digital age, where a multitude of e-commerce platforms vie for your attention, it's crucial to have a reliable source of information to make well-informed purchasing decisions. GeM, being the dedicated platform for government procurement in India, offers a unique set of products and services. However, comparing prices across different platforms can be a daunting task, leading to potential overspending or missed opportunities for cost savings.

Our cost and price comparison solution simplifies this process, offering users an easy and efficient way to compare the prices of products available on GeM with those on other popular e-marketplaces. By harnessing the power of data scraping techniques, APIs, and data analytics, we gather comprehensive pricing information from multiple sources, putting the power of choice back in your hands</li>      
      </ul>

      <h5><span>What Sets Us Apart</span></h5>
      <ul type="square">
      <li>Accuracy: We understand the importance of accurate and up-to-date pricing information. Our team works tirelessly to ensure that the data we provide is reliable, giving you peace of mind when making your purchasing decisions.</li>      
      <li>User-Centric Approach: Your needs and preferences are at the core of our design. We've created an intuitive platform that is easy to navigate, so you can quickly find the information you're looking for.</li>
      <li>Transparency: We are committed to transparency in pricing, ensuring that you have a clear view of the options available to you. With our solution, you can compare prices across platforms with confidence.</li>
      <li>Support: We believe in providing excellent customer support. If you ever have questions or encounter any issues while using our platform, our dedicated team is here to assist you.</li>
      </ul>

      <h5><span>Join Us in Empowering Your Choices</span></h5>
      <ul type="square">
      <li>
At PriceWise, we invite you to join us on this journey of empowerment. Whether you're a government department seeking cost-effective procurement solutions or an individual consumer looking for the best deals, we are here to serve you. With our price comparison solution, you can make smarter decisions, save money, and contribute to a more competitive marketplace.

Thank you for choosing PriceWise as your partner in navigating the ever-evolving landscape of e-commerce and government procurement. Together, we can build a more transparent and efficient future for all</li>      
      </ul>


    </div>
  )
}
