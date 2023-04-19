import React from 'react'
import './ProfileEducation.css';
import ReactDOM from "react-dom";
import editicon from './edit.png'

export default function PublicProfileEducation() {

    return (
        <div className="kprofile_container">
            <div className="kprofile_section">
            <div className="kprofile_header">
                    <label className="kprofile_heading">Skills</label>
                    <button class="kprofile_addbtn">+</button>
                </div>
                <ul className="kprofile_skills kprofile_ul">
                    <li className="kprofile_li">MERN Stack<button className="kprofile_removebtn2">-</button></li>
                    <li className="kprofile_li">JavaScript<button className="kprofile_removebtn2">-</button></li>
                    <li className="kprofile_li">HTML<button className="kprofile_removebtn2">-</button></li>
                    <li className="kprofile_li">Java<button className="kprofile_removebtn2">-</button></li>
                    <li className="kprofile_li">C++<button className="kprofile_removebtn2">-</button></li>
                    <li className="kprofile_li">C<button className="kprofile_removebtn2">-</button></li>
                    <li className="kprofile_li">C#<button className="kprofile_removebtn2">-</button></li>
                    <li className="kprofile_li">CSS<button className="kprofile_removebtn2">-</button></li>
                    <li className="kprofile_li">JSP<button className="kprofile_removebtn2">-</button></li>
                    <li className="kprofile_li">ASP<button className="kprofile_removebtn2">-</button></li>
                </ul>
            </div>
        </div>
    );
}