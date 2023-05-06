import React from 'react' 
import './KCompareApps.css';
import Main from './UserCompareApplicants'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom';

export default function CompareApps() {

    const navigate = useNavigate();

    return (
      <div className='kcompareapppage-container'>
          <div className='kcompareapppage-main'>
            <Main/>
          </div>
          <div className='kcompareapppage-footer'>
            <Footer/>
          </div>

      </div>
    )
  }