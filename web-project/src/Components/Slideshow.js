import React from 'react'

import './Slideshow.css';
import pic1 from './image1.png';
import pic2 from './image2.png';
import pic3 from './image3.png';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

export default function Slideshow() {


  
  return (
    
    <div>
        <AliceCarousel autoPlay autoPlayInterval="3000">
      <div>
      
        <div className='nisa-img1' ><img src={pic1} className="sliderimg1"/>  <div className='nisa-text1'> <label className='nisatt1'>Connect with Comapnies and Employees!</label>
       
        <button>Let's Get Started!</button>
        </div></div>
      <button></button>
      </div>
      
      <div className='nisa-img2'><img src={pic2} className="sliderimg2"/>
      <div className='nisa-text1'> <label className='nisatt1'>Connect with Comapnies and Employees!</label>
       
       <button>Let's Get Started!</button>
       </div> </div>
      <div><img src={pic3} className="sliderimg"/> <div className='nisa-text1'> <label className='nisatt1'>Connect with Comapnies and Employees!</label>
       
       <button>Let's Get Started!</button>
       </div> </div>
      
    </AliceCarousel>  
    
  </div>

  )
}
