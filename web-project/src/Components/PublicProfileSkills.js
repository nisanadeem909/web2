import React from 'react'
import './ProfileEducation.css';
import ReactDOM from "react-dom";
import eduicon from './educ.jpg'
import workicon from './workk.png'

export default function PublicProfileEducation() {

    return (
        <div className="kprofile_container">
            <div className="kprofile_section">
                <label className="kprofile_heading">Skills</label>
                <ul className="kprofile_skills kprofile_ul">
                    <li className="kprofile_li">MERN Stack</li>
                    <li className="kprofile_li">JavaScript</li>
                    <li className="kprofile_li">HTML</li>
                    <li className="kprofile_li">Java</li>
                    <li className="kprofile_li">C++</li>
                    <li className="kprofile_li">C</li>
                    <li className="kprofile_li">C#</li>
                    <li className="kprofile_li">CSS</li>
                    <li className="kprofile_li">JSP</li>
                    <li className="kprofile_li">ASP</li>
                </ul>
            </div>
        </div>
    );
}