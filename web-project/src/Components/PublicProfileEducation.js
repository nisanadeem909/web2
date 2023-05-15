import React,{useEffect, useState} from 'react'
import './ProfileEducation.css';
import ReactDOM from "react-dom";
import eduicon from './educ.jpg'
import workicon from './workk.png'

export default function PublicProfileEducation(props) {

    const [educList, setEducList] = useState([]);
    const [eduCon,setEduCon] = useState(<label className="kprofile_lbl_no">No Education Added Yet</label>);

    useEffect(() => {
        if (props.user)
        {
            if (props.user.education.length > 0)
            {
                setEducList(props.user.education);
                setEduCon ( <ul className="kprofile_ul">
                                    {props.user.education.map((list_item)=><li className="kprofile_education kprofile_li">
                                    <img className="kprofile_icon" src={eduicon}></img>
                                    <div className="kprofile_text">
                                        <label className="kprofile_listheading">{list_item.degree} • {list_item.major}</label>
                                        <label className="kprofile_listsubheading1">{list_item.school}</label>
                                        <label className="kprofile_listsubheading2">{list_item.startYear}-{list_item.endYear}</label>
                                    </div>
                                </li>)}
                        </ul>)
            }
        }
    }, [props.user]);

    return (
        <div className="kprofile_container">
            <div className="kprofile_section">
                <label className="kprofile_heading">Education</label>
                {eduCon}
            </div>
        </div>
    );
}