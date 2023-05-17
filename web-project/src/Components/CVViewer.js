
 import React from 'react';
 import { useState } from "react";
 import './CVViewer.css';
 import cvone from './cvone.png';
 import cvtwo from './cvtwo.png';
import { useNavigate } from 'react-router-dom';
import UserForm from './UserForm';
import Footer from './Footer'

 
 export default function CVViewer() {

  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);

  const gotoContactOne = () =>
  {

    setSubmitted(true);
    var data = true;
    navigate("userform" ,  {state: data });
  }

  const gotoContactTwo = () =>
  {
    setSubmitted(false);
    var data = false;
    navigate("userform" , {state: data });
  }

   return (
    <div className='cv-nisa'>
    <label className='nisa-cv-label'> Your Template Design... </label>
     <div className='nisa-cv-container'>
      
       <div class="nisa-cv-container2">
      <img src={cvone} alt="Avatar" class="nisa-cv-image" />
      <div class="nisa-cv-middle">
        <button onClick={() =>gotoContactOne()} class="nisa-cv-text">Let's Start!</button>
       
      </div>

    </div>

  

     </div>

     <Footer></Footer>
     </div>
   )
 }
 