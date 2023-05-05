import React from 'react'
import './EditProfile.css'
import editpic from './editpic.png';
import person from './person.png';
import editicon from './edit.png';
import { useState } from "react";
import { useLocation } from 'react-router-dom';
export default function EditProfile() {

  const {state} = useLocation();
   const { id, namee } = state;


  return (
   

    <div className='nisa-edit-container1'>

      <div className='nisa-notif-container1'>
          <img className='nisa-notify-img1' src={editpic} alt="" />
          <label className='nisa-label'>Edit Profile</label>
      </div>

      <hr className='notif'/>


    <div className='nisa-edit-container3'>
      <div className='edit-hr'></div>

      <div className='nisa-edit-container2'>
          <img src={person} className="edit-nisa-img1"/>
          <label class="custom-file-upload">
            <input type="file" accept=".jpeg,.jpg,.png"/>
            Upload image
          </label>

        
      
                <label className='nisa-edit-label'>
                  Name:{id}
                </label>
                <input className='nisa-edit-input' type="text" />

                <label className='nisa-edit-label'>
                  Username:  
                </label>
                <input className='nisa-edit-input' type="text" />

                <label className='nisa-edit-label'>
                  Bio:  
                </label>
                <input className='nisa-edit-input' type="text" />
                
        

           
      </div>

      <div className='edit-hr2'></div>

      <div className='nisa-edit-container4'>
       
        <label className='nisa-edit-label2'> Education :</label>
        <label className='nisa-edit-label'>
                  Degree:
                </label>
                <input className='nisa-edit-input' type="text" />

                <label className='nisa-edit-label'>
                  Institute:  
                </label>
                <input className='nisa-edit-input' type="text" />

                <label className='nisa-edit-label'>
                  Duration:  
                </label>
                <input className='nisa-edit-input' type="text" />
          
                
      </div>
      <label className='nisa-edit-labelnew'>
                 Skills:
                </label>
      <input className='nisa-test' type="text" />

      <div className='nisa-edit-container6'>
      <label className='nisa-edit-label2'> Experience :</label>
      <label className='nisa-edit-label'>
                  Organization:
                </label>
                <input className='nisa-edit-input' type="text" />

                <label className='nisa-edit-label'>
                  Position:  
                </label>
                <input className='nisa-edit-input' type="text" />

                <label className='nisa-edit-label'>
                  Duration:  
                </label>
                <input className='nisa-edit-input' type="text" />
          
      
    
     </div>
          
                

      </div>
      
    </div>
    
  )
}
