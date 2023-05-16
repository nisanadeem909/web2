import React from 'react'
import './Profile.css';
import person from './person.png';
import { useNavigate } from 'react-router-dom';

export default function CompanyProfile(props) {
 
  const navigate = useNavigate();
  
  if (!props.user) {
    return null; 
  }
  

  const openProfile=()=>{
    var userType = sessionStorage.getItem("userType");
    var path = "/" + userType + "/ownprofile";
    navigate(path);
  }


  return (
    <div>
        <div className='profile-container'>
            <div className='profile_box'>
            <img className='prof_p1' src={`http://localhost:8000/profilepictures/${props.user.profilePicture}`} alt="" />
            </div>
            <br />
            <div className='prof_upper'>
            <strong>{props.user.name}</strong>
            </div>
            <div className='prof_middle'>
            <p>Company Type:  {props.user.companyType} </p>
            <button className='nisa-pf-btn' onClick={openProfile}>Open Profile</button>
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
