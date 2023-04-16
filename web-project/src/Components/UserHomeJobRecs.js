import React from 'react'
import './UserHomeJobs.css';
import ReactDOM from "react-dom";
import jobicon from './workk.png'

export default function RecentlyAddedJobs() {

    return (
        <div className="container">
            <div className="section">
                <label className="heading">Jobs For You</label>
                <ul>
                    <li>
                            <img className="icon" src={jobicon}></img>
                            <div className="text">
                                <label className="listheading">Software Engineer</label>
                                <label className="listsubheading1">ABC Software</label>
                                <label className="listsubheading2">Lahore, Pakistan</label>
                                <div>
                                    <button>Apply</button>
                                    <button>View Details</button>
                                </div>
                            </div>
                    </li>

                    
                    <li>
                            <img className="icon" src={jobicon}></img>
                            <div className="text">
                                <label className="listheading">Intern</label>
                                <label className="listsubheading1">TechSoft</label>
                                <label className="listsubheading2">Islamabad, Pakistan</label>
                                <div>
                                    <button>Apply</button>
                                    <button>View Details</button>
                                </div>
                            </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}