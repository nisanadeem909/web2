import React, { useState,useEffect } from 'react'
import './ProfileEducation.css';
import ReactDOM from "react-dom";
import editicon from './edit.png'
import AddSkillModal from './AddSkillModal'
import axios from 'axios';

export default function PrivateProfileSkills(props) {
    
    const [skills,setSkills] = useState([]);
    const [skillCon,setSkillCon] = useState([<label className="kprofile_lbl_no">No Skills Added Yet</label>]);

    useEffect(() => {
        //alert(props.user);
        if (props.user)
        {
            if (props.user.skills.length > 0)
            {
                setSkills(props.user.skills);
                //alert(skills);
                setSkillCon(<ul className="kprofile_skills kprofile_ul">
                        {skills.map((list_item)=>
                            <li className="kprofile_li">{list_item}<button onClick={()=>removeSkill(list_item)} className="kprofile_removebtn2">-</button></li>
                        )}
                </ul>)
            }
        }
    }, [props.user, skills]);

    
    const addNewSkill = (newSkill) => {

        var data = {'newSkill': newSkill, 'username':props.user.username};

        axios.post("http://localhost:8000/addskill",data).then((response) => {
            //alert(response.data);
            //alert("done");
        })
        .catch(function (error) {
            alert(error);
        });

        props.addSkill(newSkill);

        var list = [...skills];
        list.push(newSkill);
        setSkills(list);
    }

    const removeSkill = (oldSkill) => {

        var data = {'oldSkill': oldSkill, 'username':props.user.username};

        axios.post("http://localhost:8000/removeskill",data).then((response) => {
            //alert(response.data);
            //alert("done");
        })
        .catch(function (error) {
            alert(error);
        });

        props.removeSkill(oldSkill);

        var list = [...skills];
        const index = list.indexOf(oldSkill);
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
                {skillCon}
            </div>
        </div>
    );
}