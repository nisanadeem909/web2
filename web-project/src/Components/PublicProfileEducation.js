import React from 'react'
import './ProfileEducation.css';
import ReactDOM from "react-dom";
import eduicon from './educ.jpg'
import workicon from './workk.png'

export default function PublicProfileEducation() {

    return (
        <div className="kprofile_container">
            <div className="kprofile_section">
                <label className="kprofile_heading">Education</label>
                <ul className="kprofile_ul">
                    <li className="kprofile_education kprofile_li">
                        <img className="kprofile_icon" src={eduicon}></img>
                        <div className="kprofile_text">
                            <label className="kprofile_listheading">Bachelors in Software Engineering</label>
                            <label className="kprofile_listsubheading1">National University of Emerging and Computer Sciences</label>
                            <label className="kprofile_listsubheading2">2020-2024</label>
                        </div>
                    </li>
                    <li className="kprofile_education kprofile_li">
                        <img className="kprofile_icon" src={eduicon}></img>
                        <div className="kprofile_text">
                            <label className="kprofile_listheading">A Level</label>
                            <label className="kprofile_listsubheading1">Lahore Grammar School</label>
                            <label className="kprofile_listsubheading2">2018-2020</label>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}