import React from 'react'
import './UserProfilePage.css'
import ProfileDetails from './ProfileDetailsPublic'
import Skills from './PublicProfileSkills'
import Education from './PublicProfileEducation'
import Work from './PublicProfileWork'
import OwnFeed from './OwnFeed';
import Footer from './Footer';

export default function UserPublicProfilePage() {
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
                <OwnFeed/>
            </div>
            <div className="userprof_public_footer">
                <Footer/>
            </div>
        </div>
    );
}