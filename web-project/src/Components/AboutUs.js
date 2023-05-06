import React from 'react' 
import './AboutUs.css';
import Footer from './Footer'
import logo from './logo1.png';

export default function ViewApp() {

    return (
      <div className='kaboutus-container'>
          <div className='kaboutus-main'>
            <div className='kaboutus-section'>
                <img src={logo} className='kaboutus-logo'></img>
                <label className='kaboutus-title'>About Jobify</label>
                <hr className='kaboutus-hr'></hr>
                <p className='kaboutus-paragraph'>Find your next opportunity with us - the ultimate job finder platform connecting professionals and businesses worldwide.</p>
            </div>
          </div>
          <div className='kaboutus-footer'>
            <Footer/>
          </div>

      </div>
    )
  }