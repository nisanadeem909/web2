import React from 'react'
import jobicon from './workk.png'

import './ManageEmployees.css';
import CurrentEmployees from'./CurrentEmployees';
import EmployeeRequests from './EmployeeRequests';
import empicon from './dummy.jpg'
import Footer from './Footer';

function ManageEmployeesPage() {
    return (
        <div>
            <div id="nab-manageemp-wrapper">
                  <div id="currentemp">
                     <CurrentEmployees />
                  </div>

                  <div id="empreq">
                     <EmployeeRequests  />
                  </div>

            </div>
         <br></br>
         <br></br>
         <br></br>
         <br></br><br></br>
         <br></br><br></br>
         <br></br><br></br>
         <br></br><br></br>
         <br></br><br></br>
         <br></br><br></br>
         <br></br><br></br>
         <br></br><br></br>
         <br></br><br></br>
         <br></br><br></br>
         <br></br><br></br>
         <br></br><br></br>
         <br></br><br></br>
         <br></br><br></br>
         
         
         
         <Footer/>
         </div>
    );
  }
  
  export default ManageEmployeesPage;
  