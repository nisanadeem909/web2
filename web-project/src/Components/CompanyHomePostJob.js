import React from 'react'
import './PostJobCompanyHome.css';
import ReactDOM from "react-dom";
import jobicon from './workk.png'

export default function RecentlyAddedJobs() {

    return (
        <div className="container">

            <div className="section">
                <label className="heading">Post a Job</label>
                <hr></hr>
                <div className="inner">
                    <p>Do you want to post a new vacancy at your company?</p>
                    <button>Post Job</button>
                </div>
            </div>
        </div>
    );
}