import React from 'react'
import './ProfileEducation.css';
import ReactDOM from "react-dom";
import eduicon from './educ.jpg'
import workicon from './workk.png'

export default function PublicProfileEducation() {

    return (
        <div className="container">
            <div className="section">
                <label className="heading">Skills</label>
                <ul className="skills">
                    <li>MERN Stack</li>
                    <li>JavaScript</li>
                    <li>HTML</li>
                    <li>Java</li>
                    <li>C++</li>
                    <li>C</li>
                    <li>C#</li>
                    <li>CSS</li>
                    <li>JSP</li>
                    <li>ASP</li>
                </ul>
            </div>
        </div>
    );
}