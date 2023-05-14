import React from 'react'
import './Profile.css';
import person from './person.png';

export default function CompanyProfile(props) {
 
  if (!props.user) {
    return null; 
  }

  



  return (
    <div>
        <div className='profile-container'>
            <div className='profile_box'>
            <img className='prof_p1' src={person} alt="" />
            </div>
            <br />
            <div className='prof_upper'>
            <strong>{props.user.name}</strong>
            </div>
            <div className='prof_middle'>
            <p>Company Type:  {props.user.companyType} </p>
            <button className='nisa-pf-btn' >Open Profile</button>
            </div>
           
           <hr className='prof_hr'/>

           <div className='prof_last'>
            <p className='prof_lp1'>Email: {props.user.email} </p>
          
            <p className='prof_lp1'>Username: {props.user.username}</p>
           </div>

        </div>
       
      
    </div>
  )
}
