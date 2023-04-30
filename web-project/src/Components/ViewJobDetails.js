import React from 'react' 
import './JobDetails.css';
import JobDetails from './JobDetails';
import JobRecs from './UserHomeJobRecs';
import Footer from './Footer'

export default function ViewJob() {

    return (
      <div className='kviewjob-container'>
          <div className='kviewjob-jobsforyou'>
            <JobRecs></JobRecs>
          </div>
          <div className='kviewjob-jobdetails'>
            <JobDetails/>
          </div>
          <div className='kviewjob-footer'>
            <Footer/>
          </div>

      </div>
    )
  }