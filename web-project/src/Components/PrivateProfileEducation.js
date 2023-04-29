import React, { useState } from 'react'
import './ProfileEducation.css';
import ReactDOM from "react-dom";
import eduicon from './educ.jpg'
import editicon from './edit.png'
import AddEducationModal from './AddEducationModal'
import EditEducationModal from './EditEducationModal'
import DeleteConfirmationModal from './DeleteConfirmationModal'

export default function PrivateProfileEducation() {

    const [educList, setEducList] = useState([{'school':'FAST', 'degree': 'Bachelors', 'major': 'Software Engineering', 'startYear': '2020', 'endYear': '2024'}]);
    
    const add=(newEduc)=>{
        var list = [...educList];
        list.push(newEduc);
        setEducList(list);
    }

    const editEduc=(newEduc,oldEduc)=>{
        var list = [...educList];
        const index = list.indexOf(oldEduc);
        if (index != -1)
        {
            list[index].school = newEduc.school;
            list[index].degree = newEduc.degree;
            list[index].major = newEduc.major;
            list[index].startYear = newEduc.startYear;
            list[index].endYear = newEduc.endYear;
        }
        setEducList(list);
    }

    const remove=(oldEduc)=>{
        var list = [...educList];
        const index = list.indexOf(oldEduc);
        if (index > -1) {
            list.splice(index, 1);
        }
        setEducList(list);
    }

    return (
        <div className="kprofile_container">
            <div className="kprofile_section">
                <div className="kprofile_header">
                    <label className="kprofile_heading">Education</label>
                    <AddEducationModal addNewEduc={add}/>
                </div>
                <ul className="kprofile_ul">
                    {educList.map((list_item)=><li className="kprofile_education kprofile_li">
                        <img className="kprofile_icon" src={eduicon}></img>
                        <div className="kprofile_text">
                            <label className="kprofile_listheading">{list_item.degree} • {list_item.major}</label>
                            <label className="kprofile_listsubheading1">{list_item.school}</label>
                            <div className="kprofile_libtn">
                                <label className="kprofile_listsubheading2">{list_item.startYear}-{list_item.endYear}</label>
                                <div className='kprofile_editrembtns'>
                                    <EditEducationModal selectedEduc={list_item} changeEduc={editEduc}/>
                                    <DeleteConfirmationModal selectedItem={list_item} remove={remove}/>
                                </div>
                            </div>
                        </div>
                    </li>)}
                </ul>
            </div>
        </div>
    );
}