import React from 'react'
import jobicon from './workk.png'

import './CompareApplicants.css';
import CurrentApplicants from'./CurrentApplicants';
import ApplicantComparison from './ApplicantComparison';
import empicon from './dummy.jpg'
import Footer from './Footer'

function ApplicantComparisonPage() {
    return (
        <div>
        <div id="nab-allapps-wrapper">
             <div id="allapps-currentemp">
                <CurrentApplicants />
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
  