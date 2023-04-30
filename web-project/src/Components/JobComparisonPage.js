import React from 'react'
import jobicon from './workk.png'

import './JobComparisonPage.css';
import CurrentJobs from'./CurrentJobs';
import JobComparison from './JobComparison';
import empicon from './dummy.jpg'
import Footer from './Footer'

function JobComparisonPage() {
    return (
        <div>
        <div id="nab-alljobs-wrapper">
             <div id="alljobs-currentemp">
                <CurrentJobs />
             </div>

             <div id="alljobs-empreq">
                <JobComparison  />
             </div>


       </div>

       <br></br>
       <Footer></Footer>
       </div>
    );
  }
  
  export default JobComparisonPage;
  