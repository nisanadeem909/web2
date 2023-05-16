import React, { useEffect } from 'react' 
import './KCompareApps.css';
import Footer from './Footer'
import { useLocation, useNavigate } from 'react-router-dom';

export default function AppSubmitted() {

    const navigate = useNavigate();
    const location = useLocation();
    const stateData = location.state;

    return (
      <div className='kcompareappbtnpage-container'>
          <div className='kcompareappbtnpage-content'>
            <p className='kcompareappbtnpage-para'>Your application has been submitted successfully! <br/>
                Would you like to see how you compare with other applicants? 
            </p>
            <div className='kcompareappbtnpage-btn-con'>
                <button className='kcompareappbtnpage-btn' onClick={()=>navigate('/user/applyjob/applied/compareapps',{state:stateData})}>Compare my application</button>
                <button className='kcompareappbtnpage-btn' onClick={()=>navigate('/user/jobs')}>Browse more jobs</button>
            </div>
          </div>
          <div className='kcompareappbtnpage-footer'>
            <Footer/>
          </div>

      </div>
    )
  }