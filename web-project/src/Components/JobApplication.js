import React from 'react'
import './JobApplication.css';
import { useNavigate } from "react-router-dom";
import picture from './dummy.jpg'

import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Application() {

   
    const location = useLocation();
  const propsData = location.state;
    const navigate = useNavigate();
    const [allApp, setAllApp] = useState([]);
    const [job, setJob] = useState([]);
    const [con,setCon] = useState();
  const none = "none";

    useEffect(() => {
        axios
        .get(`http://localhost:8000/allappl/${propsData}`)
        .then(res => {
           
          setAllApp(res.data);
          alert(res.data.lastdegree.degree);
          axios
            .get(`http://localhost:8000/findjob/${res.data.jobid}`)
            .then(res => {
                setJob(res.data);
               
            })
            .catch(error => console.log(error));
          
        })
        .catch(error => console.log(error));
      }, []);

  return (
    <div className='kjobapp-container'>
        <div className='kjobapp-header'>
            <label>Job Application</label>
        </div>
        <div className='kjobapp-content'>
            <div className='kjobapp-content-header'>
                <label>{job.Designation} ({job.CompanyName})</label>
                
            </div>
            <hr className='kjobapp-content-hr'></hr>
            <div className='kjobapp-content-details'>
                <div className='kjobapp-content-profile'>
                    <div className='kjobapp-content-profile-summary'>
                        <img src={picture} className='kjobapp-content-profile-pic'></img>
                        <div className='kjobapp-content-profile-names'>
                            <label className='kjobapp-content-name'>{allApp.applicantname}</label>
                            <label className='kjobapp-content-username'>@{allApp.applicantusername}</label>
                        </div>
                    </div>
                    <button className='kjobapp-btn' onClick={()=>navigate('/company/publicuserprofile')}>View Profile</button>
                </div>
                <hr className='kjobapp-content-hr'></hr>
                <div className='kjobapp-content-application'>
                    <div className='kjobapp-content-appfield'>
                        <label className='kjobapp-content-appfield-title'>Date of Birth:</label>
                        <label className='kjobapp-content-appfield-value'>{allApp.dob}</label>
                    </div>
                    <div className='kjobapp-content-appfield'>
                        <label className='kjobapp-content-appfield-title'>Contact Number:</label>
                        <label className='kjobapp-content-appfield-value'>0{allApp.phone}</label>
                    </div>
                    <div className='kjobapp-content-appfield'>
                        <label className='kjobapp-content-appfield-title'>Email:</label>
                        <label className='kjobapp-content-appfield-value'>{allApp.email}</label>
                    </div>
                    <div className='kjobapp-content-appfield'>
                        <label className='kjobapp-content-appfield-title'>Last Degree:</label>
                        <label className='kjobapp-content-appfield-value'></label>
                    </div>
                    <div className='kjobapp-content-appfield'>
                        <label className='kjobapp-content-appfield-title'>Last School/College:</label>
                        <label className='kjobapp-content-appfield-value'></label>
                    </div>
                    <div className='kjobapp-content-appfield'>
                        <label className='kjobapp-content-appfield-title'>Years of Experience:</label>
                        <label className='kjobapp-content-appfield-value'>{allApp.yearsExp}</label>
                    </div>
                    <div className='kjobapp-content-appfield'>
                        <label className='kjobapp-content-appfield-title'>Reason for Applying:</label>
                        <label className='kjobapp-content-appfield-value'>{allApp.answer}</label>
                    </div>
                </div>
                <hr className='kjobapp-content-hr'></hr>
                <div className='kjobapp-content-btn-con'>
                    <button id='kjobapp-resumebtn' className='kjobapp-btn'>View Resume</button>
                    <button className='kjobapp-btn'>Delete Application</button>
                </div>
            </div>
        </div>
    </div>
  )
}
