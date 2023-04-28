import React from 'react'
import './ProfileEducation.css';
import ReactDOM from "react-dom";
import eduicon from './educ.jpg'
import editicon from './edit.png'

export default function PrivateProfileEducation() {

    return (
        <div className="kprofile_container">
            <div className="kprofile_section">
                <div className="kprofile_header">
                    <label className="kprofile_heading">Education</label>
                    <button class="kprofile_addbtn">+</button>
                </div>
                <ul className="kprofile_ul">
                    <li className="kprofile_education kprofile_li">
                        <img className="kprofile_icon" src={eduicon}></img>
                        <div className="kprofile_text">
                            <label className="kprofile_listheading">Bachelors in Software Engineering</label>
                            <label className="kprofile_listsubheading1">National University of Emerging and Computer Sciences</label>
                            <div className="kprofile_libtn">
                                <label className="kprofile_listsubheading2">2020-2024</label>
                                <div>
                                    <button className="kprofile_editbtn"><img className="kprofile_editicon" src={editicon} alt="Edit"/></button>
                                    <button className="kprofile_removebtn">-</button>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}