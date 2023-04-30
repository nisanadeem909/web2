import React from 'react'
import './MakeCV.css';
import { useNavigate } from 'react-router-dom';


export default function MakeCV() {


  
  const navigate = useNavigate();

  const gotoContact = () =>
  {
    navigate("cvviewer");
  }


  return (

    <div>
      <div className='cv-container'>
        <div className='upperCV'>
        <strong id="cv-title">Create a Professional CV </strong>
        <p>Fill in tha blanks and download your CV!</p>
        </div>
        <br/>
        <button onClick={() =>gotoContact()} className='buttonCV'>Make CV</button>
      </div>
    </div>
  )
}
