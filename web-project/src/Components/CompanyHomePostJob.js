import React from 'react'
import './PostJobCompanyHome.css';
import ReactDOM from "react-dom";
import jobicon from './workk.png'
import { useNavigate } from 'react-router-dom';

export default function RecentlyAddedJobs() {

    const navigate = useNavigate();

    return (
        <div className="ch_postjob_container">

            <div className="ch_postjob_section">
                <label className="ch_postjob_heading">Post a Job</label>
                <hr className='ch_postjob_hr'></hr>
                <div className="ch_postjob_inner">
                    <p>Do you want to post a new vacancy at your company?</p>
                    <button className='ch_postjob_button' onClick={()=>navigate('/company/postjob')}>Post Job</button>
                </div>
            </div>
        </div>
    );
}