import React,{useState} from 'react'
import './ProfileEducation.css';
import ReactDOM from "react-dom";
import workicon from './workk.png'

export default function PublicProfileEducation() {

    const [workList,setWorkList] = useState([{'organization':'FAST','position':'Teaching Assistant','startYear':'2023','endYear':'2023'}]);

    return (
        <div className="kprofile_container">
            <div className="kprofile_section">
                <label className="kprofile_heading">Work Experience</label>
                <ul className="kprofile_ul">
                    {workList.map((list_item)=><li className="kprofile_work kprofile_li">
                        <img className="kprofile_icon" src={workicon}></img>
                        <div className="kprofile_text">
                            <label className="kprofile_listheading">{list_item.position}</label>
                            <label className="kprofile_listsubheading1">{list_item.organization}</label>
                            <label className="kprofile_listsubheading2">{list_item.startYear}-{list_item.endYear}</label>
                        </div>
                    </li>)}
                </ul>
            </div>
        </div>
    );
}