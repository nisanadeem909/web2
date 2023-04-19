import React from 'react'
import './UserHomeJobs.css';
import ReactDOM from "react-dom";
import jobicon from './workk.png'

export default function RecentlyAddedJobs() {

    return (
        <div className="uhjobs_container">
            <div className="uhjobs_section">
                <label className="uhjobs_heading">Jobs For You</label>
                <ul className="uhjobs_ul">
                    <li className="uhjobs_li">
                            <img className="uhjobs_icon" src={jobicon}></img>
                            <div className="uhjobs_text">
                                <label className="uhjobs_listheading">Software Engineer</label>
                                <label className="uhjobs_listsubheading1">ABC Software</label>
                                <label className="uhjobs_listsubheading2">Lahore, Pakistan</label>
                                <div className="uhjobs_buttons">
                                    <button className="uhjobs_button">Apply</button>
                                    <button className="uhjobs_button">View Details</button>
                                </div>
                            </div>
                    </li>

                    
                    <li className="uhjobs_li">
                            <img className="uhjobs_icon" src={jobicon}></img>
                            <div className="uhjobs_text">
                                <label className="uhjobs_listheading">Intern</label>
                                <label className="uhjobs_listsubheading1">TechSoft</label>
                                <label className="uhjobs_listsubheading2">Islamabad, Pakistan</label>
                                <div className="uhjobs_buttons">
                                    <button className="uhjobs_button">Apply</button>
                                    <button className="uhjobs_button">View Details</button>
                                </div>
                            </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}