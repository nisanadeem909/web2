import React from 'react' 
import './JobDetails.css';
import JobDetails from './JobDetailsEditable';
import Footer from './Footer'

export default function EditJob() {

    return (
      <div className='keditjob-container'>
          <div className='kviewjob-editjobdetails'>
            <JobDetails/>
          </div>
          <div className='kviewjob-footer'>
            <Footer/>
          </div>

      </div>
    )
  }