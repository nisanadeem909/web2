import React from 'react'
import './UserProfilePage.css'
import ProfileDetails from './ProfileDetailsPrivate'
import Skills from './PrivateProfileSkills'
import Education from './PrivateProfileEducation'
import Work from './PrivateProfileWork'
import Feed from './Feed';
import Footer from './Footer';

export default function UserPrivateProfilePage() {
    return (
        <div className='userprof_public_container'>
            <div className="userprof_public_header">
                <ProfileDetails/>
            </div>
            <div className="userprof_public_left">
                <div className="userprof_public_skills">
                    <Skills/>
                </div>
                <div className="userprof_public_education">
                    <Education/>
                </div>
                <div className="userprof_public_workexp">
                    <Work/>
                </div>
            </div>
            <div className="userprof_public_activity">
                <Feed/>
            </div>
            <div className="userprof_public_footer">
                <Footer/>
            </div>
        </div>
    );
}