import React from 'react'
import Navbar from './Navbar'
import Profile from './Profile'
import MakeCV from './MakeCV'
import RecentlyAddedJobs from './UserHomeJobRecs';
import AddPost from './AddPost';
import Feed from './Feed';
import Footer from './Footer';
import Search from './Search';
import './UserHome.css'

export default function UserHome() {

    return (
        <div className="uh_container">
            <div className="uh_searchbar">
                <Search/>
            </div>
            <div className='uh_prof_cv'>
                <div className="uh_profile">
                    <Profile/>
                </div>
                <div className="uh_cv">
                    <MakeCV/>
                </div>
            </div>
            <div className="uh_addpost">
                <AddPost/>
            </div>
            <div className="uh_feed">
                <Feed/>
            </div>
            <div className="uh_jobrecs">
                <RecentlyAddedJobs/>
            </div>
            <div className="uh_footer">
                <Footer/>
            </div>
            
        </div>
    );
}