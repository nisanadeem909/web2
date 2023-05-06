import React from 'react'
import './ApplicantsView.css'
import app from './app.png'
import person from './person.png'

export default function ApplicantsView() {
  return (
    <div className='nisa-app-container1'>
       <div className='nisa-app-container2'>
            <img className='nisa-app-img1' src={app} alt="" />
            <label className='nisa-vaca-label'>Applicants</label>
        </div>

        <hr className='notif'/>

        <div className='nisa-notif-list'>
        <div className='nisa-notify-container2'>
            <img className='nisa-notify-img2' src={person} alt="" />
                <div className='nisa-notify-container3'>
                    <div className='nisa-notify-container4'>
                    <label className='nisa-vaca-lb'>Komal Waseem</label>
                   
                    </div>

                </div>
          </div>

          <div className='nisa-notify-post'>
         
          <button className='nisa-vaca-btn1'>Apllication</button>
          <button className='nisa-vaca-btn1'>Profile</button>
       
          </div>
        </div>

        <div className='nisa-notif-list'>
        <div className='nisa-notify-container2'>
            <img className='nisa-notify-img2' src={person} alt="" />
                <div className='nisa-notify-container3'>
                    <div className='nisa-notify-container4'>
                    <label className='nisa-vaca-lb'>Hira Toqeer</label>
                   
                    </div>

                </div>
          </div>

          <div className='nisa-notify-post'>
         
          <button className='nisa-vaca-btn1'>Apllication</button>
          <button className='nisa-vaca-btn1'>Profile</button>
       
          </div>
        </div>

    </div>
  )
}
