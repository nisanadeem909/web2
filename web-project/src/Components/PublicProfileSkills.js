import React, { useState } from 'react'
import './ProfileEducation.css';
import ReactDOM from "react-dom";
import eduicon from './educ.jpg'
import workicon from './workk.png'

export default function PublicProfileEducation() {

    const [skills,setSkills] = useState(['MERN Stack', 'JavaScript','HTML','Java','C++','C','C#','CSS','JSP','ASP']);

    return (
        <div className="kprofile_container">
            <div className="kprofile_section">
                <label className="kprofile_heading">Skills</label>
                <ul className="kprofile_skills kprofile_ul">
                {skills.map((list_item)=>
                        <li className="kprofile_li">{list_item}</li>
                    )}
                </ul>
            </div>
        </div>
    );
}