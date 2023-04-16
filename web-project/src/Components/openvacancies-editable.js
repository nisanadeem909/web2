import React from 'react'

import './openvacancies.css';


function OpenVacanciesEditable() {
    return (
        <div id="openvacancies-box">
             <div id="our-employees">Current Vacancies</div>   
             
             <br></br>
             
             <button class="button"> <span>Add New</span></button>
              
              <br></br><br></br>
              <div id="emp-img"></div>
              <div id="emp-name">&nbsp;&nbsp;ReactJS Developer</div>&nbsp;&nbsp;
              <button class="button"><span>Edit Details </span></button>
              &nbsp;&nbsp;
              <button class="button"><span>Delete </span></button>

              <br></br><br></br>
              <div id="emp-img"></div>
              <div id="emp-name">&nbsp;&nbsp;Project Manager</div>&nbsp;&nbsp;
              <button class="button"><span>Edit Details </span></button>
              &nbsp;&nbsp;
              <button class="button"><span>Delete </span></button>

              <br></br><br></br>
              <div id="emp-img"></div>
              <div id="emp-name">&nbsp;&nbsp;PHP Developer</div>&nbsp;&nbsp;
              <button class="button"><span>Edit Details </span></button>
              &nbsp;&nbsp;
              <button class="button"><span>Delete </span></button>

              <br></br><br></br>
              <div id="emp-img"></div>
              <div id="emp-name">&nbsp;&nbsp;Senior Architect</div>&nbsp;&nbsp;
              <button class="button"><span>Edit Details </span></button>
              &nbsp;&nbsp;
              <button class="button"><span>Delete </span></button>
              
       </div>
    );
  }
  
  export default OpenVacanciesEditable;
  