import React from 'react'
import './ApplicantsView.css'
import app from './app.png'
import person from './person.png'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ApplicantsView() {
  const location = useLocation();
  const propsData = location.state;
  const [allApp, setAllApp] = useState([]);

  useEffect(() => {
   
    axios
      .get(`http://localhost:8000/allapps/${propsData}`)
      .then(res => {
        setAllApp(res.data);
      })
      .catch(error => console.log(error));
  }, []);
  
  return (
    <div className='nisa-app-container1'>
       <div className='nisa-app-container2'>
            <img className='nisa-app-img1' src={app} alt="" />
            <label className='nisa-vaca-label'>Applicants</label>
        </div>

        <hr className='notif'/>

        <ul>
      {allApp.map(app => (
        <li key={app._id}>
        <div className='nisa-notif-list'>
        <div className='nisa-notify-container2'>
            <img className='nisa-notify-img2' src={person} alt="" />
                <div className='nisa-notify-container3'>
                    <div className='nisa-notify-container4'>
                    <label className='nisa-vaca-lb'>{app.applicantname}</label>
                   
                    </div>

                </div>
          </div>

          <div className='nisa-notify-post'>
         
          <button className='nisa-vaca-btn1'>Apllication</button>
          <button className='nisa-vaca-btn1'>Profile</button>
       
          </div>
        </div>

        </li>
      ))}
    </ul>


    </div>
  )
}
