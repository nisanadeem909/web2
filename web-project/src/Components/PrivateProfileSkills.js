import React from 'react'
import './ProfileEducation.css';
import ReactDOM from "react-dom";
import editicon from './edit.png'

export default function PublicProfileEducation() {

    return (
        <div className="container">
            <div className="section">
            <div className="header">
                    <label className="heading">Skills</label>
                    <button class="addbtn">+</button>
                </div>
                <ul className="skills">
                    <li>MERN Stack<button className="removebtn2">-</button></li>
                    <li>JavaScript<button className="removebtn2">-</button></li>
                    <li>HTML<button className="removebtn2">-</button></li>
                    <li>Java<button className="removebtn2">-</button></li>
                    <li>C++<button className="removebtn2">-</button></li>
                    <li>C<button className="removebtn2">-</button></li>
                    <li>C#<button className="removebtn2">-</button></li>
                    <li>CSS<button className="removebtn2">-</button></li>
                    <li>JSP<button className="removebtn2">-</button></li>
                    <li>ASP<button className="removebtn2">-</button></li>
                </ul>
            </div>
        </div>
    );
}