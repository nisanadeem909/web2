import React,{useState,useEffect} from 'react'
import './ProfileEducation.css';
import ReactDOM from "react-dom";
import workicon from './workk.png'
import AddWorkExpModal from './AddWorkExpModal'
import EditWorkExpModal from './EditWorkExpModal'
import DeleteConfirmationModal from './DeleteConfirmationModal'
import axios from 'axios';

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
                            {workList.map((list_item)=><li className="kprofile_work kprofile_li">
                                    <img className="kprofile_icon" src={workicon}></img>
                                    <div className="kprofile_text">
                                        <label className="kprofile_listheading">{list_item.position}</label>
                                        <label className="kprofile_listsubheading1">{list_item.company}</label>
                                        <div className="kprofile_libtn">
                                            <label className="kprofile_listsubheading2">{list_item.startYear}-{list_item.endYear}</label>
                                            <div className='kprofile_editrembtns'>
                                                <EditWorkExpModal selectedExp={list_item} changeExp={edit}/>
                                                <DeleteConfirmationModal selectedItem={list_item} remove={remove}/>
                                            </div>
                                        </div>
                                    </div>
                                </li>)}
                            </ul>);
            }
        }
    }, [props.user, workList]);

    const add=(newExp)=>{

        var data = {'newExp': newExp, 'username':props.user.username};

        axios.post("http://localhost:8000/addexperience",data).then((response) => {
            //alert(response.data);
            //alert("done");
        })
        .catch(function (error) {
            alert(error);
        });

        props.addExp(newExp);

        var list = [...workList];
        list.push(newExp);
        setWorkList(list);
    }

    const edit=(newExp,oldExp)=>{

        var data = {'oldExp': oldExp, 'newExp': newExp, 'username':props.user.username};

        axios.post("http://localhost:8000/editexperience",data).then((response) => {
            //alert(response.data);
            //alert("done");
        })
        .catch(function (error) {
            alert(error);
        });

        props.editExp(oldExp,newExp);

        var list = [...workList];
        const index = list.indexOf(oldExp);
        if (index != -1)
        {
            list[index].company = newExp.company;
            list[index].position = newExp.position;
            list[index].startYear = newExp.startYear;
            list[index].endYear = newExp.endYear;
        }
        setWorkList(list);
    }

    const remove=(oldExp)=>{

        var data = {'oldExp': oldExp, 'username':props.user.username};

        axios.post("http://localhost:8000/removeexperience",data).then((response) => {
            //alert(response.data);
            //alert("done");
        })
        .catch(function (error) {
            alert(error);
        });

        props.removeExp(oldExp);

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
                {expCon}
            </div>
        </div>
    );
}