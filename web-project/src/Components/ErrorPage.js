import React from 'react' 
import './Error.css';
import Footer from './Footer'
import icon from './error_icon.png'

export default function ViewApp() {

    return (
      <div className='kerror-container'>
          <div className='kerror-main'>
            <div className='kerror-inner'>
                <img src={icon} className='kerror-icon'></img>
                <label className='kerror-title'>Error!</label>
                <p className='kerror-para'>The page you are looking for does not exist!</p>
             </div>
          </div>
          <div className='kerror-footer'>
            <Footer/>
          </div>

      </div>
    )
  }