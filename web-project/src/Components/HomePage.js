import React from 'react'
import './HomePage.css';
import home from './finalhome.png';
import Slideshow from './Slideshow'
import Footer from './Footer'

function HomePage() {
    return (
        <div>
    <div className='container-home'>
        <div className='box1'>
            <h2>Connecting Applicants And Companies At One Place </h2>
            <button className='b1'>Get a Job</button>
            <button className='b2'>Own Company</button>
            <p id="loginp">Already have an account? <a href="/">Login</a></p>
       </div>
        <div className='box2'>
        <img className='img1' src={home} alt="" />
        </div>
        
        

   </div>
   <div className='sld'>
   <Slideshow/>
   </div>
   <div className='service'>
   <div className='box3'>CV Builder just one click away jdhshu fdghdgdkh ifdkufdhdk kufhkudhf
   <button className='bs1'>Go</button>
   </div>
   <div className='box4'>CV Builder just one click away jdhshu fdghdgdkh ifdkufdhdk kufhkudhf
   <button className='bs1'>Go</button>
   </div>
   <div className='box5'>CV Builder just one click away jdhshu fdghdgdkh ifdkufdhdk kufhkudhf
   <button className='bs1'>Go</button>

   </div>
   </div>

   <div className='ft'>
   <Footer/>
   </div>
   </div>

    );
  }
  
  export default HomePage;
  