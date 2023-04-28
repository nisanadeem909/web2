import React from 'react'
import jobicon from './workk.png'

import './openvacancies.css';


function OpenVacancies() {
    return (
        <div id="openvacancies-box">
             <div id="openvacancies-our-employees">Current Vacancies</div>   
              

              <br></br><br></br>
              <div id="openvacancies-emp-img"><img className='openvacancies-emp-icon' src={jobicon}/></div>
              <div id="openvacancies-emp-name">&nbsp;&nbsp;ReactJS Developer</div>&nbsp;&nbsp;
              <button class="openvacancies-button"><span>View Details </span></button>
              &nbsp;&nbsp;
              <button class="openvacancies-button"> <span>Apply Now </span></button>

              <br></br><br></br>
              <div id="openvacancies-emp-img"><img className='openvacancies-emp-icon' src={jobicon}/></div>
              <div id="openvacancies-emp-name">&nbsp;&nbsp;Project Manager</div>&nbsp;&nbsp;
              <button class="openvacancies-button"><span>View Details </span></button>
              &nbsp;&nbsp;
              <button class="openvacancies-button"> <span>Apply Now </span></button>

              <br></br><br></br>
              <div id="openvacancies-emp-img"><img className='openvacancies-emp-icon' src={jobicon}/></div>
              <div id="openvacancies-emp-name">&nbsp;&nbsp;PHP Developer</div>&nbsp;&nbsp;
              <button class="openvacancies-button"><span>View Details </span></button>
              &nbsp;&nbsp;
              <button class="openvacancies-button"> <span>Apply Now </span></button>

              <br></br><br></br>
              <div id="openvacancies-emp-img"><img className='openvacancies-emp-icon' src={jobicon}/></div>
              <div id="openvacancies-emp-name">&nbsp;&nbsp;Senior Architect</div>&nbsp;&nbsp;
              <button class="openvacancies-button"><span>View Details </span></button>
              &nbsp;&nbsp;
              <button class="openvacancies-button"> <span>Apply Now </span></button>
              
       </div>
    );
  }
  
  export default OpenVacancies;
  