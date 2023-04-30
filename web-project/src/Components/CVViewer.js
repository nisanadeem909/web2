
 import React from 'react';
 import { useState } from "react";
 import './CVViewer.css';
 import cvone from './cvone.png';
 import cvtwo from './cvtwo.png';
import { useNavigate } from 'react-router-dom';
import UserForm from './UserForm';

 
 export default function CVViewer() {

  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);

  const gotoContactOne = () =>
  {

    setSubmitted(true);
    <UserForm type = {submitted}/>
    navigate("userform");
  }

  const gotoContactTwo = () =>
  {
    setSubmitted(false);
    <UserForm type = {submitted}/>
    navigate("userform");
  }

   return (
    <div>
    <label className='nisa-cv-label'> Choose Your Template... </label>
     <div className='nisa-cv-container'>
      
       <div class="nisa-cv-container2">
      <img src={cvone} alt="Avatar" class="nisa-cv-image" />
      <div class="nisa-cv-middle">
        <button onClick={() =>gotoContactOne()} class="nisa-cv-text">Let's Start!</button>
       
      </div>

    </div>

    <div class="nisa-cv-container2">
      <img src={cvtwo} alt="Avatar" class="nisa-cv-image2" />
      <div class="nisa-cv-middle2">
        <button onClick={() =>gotoContactTwo()} class="nisa-cv-text2">Let's Start!</button>
       
      </div>
      
    </div>

     </div>
     </div>
   )
 }
 