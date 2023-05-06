import React from 'react' 
import './JobApplication.css';
import Application from './JobApplication';
import Footer from './Footer'

export default function ViewApp() {

    return (
      <div className='kviewapppage-container'>
          <div className='kviewapppage-app'>
            <Application/>
          </div>
          <div className='kviewapppage-footer'>
            <Footer/>
          </div>

      </div>
    )
  }