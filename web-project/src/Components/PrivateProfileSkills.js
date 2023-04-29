import React, { useState } from 'react'
import './ProfileEducation.css';
import ReactDOM from "react-dom";
import editicon from './edit.png'
import AddSkillModal from './AddSkillModal'

export default function PrivateProfileSkills() {

    const [skills,setSkills] = useState(['MERN Stack', 'JavaScript','HTML','Java','C++','C','C#','CSS','JSP','ASP']);

    const addNewSkill = (newSkill) => {
        var list = [...skills];
        list.push(newSkill);
        setSkills(list);
    }

    const removeSkill = (li) => {
        var list = [...skills];
        const index = list.indexOf(li);
        if (index > -1) {
            list.splice(index, 1);
        }
        setSkills(list);
    }

    return (
        <div className="kprofile_container">
            <div className="kprofile_section">
            <div className="kprofile_header">
                    <label className="kprofile_heading">Skills</label>
                    <AddSkillModal addNewSkill={addNewSkill}/>
                </div>
                <ul className="kprofile_skills kprofile_ul">
                    {skills.map((list_item)=>
                        <li className="kprofile_li">{list_item}<button onClick={()=>removeSkill(list_item)} className="kprofile_removebtn2">-</button></li>
                    )}
                </ul>
            </div>
        </div>
    );
}