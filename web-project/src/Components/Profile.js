import React from 'react'
import './Profile.css';

import person from './person.png';

export default function Profile(props) {
  return (
    <div>
        <div className='profile-container'>
            <div className='profile_box'>
            <img className='prof_p1' src={person} alt="" />
            </div>
            <br />
            <div className='prof_upper'>
            <strong>{props.user}</strong>
            </div>
            <div className='prof_middle'>
            <p>BS Software Engineering Student at FAST Nuces Lahore </p>
            </div>
           
           <hr className='prof_hr'/>

           <div className='prof_last'>
            <p className='prof_lp1'>Email: nisanadeem90@gmail.com</p>
          
            <p className='prof_lp1'>Contact: 0309 4444444</p>
           </div>

        </div>
       
      
    </div>
  )
}
