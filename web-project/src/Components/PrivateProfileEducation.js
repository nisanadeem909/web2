import React from 'react'
import './ProfileEducation.css';
import ReactDOM from "react-dom";
import eduicon from './educ.jpg'
import editicon from './edit.png'

export default function PrivateProfileEducation() {

    return (
        <div className="container">
            <div className="section">
                <div className="header">
                    <label className="heading">Education</label>
                    <button class="addbtn">+</button>
                </div>
                <ul>
                    <li className="education">
                        <img className="icon" src={eduicon}></img>
                        <div className="text">
                            <label className="listheading">Bachelors in Software Engineering</label>
                            <label className="listsubheading1">National University of Emerging and Computer Sciences</label>
                            <div className="libtn">
                                <label className="listsubheading2">2020-2024</label>
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