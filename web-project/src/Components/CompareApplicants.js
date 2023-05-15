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
   
   return (
        <div>
        <div id="nab-allapps-wrapper">
             <div id="allapps-currentemp">
                <CurrentApplicants jobid={jobId} />
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
  