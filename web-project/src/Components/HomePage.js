import React from 'react'
import './HomePage.css';
import home from './home.png';


function HomePage() {
    return (
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
    );
  }
  
  export default HomePage;
  