import React from 'react'
import './ProfileEducation.css';
import ReactDOM from "react-dom";
import workicon from './workk.png'

export default function PublicProfileEducation() {

    return (
        <div className="kprofile_container">
            <div className="kprofile_section">
                <label className="kprofile_heading">Work Experience</label>
                <ul className="kprofile_ul">
                    <li className="kprofile_work kprofile_li">
                        <img className="kprofile_icon" src={workicon}></img>
                        <div className="kprofile_text">
                            <label className="kprofile_listheading">Teaching Assistant</label>
                            <label className="kprofile_listsubheading1">National University of Emerging and Computer Sciences</label>
                            <label className="kprofile_listsubheading2">2023-2023</label>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}