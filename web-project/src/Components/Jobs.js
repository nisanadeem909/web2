import React from 'react'
import './Jobs.css';
import findjob from './findjob3.png';
import jobicon from './workk.png'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function Jobs() {

    const [alljobs, setAllJobs] = useState([]);
    const navigate = useNavigate();
    const compareJobsRoute = () =>{ 
      let path = '/user/myjobs'; 
      navigate(path);
      
    }
    
    useEffect(() => {
        
        
       
       axios.get(`http://localhost:8000/alljobs`)
          .then(res => {        
            setAllJobs(res.data);            
           res.end();           
          })
          .catch(error => console.log(error));

      }, []);




  return (

    



    <div className='nisa-job-container'>

       <div className='nisa-job-container1'>
        <img className='nisa-job-img1' src={findjob} alt="" />
        <label className='nisa-job-label1'>Jobs</label>
       </div> 

        <hr className='job'/>  
      
        <button className='nisa-job-btn2' onClick={compareJobsRoute}>Compare Jobs</button>



<ul>
{alljobs.map(job => (
 <li  key={job._id}>   
        <div className='nisa-job-list'>
        <div className='nisa-notify-container2'>
            <img className='nisa-notify-img2' src={jobicon} alt="" />
                <div className='nisa-notify-container3'>
                    <div className='nisa-notify-container4'>
                    <label className='nisa-notify-lb'>{job.Designation}</label>
        
                    </div>
                    <p className='nisa-notify-p2'>{job.CompanyName} </p>
                     <p className='nisa-notify-p3'>Experience Required: {job.YearsofExperience}yrs </p>
                </div>
          </div>

          <div className='nisa-notify-post'>
          
          <button className='nisa-job-btn1'>Apply</button>
          <button  className='nisa-job-btn1'>View Details</button>
    
         </div>

         
        </div>
        </li>
                ))}
        </ul>

       
    </div>
  )
}
