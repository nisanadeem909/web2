import React,{useState} from 'react'
import './ProfileEducation.css';
import ReactDOM from "react-dom";
import workicon from './workk.png'
import AddWorkExpModal from './AddWorkExpModal'
import EditWorkExpModal from './EditWorkExpModal'
import DeleteConfirmationModal from './DeleteConfirmationModal'

export default function PublicProfileEducation() {

    const [workList,setWorkList] = useState([{'organization':'FAST','position':'Teaching Assistant','startYear':'2023','endYear':'2023'}]);

    const add=(newExp)=>{
        var list = [...workList];
        list.push(newExp);
        setWorkList(list);
    }

    const edit=(newExp,oldExp)=>{
        var list = [...workList];
        const index = list.indexOf(oldExp);
        if (index != -1)
        {
            list[index].organization = newExp.organization;
            list[index].position = newExp.position;
            list[index].startYear = newExp.startYear;
            list[index].endYear = newExp.endYear;
        }
        setWorkList(list);
    }

    const remove=(oldExp)=>{
        var list = [...workList];
        const index = list.indexOf(oldExp);
        if (index > -1) {
            list.splice(index, 1);
        }
        setWorkList(list);
    }

    return (
        <div className="kprofile_container">
            <div className="kprofile_section">
            <div className="kprofile_header">
                    <label className="kprofile_heading">Work Experience</label>
                    <AddWorkExpModal addNewExp={add}/>
                </div>
                <ul className="kprofile_ul">
                {workList.map((list_item)=><li className="kprofile_work kprofile_li">
                        <img className="kprofile_icon" src={workicon}></img>
                        <div className="kprofile_text">
                            <label className="kprofile_listheading">{list_item.position}</label>
                            <label className="kprofile_listsubheading1">{list_item.organization}</label>
                            <div className="kprofile_libtn">
                                <label className="kprofile_listsubheading2">{list_item.startYear}-{list_item.endYear}</label>
                                <div className='kprofile_editrembtns'>
                                    <EditWorkExpModal selectedExp={list_item} changeExp={edit}/>
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