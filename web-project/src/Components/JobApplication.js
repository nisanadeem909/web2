import React from 'react'
import './JobApplication.css';
import { useNavigate } from "react-router-dom";
import picture from './dummy.jpg'

export default function Application() {

    const appDetails = {'answer':'I want to apply for this job because ...... I want to apply for this job because .....', 'experience':'0','contact':{'phone':'12345678901', 'email':'kw@gmail.com'}, 'applicantName': 'Komal Waseem', 'position':'Internship','date':'06/05/2022', 'username':'komalwaseem', 'dob':'10/01/2001', 'lastDegree':{'degree':'Bachelors','major':'Software Engineering','school':'FAST'}};
    const company = 'Devsinc';

    const navigate = useNavigate();

  return (
    <div className='kjobapp-container'>
        <div className='kjobapp-header'>
            <label>Job Application</label>
        </div>
        <div className='kjobapp-content'>
            <div className='kjobapp-content-header'>
                <label>{appDetails.position} ({company})</label>
                <label className='kjobapp-content-header-date'>Submitted: {appDetails.date}</label>
            </div>
            <hr className='kjobapp-content-hr'></hr>
            <div className='kjobapp-content-details'>
                <div className='kjobapp-content-profile'>
                    <div className='kjobapp-content-profile-summary'>
                        <img src={picture} className='kjobapp-content-profile-pic'></img>
                        <div className='kjobapp-content-profile-names'>
                            <label className='kjobapp-content-name'>{appDetails.applicantName}</label>
                            <label className='kjobapp-content-username'>@{appDetails.username}</label>
                        </div>
                    </div>
                    <button className='kjobapp-btn' onClick={()=>navigate('/company/publicuserprofile')}>View Profile</button>
                </div>
                <hr className='kjobapp-content-hr'></hr>
                <div className='kjobapp-content-application'>
                    <div className='kjobapp-content-appfield'>
                        <label className='kjobapp-content-appfield-title'>Date of Birth:</label>
                        <label className='kjobapp-content-appfield-value'>{appDetails.dob}</label>
                    </div>
                    <div className='kjobapp-content-appfield'>
                        <label className='kjobapp-content-appfield-title'>Contact Number:</label>
                        <label className='kjobapp-content-appfield-value'>{appDetails.contact.phone}</label>
                    </div>
                    <div className='kjobapp-content-appfield'>
                        <label className='kjobapp-content-appfield-title'>Email:</label>
                        <label className='kjobapp-content-appfield-value'>{appDetails.contact.email}</label>
                    </div>
                    <div className='kjobapp-content-appfield'>
                        <label className='kjobapp-content-appfield-title'>Last Degree:</label>
                        <label className='kjobapp-content-appfield-value'>{appDetails.lastDegree.degree} in {appDetails.lastDegree.major}</label>
                    </div>
                    <div className='kjobapp-content-appfield'>
                        <label className='kjobapp-content-appfield-title'>Last School/College:</label>
                        <label className='kjobapp-content-appfield-value'>{appDetails.lastDegree.school}</label>
                    </div>
                    <div className='kjobapp-content-appfield'>
                        <label className='kjobapp-content-appfield-title'>Years of Experience:</label>
                        <label className='kjobapp-content-appfield-value'>{appDetails.experience}</label>
                    </div>
                    <div className='kjobapp-content-appfield'>
                        <label className='kjobapp-content-appfield-title'>Reason for Applying:</label>
                        <label className='kjobapp-content-appfield-value'>{appDetails.answer}</label>
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
