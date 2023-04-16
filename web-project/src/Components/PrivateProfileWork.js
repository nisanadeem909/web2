import React from 'react'
import './ProfileEducation.css';
import ReactDOM from "react-dom";
import workicon from './workk.png'
import editicon from './edit.png'
import delicon from './trash.png'

export default function PublicProfileEducation() {

    return (
        <div className="container">
            <div className="section">
            <div className="header">
                    <label className="heading">Work Experience</label>
                    <button class="addbtn">+</button>
                </div>
                <ul>
                    <li className="work">
                        <img className="icon" src={workicon}></img>
                        <div className="text">
                            <label className="listheading">Teaching Assistant</label>
                            <label className="listsubheading1">National University of Emerging and Computer Sciences</label>
                            <div className="libtn">
                                <label className="listsubheading2">2023-2023</label>
                                <div>
                                    <button className="editbtn"><img className="editicon" src={editicon} alt="Edit"/></button>
                                    <button className="removebtn">-</button>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}