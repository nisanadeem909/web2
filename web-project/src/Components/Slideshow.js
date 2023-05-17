import React from 'react'

import './Slideshow.css';
import pic1 from './image1.png';
import pic2 from './image2.png';
import pic3 from './image3.png';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import { useNavigate } from 'react-router-dom';


export default function Slideshow() {

  const navigate=useNavigate();
  
  return (
    
    <div>
        <AliceCarousel autoPlay autoPlayInterval="3000">
      <div>
      
        <div className='nisa-img1' ><img src={pic1} className="sliderimg1"/>  
        <div className='nisa-text1'> 
        <label className='nisatt1'>Connect with Comapnies and Employees!</label>
       
        <button onClick={()=>navigate("/signup")} className='nisa-ss-btn1'>Let's Get Started!</button>
        </div>
        </div>
      </div>
      
      <div className='nisa-img2'><img src={pic2} className="sliderimg2"/>
      <div className='nisa-text1'> <label className='nisatt1'>Free CV Maker Just One Click Away!</label>
       
       <button onClick={()=>navigate("/cvviewer")} className='nisa-ss-btn1'>Build CV Now!</button>
       </div> </div>
      <div><img src={pic3} className="sliderimg"/> <div className='nisa-text1'> <label className='nisatt1'>Get Yourself Hired with Jobify!</label>
       
       <button onClick={()=>navigate("/signup")} className='nisa-ss-btn1'>Let's Get Started!</button>
       </div> </div>
      
    </AliceCarousel>  
    
  </div>

  )
}
