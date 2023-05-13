import React from 'react'
import './CompanyVacancies.css'
import vaca from './vaca.png'
import jobicon from './workk.png'
import { useNavigate } from 'react-router-dom'

export default function CompanyVacancies() {

    const navigate = useNavigate();
 

    
  
    const view=()=> {

       
        navigate("viewapplicants");
        
        
               
    }

  return (
    <div className='nisa-vaca-container1'>
         <div className='nisa-vaca-container2'>
            <img className='nisa-vaca-img1' src={vaca} alt="" />
            <label className='nisa-vaca-label'>Vacancies</label>
        </div>

        <hr className='notif'/>

        <button className='nisa-vaca-btn2'>Add Vacancy</button>

        <div className='nisa-notif-list'>
        <div className='nisa-notify-container2'>
            <img className='nisa-notify-img2' src={jobicon} alt="" />
                <div className='nisa-notify-container3'>
                    <div className='nisa-notify-container4'>
                    <label className='nisa-vaca-lb'>React JS Developer</label>
                   
                    </div>

                </div>
          </div>

          <div className='nisa-notify-post'>
          <button onClick={() =>view()} className='nisa-vaca-btn1'>Applicants</button>
          <button className='nisa-vaca-btn1'>Edit</button>
          <button className='nisa-vaca-btn1'>Delete</button>
       
          </div>
        </div>

        <div className='nisa-notif-list'>
        <div className='nisa-notify-container2'>
            <img className='nisa-notify-img2' src={jobicon} alt="" />
                <div className='nisa-notify-container3'>
                    <div className='nisa-notify-container4'>
                    <label className='nisa-vaca-lb'>Finance Managerr</label>
                   
                    </div>

                </div>
          </div>

          <div className='nisa-notify-post'>
          <button onClick={() =>view()} className='nisa-vaca-btn1'>Applicants</button>
          <button className='nisa-vaca-btn1'>Edit</button>
          <button className='nisa-vaca-btn1'>Delete</button>
       
          </div>
        </div>

        <div className='nisa-notif-list'>
        <div className='nisa-notify-container2'>
            <img className='nisa-notify-img2' src={jobicon} alt="" />
                <div className='nisa-notify-container3'>
                    <div className='nisa-notify-container4'>
                    <label className='nisa-vaca-lb'>Database Engineer</label>
                   
                    </div>

                </div>
          </div>

          <div className='nisa-notify-post'>
          <button onClick={() =>view()} className='nisa-vaca-btn1'>Applicants</button>
          <button className='nisa-vaca-btn1'>Edit</button>
          <button className='nisa-vaca-btn1'>Delete</button>
       
          </div>
        </div>
      
    </div>
  )
}
