import React from 'react' 
import './PostJobPage.css';
import Form from './ApplyJobForm';
import Footer from './Footer'
import { useLocation } from 'react-router-dom';

export default function ApplyJob() {

  const location = useLocation();
  const job = location.state;

    return (
      <div className='kpostjobpage-container'>
          <div className='kpostjobpage-form'>
            <Form job={job}/>
          </div>
          <div className='kpostjobpage-footer'>
            <Footer/>
          </div>

      </div>
    )
  }