import React,{useEffect, useState} from 'react'
import './UserProfilePage.css'
import ProfileDetails from './ProfileDetailsPrivate'
import Skills from './PrivateProfileSkills'
import Education from './PrivateProfileEducation'
import Work from './PrivateProfileWork'
import OwnFeed from './OwnFeed';
import Footer from './Footer';
import axios from 'axios';

export default function UserPrivateProfilePage() {

    const [user,setUser] = useState(null);
    const [cons,setCons] = useState(null);

    useEffect(() => {
        const sessionID = sessionStorage.getItem('sessionID');
        const param = {"user":sessionID}
        
        //post request to server to get profile details 
        axios.post("http://localhost:8000/getuserprofiledetails",param).then((response) => {
            //alert(response.data);
            setUser(response.data.user);
            setCons(response.data.cons);
            //alert('hi');
        })
        .catch(function (error) {
            alert(error);
        });
    }, []);

    const addSkill=(newSkill)=>{
        var copy = user;
        copy.skills.push(newSkill);
        setUser(copy);
    }

    const removeSkill=(oldSkill)=>{
        var copy = user;
        const index = copy.skills.indexOf(oldSkill);
        if (index > -1) {
            copy.skills.splice(index, 1);
        }
        setUser(copy);
    }

    const addEduc=(newEduc)=>{
        var copy = user;
        copy.education.push(newEduc);
        setUser(copy);
    }

    const removeEduc=(oldEduc)=>{
        var copy = user;
        const index = copy.education.indexOf(oldEduc);
        if (index > -1) {
            copy.education.splice(index, 1);
        }
        setUser(copy);
    }

    const editEduc=(oldEduc,newEduc)=>{
        var copy = user;
        const index = copy.education.indexOf(oldEduc);
        if (index > -1) {
            copy.education[index].school = newEduc.school;
            copy.education[index].degree = newEduc.degree;
            copy.education[index].major = newEduc.major;
            copy.education[index].startYear = newEduc.startYear;
            copy.education[index].endYear = newEduc.endYear;
        }
        setUser(copy);
    }

    const addExp=(newExp)=>{
        var copy = user;
        copy.experience.push(newExp);
        setUser(copy);
    }

    const removeExp=(oldExp)=>{
        var copy = user;
        const index = copy.experience.indexOf(oldExp);
        if (index > -1) {
            copy.experience.splice(index, 1);
        }
        setUser(copy);
    }

    const editExp=(oldExp,newExp)=>{
        var copy = user;
        const index = copy.experience.indexOf(oldExp);
        if (index > -1) {
            copy.experience[index].company = newExp.company;
            copy.experience[index].position = newExp.position;
            copy.experience[index].startYear = newExp.startYear;
            copy.experience[index].endYear = newExp.endYear;
        }
        setUser(copy);
    }

    return (
        <div className='userprof_public_container'>
            <div className="userprof_public_header">
                <ProfileDetails user={user} type="user" cons={cons}/>
            </div>
            <div className="userprof_public_left">
                <div className="userprof_public_skills">
                    <Skills user={user} addSkill={addSkill} removeSkill={removeSkill}/>
                </div>
                <div className="userprof_public_education">
                    <Education user={user} addEduc={addEduc} removeEduc={removeEduc} editEduc={editEduc}/>
                </div>
                <div className="userprof_public_workexp">
                    <Work user={user} addExp={addExp} removeExp={removeExp} editExp={editExp}/>
                </div>
            </div>
            <div className="userprof_public_activity">
                <OwnFeed/>
            </div>
            <div className="userprof_public_footer">
                <Footer/>
            </div>
        </div>
    );
}