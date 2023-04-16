import React from 'react'
import './UserHomeJobs.css';
import ReactDOM from "react-dom";
import jobicon from './workk.png'

export default function RecentlyAddedJobs() {

    return (
        <div className="container">

            <div className="section">
                <label className="heading">Post a Job</label>
                <hr></hr>
                <div className="postjob">
                    <div className="field">
                        <label className="title">Title:</label>
                        <input type="text" placeholder="Job Title" required></input>
                    </div>
                    <div className="field">
                        <label className="title">Description:</label>
                        <textarea placeholder="Describe the job in a few words" required/>
                    </div>
                    <div className="field">
                        <label className="title">Education Requirements:</label>
                        <input type="text" placeholder="Degree Required" required></input>
                    </div>
                    <div className="field">
                        <label className="title">Experience Required:</label>
                        <input type="number" placeholder="Years of Experience" required></input>
                    </div>
                    <div className="field">
                        <label className="title">Salary:</label>
                        <input type="number" placeholder="Estimated Salary" required></input>
                    </div>
                    <div className="field">
                        <label className="title">Location:</label>
                        <select name="location" id="location">
                            <option value="lhr_pk">Lahore, Pakistan</option>
                            <option value="isl_pk">Islamabad, Pakistan</option>
                        </select>
                    </div>
                    <div className="buttons">
                        <button>Post</button>
                        <button className="cancelbtn">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
}