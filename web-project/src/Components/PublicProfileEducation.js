import React from 'react'
import './ProfileEducation.css';
import ReactDOM from "react-dom";
import eduicon from './educ.jpg'
import workicon from './workk.png'

export default function PublicProfileEducation() {

    return (
        <div className="container">
            <div className="section">
                <label className="heading">Education</label>
                <ul>
                    <li className="education">
                        <img className="icon" src={eduicon}></img>
                        <div className="text">
                            <label className="listheading">Bachelors in Software Engineering</label>
                            <label className="listsubheading1">National University of Emerging and Computer Sciences</label>
                            <label className="listsubheading2">2020-2024</label>
                        </div>
                    </li>
                    <li className="education">
                        <img className="icon" src={eduicon}></img>
                        <div className="text">
                            <label className="listheading">A Level</label>
                            <label className="listsubheading1">Lahore Grammar School</label>
                            <label className="listsubheading2">2018-2020</label>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}