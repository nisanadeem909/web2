import React from 'react'
import './Profile.css';

import person from './person.png';

export default function Profile() {
  return (
    <div>
        <div className='profile-container'>
            <div className='box'>
            <img className='p1' src={person} alt="" />
            </div>
            <br />
            <div className='upper'>
            <strong>Nisa Nadeem</strong>
            </div>
            <div className='middle'>
            <p>BS Software Engineering Student at FAST Nuces Lahore </p>
            </div>
           
           <hr />

           <div className='last'>
            <p className='lp1'>Email: nisanadeem90@gmail.com</p>
          
            <p className='lp1'>Contact: 0309 4444444</p>
           </div>

        </div>
       
      
    </div>
  )
}
