import React from 'react'

import './Slideshow.css';
import pic1 from './image1.jpg';
import pic2 from './image2.jpg';
import pic3 from './image3.jpg';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

export default function Slideshow() {


  
  return (
    
    <div>
        <AliceCarousel autoPlay autoPlayInterval="3000">
      <div><img src={pic1} className="sliderimg"/> <div className='text1'><h2><span className='s1'>Get yourself Hired by connecting to huge network of comapnies!</span></h2></div></div>
      
      <div><img src={pic2} className="sliderimg"/> <div className='text1'><h2><span className='s2'>Get yourself Hired by connecting to huge network of comapnies!</span></h2></div></div>
      <div><img src={pic3} className="sliderimg"/> <div className='text1'><h2><span className='s3'>Get yourself Hired by connecting to huge network of comapnies!</span></h2></div></div>
      
    </AliceCarousel>  
    
  </div>

  )
}
