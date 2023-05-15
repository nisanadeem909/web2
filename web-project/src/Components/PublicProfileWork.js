import React,{useEffect, useState} from 'react'
import './ProfileEducation.css';
import ReactDOM from "react-dom";
import workicon from './workk.png'

export default function PublicProfileEducation(props) {

    const [workList,setWorkList] = useState([]);
    const [expCon,setExpCon] = useState(<label className="kprofile_lbl_no">No Experience Added Yet</label>);

    useEffect(() => {
        if (props.user)
        {
            if (props.user.experience.length > 0)
            {
                setWorkList(props.user.experience);
                setExpCon ( <ul className="kprofile_ul">
                                {props.user.experience.map((list_item)=><li className="kprofile_work kprofile_li">
                                    <img className="kprofile_icon" src={workicon}></img>
                                    <div className="kprofile_text">
                                        <label className="kprofile_listheading">{list_item.position}</label>
                                        <label className="kprofile_listsubheading1">{list_item.company}</label>
                                        <label className="kprofile_listsubheading2">{list_item.startYear}-{list_item.endYear}</label>
                                    </div>
                                </li>)}
                            </ul>);
            }
        }
    }, [props.user]);
    
    return (
        <div className="kprofile_container">
            <div className="kprofile_section">
                <label className="kprofile_heading">Work Experience</label>
                {expCon}
            </div>
        </div>
    );
}