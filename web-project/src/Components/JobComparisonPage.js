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
   const [call,setCall] = useState("false");
   const [jobid,setJobId] = useState([]);
   const jobset = (message) => {
      //alert("Setting Jobs in Parent");
      setjobs(message);
      
      setCall("true");
    };
    const compset = (message) => {
      //alert("Setting Company in Parent");
      setcomps(message);
    };
    const idset = (message) =>{
      //alert("Setting Jobids in Parent");
      setJobId(message);
    }
    if (call === "false"){
            return (
               <div>
               <div id="nab-alljobs-wrapper">
                     <div id="alljobs-currentemp">
                        <CurrentJobs jobset={jobset} compset={compset} idset={idset} />
                     </div>
         {/*I don't know what to show here */}
                     <div id="alljobs-empreq">
                        <JobComparison />
            </div>
               </div>
               <br></br>
               <Footer></Footer>
               </div>
    );}
    else{
      return (
         <div>
         <div id="nab-alljobs-wrapper">
              <div id="alljobs-currentemp">
                 <CurrentJobs jobset={jobset} compset={compset} idset={idset}/>
              </div>
 
              <div id="alljobs-empreq">
                 <JobComparison jobset={compJobs} compset={comps} idset={jobid}/>
              </div>
 
 
        </div>
 
        <br></br>
        <Footer></Footer>
        </div>
     );
    }
  }
  
  export default JobComparisonPage;
  