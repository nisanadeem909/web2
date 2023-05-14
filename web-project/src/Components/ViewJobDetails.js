import React from 'react' 
import './JobDetails.css';
import JobDetails from './JobDetails';
import JobRecs from './UserHomeJobRecs';
import Footer from './Footer'
import { useLocation } from 'react-router-dom';

export default function ViewJob() {

  const location = useLocation();
  const job = location.state;
  //alert(JSON.stringify(job));

    return (
      <div className='kviewjob-container'>
          <div className='kviewjob-jobsforyou'>
            <JobRecs></JobRecs>
          </div>
          <div className='kviewjob-jobdetails'>
            <JobDetails job={job}/>
          </div>
          <div className='kviewjob-footer'>
            <Footer/>
          </div>

      </div>
    )
  }