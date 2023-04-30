import React from 'react'
import './Jobs.css';
import findjob from './findjob3.png';
import jobicon from './workk.png'

export default function Jobs() {
  return (
    <div className='nisa-job-container'>

       <div className='nisa-job-container1'>
        <img className='nisa-job-img1' src={findjob} alt="" />
        <label className='nisa-job-label1'>Jobs</label>
       </div> 

        <hr className='job'/>  
      
        <button className='nisa-job-btn2'>Compare Jobs</button>

        <div class="dropdown">
            <button class="dropbtn">Filters</button>
            <div class="dropdown-content">
                <a href="#">Salary</a>
                <a href="#">Location</a>
                <a href="#">Skill</a>
            </div>
        </div>       



        <div className='nisa-job-list'>
        <div className='nisa-notify-container2'>
            <img className='nisa-notify-img2' src={jobicon} alt="" />
                <div className='nisa-notify-container3'>
                    <div className='nisa-notify-container4'>
                    <label className='nisa-notify-lb'>Project Manager</label>
        
                    </div>
                    <p className='nisa-notify-p2'>ABC Software House </p>
                     <p className='nisa-notify-p3'>Lahore, Pakistan </p>
                </div>
          </div>

          <div className='nisa-notify-post'>
          
          <button className='nisa-job-btn1'>Apply</button>
          <button  className='nisa-job-btn1'>View Details</button>
    
         </div>

         
        </div>

        <div className='nisa-job-list'>
        <div className='nisa-notify-container2'>
            <img className='nisa-notify-img2' src={jobicon} alt="" />
                <div className='nisa-notify-container3'>
                    <div className='nisa-notify-container4'>
                    <label className='nisa-notify-lb'>Project Manager</label>
        
                    </div>
                    <p className='nisa-notify-p2'>ABC Software House </p>
                     <p className='nisa-notify-p3'>Lahore, Pakistan </p>
                </div>
          </div>

          <div className='nisa-notify-post'>
          
           <button className='nisa-job-btn1'>Apply</button>
           <button className='nisa-job-btn1'>View Details</button>
     
          </div>
         
        </div>

        <div className='nisa-job-list'>
        <div className='nisa-notify-container2'>
            <img className='nisa-notify-img2' src={jobicon} alt="" />
                <div className='nisa-notify-container3'>
                    <div className='nisa-notify-container4'>
                    <label className='nisa-notify-lb'>Project Manager</label>
        
                    </div>
                    <p className='nisa-notify-p2'>ABC Software House </p>
                     <p className='nisa-notify-p3'>Lahore, Pakistan </p>
                </div>
          </div>

          <div className='nisa-notify-post'>
          
          <button className='nisa-job-btn1'>Apply</button>
          <button className='nisa-job-btn1'>View Details</button>
    
         </div>
         
        </div>


    </div>
  )
}
