import React, { useState, useEffect } from 'react'
import './ProfileEducation.css';
import ReactDOM from "react-dom";
import eduicon from './educ.jpg'
import editicon from './edit.png'
import AddEducationModal from './AddEducationModal'
import EditEducationModal from './EditEducationModal'
import DeleteConfirmationModal from './DeleteConfirmationModal'
import axios from 'axios';

export default function PrivateProfileEducation(props) {

    const [educList, setEducList] = useState([]);
    const [eduCon,setEduCon] = useState(<label className="kprofile_lbl_no">No Education Added Yet</label>);

    useEffect(() => {
        if (props.user)
        {
            if (props.user.education.length > 0)
            {
                setEducList(props.user.education);
                setEduCon ( <ul className="kprofile_ul">
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
                        </ul>)
            }
        }
    }, [props.user, educList]);
    
    const add=(newEduc)=>{

        var data = {'newEdu': newEduc, 'username':props.user.username};

        axios.post("http://localhost:8000/addeducation",data).then((response) => {
            //alert(response.data);
            //alert("done");
        })
        .catch(function (error) {
            alert(error);
        });

        props.addEduc(newEduc);

        var list = [...educList];
        list.push(newEduc);
        setEducList(list);
    }

    const editEduc=(newEduc,oldEduc)=>{

        var data = {'oldEduc': oldEduc, 'newEduc': newEduc, 'username':props.user.username};

        axios.post("http://localhost:8000/editeducation",data).then((response) => {
            //alert(response.data);
            //alert("done");
        })
        .catch(function (error) {
            alert(error);
        });

        props.editEduc(oldEduc,newEduc);

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
        var data = {'oldEduc': oldEduc, 'username':props.user.username};

        axios.post("http://localhost:8000/removeeducation",data).then((response) => {
            //alert(response.data);
            //alert("done");
        })
        .catch(function (error) {
            alert(error);
        });

        props.removeEduc(oldEduc);

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
                {eduCon}
            </div>
        </div>
    );
}