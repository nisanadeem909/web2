import React from 'react' 
import './PostJobPage.css';
import Form from './ApplyJobForm';
import Footer from './Footer'

export default function PostJob() {

    return (
      <div className='kpostjobpage-container'>
          <div className='kpostjobpage-form'>
            <Form/>
          </div>
          <div className='kpostjobpage-footer'>
            <Footer/>
          </div>

      </div>
    )
  }