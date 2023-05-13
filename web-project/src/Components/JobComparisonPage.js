import React from 'react'
import jobicon from './workk.png'

import './JobComparisonPage.css';
import CurrentJobs from'./CurrentJobs';
import JobComparison from './JobComparison';
import empicon from './dummy.jpg'
import Footer from './Footer'
import {useState} from 'react';
function JobComparisonPage() {
    
   const [compJobs,setjobs] = useState([]);
   const [comps,setcomps] = useState([]);
   
   const jobset = (message) => {
      //alert("Setting Jobs in Parent");
      setjobs(message);
    };
    const compset = (message) => {
      //alert("Setting Company in Parent");
      setcomps(message);
    };
   return (
        <div>
        <div id="nab-alljobs-wrapper">
             <div id="alljobs-currentemp">
                <CurrentJobs jobset={jobset} compset={compset} />
             </div>

             <div id="alljobs-empreq">
                <JobComparison jobset={compJobs} compset={comps} />
             </div>


       </div>

       <br></br>
       <Footer></Footer>
       </div>
    );
  }
  
  export default JobComparisonPage;
  