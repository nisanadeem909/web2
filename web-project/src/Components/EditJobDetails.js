import React, { useEffect, useState } from 'react' 
import './JobDetails.css';
import JobDetails from './JobDetailsEditable';
import Footer from './Footer'
import { useLocation } from 'react-router-dom';

export default function EditJob() {

  const location = useLocation();
  const job = location.state;
  const [con,setCon] = useState(<label>Loading</label>)

  const editJob=(newJob)=>{
    /*alert("hiiiiiiiiii");
    setCon(<JobDetails job={newJob} editJob={editJob}/>);
    alert(JSON.stringify(newJob));*/
  }

  useEffect(()=>{
    setCon(<JobDetails job={job} editJob={editJob}/>);
  },[]);

    return (
      <div className='keditjob-container'>
          <div className='kviewjob-editjobdetails'>
            {con}
          </div>
          <div className='kviewjob-footer'>
            <Footer/>
          </div>

      </div>
    )
  }