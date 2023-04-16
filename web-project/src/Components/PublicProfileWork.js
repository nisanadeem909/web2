import React from 'react'
import './ProfileEducation.css';
import ReactDOM from "react-dom";
import workicon from './workk.png'

export default function PublicProfileEducation() {

    return (
        <div className="container">
            <div className="section">
                <label className="heading">Work Experience</label>
                <ul>
                    <li className="work">
                        <img className="icon" src={workicon}></img>
                        <div className="text">
                            <label className="listheading">Teaching Assistant</label>
                            <label className="listsubheading1">National University of Emerging and Computer Sciences</label>
                            <label className="listsubheading2">2023-2023</label>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}