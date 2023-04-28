import React from 'react'
import './ProfileEducation.css';
import ReactDOM from "react-dom";
import workicon from './workk.png'
import editicon from './edit.png'

export default function PublicProfileEducation() {

    return (
        <div className="kprofile_container">
            <div className="kprofile_section">
            <div className="kprofile_header">
                    <label className="kprofile_heading">Work Experience</label>
                    <button class="kprofile_addbtn">+</button>
                </div>
                <ul className="kprofile_ul">
                    <li className="kprofile_work kprofile_li">
                        <img className="kprofile_icon" src={workicon}></img>
                        <div className="kprofile_text">
                            <label className="kprofile_listheading">Teaching Assistant</label>
                            <label className="kprofile_listsubheading1">National University of Emerging and Computer Sciences</label>
                            <div className="kprofile_libtn">
                                <label className="kprofile_listsubheading2">2023-2023</label>
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