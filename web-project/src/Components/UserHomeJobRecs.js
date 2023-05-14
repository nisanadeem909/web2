import React from 'react'
import './UserHomeJobs.css';
import ReactDOM from "react-dom";
import jobicon from './workk.png'
import { useState } from 'react';
import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';

export default function RecentlyAddedJobs() {
    const [jobs, setJobs] = useState([]);
    const navigate = useNavigate();

    const handleView = (job) => {
        //alert(job.JobId);
        navigate('/user/viewjob', { state: job });
      };

      const handleApply = (job) => {
        //alert(job.JobId);
        navigate('/user/applyjob', { state: job });
      };

    useEffect(() => {
        const sessionID = sessionStorage.getItem('sessionID');
        
       
       axios.get(`http://localhost:8000/jobs/${sessionID}`)
          .then(res => {

           
            setJobs(res.data); 
           
           
            res.end();
            
          })
          .catch(error => console.log(error));

      }, []);
    

    return (
        <div className="uhjobs_container">
            <div className="uhjobs_section">
                <label className="uhjobs_heading">Jobs For You</label>
                <ul className="uhjobs_ul">
                {jobs.map(job => (
          <li  className="uhjobs_li" key={job._id}>        
         
                   
                            <img className="uhjobs_icon" src={jobicon}></img>
                            <div className="uhjobs_text">
                                <label className="uhjobs_listheading">{job.Designation}</label>
                                <label className="uhjobs_listsubheading1">{job.CompanyName}</label>
                                <label className="uhjobs_listsubheading2">Experience Required: {job.YearsofExperience}yrs</label>
                                <div className="uhjobs_buttons">
                                    <button className="uhjobs_button" onClick={()=>{handleApply(job)}}>Apply</button>
                                    <button className="uhjobs_button" onClick={()=>handleView(job)}>View Details</button>
                                </div>
                            </div>
                    
                            
                           
                            </li>
                ))}
                   
                </ul>
            </div>
        </div>
    );
}