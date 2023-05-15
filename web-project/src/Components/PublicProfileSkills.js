import React, { useEffect, useState } from 'react'
import './ProfileEducation.css';
import ReactDOM from "react-dom";
import eduicon from './educ.jpg'
import workicon from './workk.png'

export default function PublicProfileEducation(props) {

    const [skills,setSkills] = useState([]);
    const [skillCon,setSkillCon] = useState([<label className="kprofile_lbl_no">No Skills Added Yet</label>]);

    useEffect(() => {
        if (props.user)
        {
            if (props.user.skills.length > 0)
            {
                setSkills(props.user.skills);
                setSkillCon(<ul className="kprofile_skills kprofile_ul">
                            {props.user.skills.map((list_item)=>
                                    <li className="kprofile_li">{list_item}</li>
                                )}
                            </ul>)
            }
        }
    }, [props.user]);

    return (
        <div className="kprofile_container">
            <div className="kprofile_section">
                <label className="kprofile_heading">Skills</label>
                {skillCon}
            </div>
        </div>
    );
}