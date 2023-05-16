import React, { useEffect, useState } from 'react'
import jobicon from './workk.png'
import { useLocation, useNavigate } from 'react-router-dom';
import './CompareApplicants.css';
import CurrentApplicants from'./CurrentApplicants';
import ApplicantComparison from './ApplicantComparison';
import empicon from './dummy.jpg'
import Footer from './Footer'
import axios from 'axios';

function ApplicantComparisonPage() {
   const location = useLocation();
   const propsData = location.state.propsData;
   const [jobId,setJobId] = useState();
   useEffect(() => {
      
      //alert(propsData);
      console.log(propsData);
      setJobId(propsData);
    }, []);
   const [name,setName] = useState([]);
   const[username,setUsername] = useState([]);
   const appusernameset= (n)=>{
      setUsername(n);
      alert("I am in Parent.usernames=" + username);
      console.log(username);
   }
   const appnameset= (n)=>{
      setName(n);
      alert("I am in Parent. names=" + name);
      
      console.log(name);
   }
   return (
        <div>
        <div id="nab-allapps-wrapper">
             <div id="allapps-currentemp">
                <CurrentApplicants jobid={jobId} appusernameset={appusernameset} appnameset={appnameset}/>
             </div>

             <div id="allapps-empreq">
                <ApplicantComparison  />
             </div>
    

       </div>

       <br></br>
       <Footer></Footer>
       </div>
    );
  }
  
  export default ApplicantComparisonPage;
  