import React, { useEffect, useState } from 'react'
import './UserProfilePage.css'
import ProfileDetails from './ProfileDetailsPublic'
import Skills from './PublicProfileSkills'
import Education from './PublicProfileEducation'
import Work from './PublicProfileWork'
import OwnFeed from './OwnFeed';
import Footer from './Footer';
import { useLocation } from 'react-router-dom'
import axios from 'axios'

export default function UserPublicProfilePage() {

    const location = useLocation();
    const user = location.state;
    const [cons,setCons] = useState();
    
    useEffect(()=>{
        var param = {"username":user.username};
        axios.post(`http://localhost:8000/getconnections`,param)
      .then(res => {
          setCons(res.data);
          //alert(JSON.stringify(res.data));
      })
      .catch(error => alert(error));
    },[]);

    return (
        <div className='userprof_public_container'>
            <div className="userprof_public_header">
                <ProfileDetails user={user} type="user" cons={cons}/>
            </div>
            <div className="userprof_public_left">
                <div className="userprof_public_skills">
                    <Skills user={user}/>
                </div>
                <div className="userprof_public_education">
                    <Education user={user}/>
                </div>
                <div className="userprof_public_workexp">
                    <Work user={user}/>
                </div>
            </div>
            <div className="userprof_public_activity">
                <OwnFeed user={user} type="user" />
            </div>
            <div className="userprof_public_footer">
                <Footer/>
            </div>
        </div>
    );
}