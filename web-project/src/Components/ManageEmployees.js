import React from 'react'
import jobicon from './workk.png'

import './ManageEmployees.css';
import CurrentEmployees from'./CurrentEmployees';
import EmployeeRequests from './EmployeeRequests';
import empicon from './dummy.jpg'
import Footer from './Footer';
import {useState} from 'react';
function ManageEmployeesPage() {
    
   
   const [empName,setEmpName] = useState();
   const [empDes,setEmpDes] = useState();
   const [username,setUsername] = useState();
   const [call,setCall] = useState("false");

   const nameSet = (m )=>{
      setEmpName(m);
      setCall("true");
   }
   const desSet=(m)=>{
      setEmpDes(m);
      setCall("true");
   }
   const usernameSet=(m)=>{
      //alert("usernames");
      //alert(m);
      setUsername(m);
      setCall("true");
   }
   const callset = () =>{
      setCall("false");
   }
   if (call === "false"){
   return (
        <div>
            <div id="nab-manageemp-wrapper">
                  <div id="currentemp">
                     <CurrentEmployees   />
                  </div>

                  <div id="empreq">
                     <EmployeeRequests  usernameSet={usernameSet} nameSet={nameSet} desSet={desSet}  />
                  </div>

            </div>
         <br></br><br></br><br></br>
         <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
         <br></br><br></br><br></br><br></br>
         <br></br><br></br><br></br><br></br>
         <br></br><br></br><br></br><br></br>
         <br></br><br></br><br></br><br></br>
         <br></br><br></br>
         <br></br><br></br>
      
         
         
         
         <Footer/>
         
      
         </div>
    );}
    else{
      return (
         <div>
             <div id="nab-manageemp-wrapper">
                   <div id="currentemp">
                      <CurrentEmployees callset={callset} empName={empName} empDes={empDes} username={username}  />
                   </div>
 
                   <div id="empreq">
                      <EmployeeRequests />
                   </div>
 
             </div>
          <br></br><br></br><br></br>
          <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
          <br></br><br></br><br></br><br></br>
          <br></br><br></br><br></br><br></br>
          <br></br><br></br><br></br><br></br>
          <br></br><br></br><br></br><br></br>
          <br></br><br></br>
          <br></br><br></br>
       
          
          
          
          <Footer/>
          
       
          </div>
     );
    }
  }
  
  export default ManageEmployeesPage;
  