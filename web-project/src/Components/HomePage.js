import React from 'react'
import './HomePage.css';
import home from './home.png';


function HomePage() {
    return (
        <div>
    <div className='container-home'>
        <div className='box1'>
            <h2>Connecting Applicants And Companies At One Place </h2>
            <button className='b1'>Get a Job</button>
            <button className='b2'>Own Company</button>
       </div>
        <div className='box2'>
        <img className='img1' src={home} alt="" />
        </div>
        
        

   </div>
   <div className='service'>
   <div className='box3'></div>
   <div className='box4'></div>
   <div className='box5'></div>
   </div>
   </div>

    );
  }
  
  export default HomePage;
  