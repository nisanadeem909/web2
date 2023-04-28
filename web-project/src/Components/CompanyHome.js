import React from 'react'
import Profile from './Profile'
import PostJob from './CompanyHomePostJob';
import AddPost from './AddPost';
import Feed from './Feed';
import Footer from './Footer';
import Search from './Search';
import './CompanyHome.css'

export default function CompanyHome() {

    return (
        <div className="kch_container">
            <div className="kch_searchbar">
                <Search/>
            </div>
            <div className="kch_profile">
                    <Profile/>
            </div>
            <div className="kch_addpost">
                <AddPost/>
            </div>
            <div className="kch_feed">
                <Feed/>
            </div>
            <div className="kch_jobpost">
                <PostJob/>
            </div>
            <div className="kch_footer">
                <Footer/>
            </div>
            
        </div>
    );
}