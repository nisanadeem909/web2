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
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
export default function UserHome() {
    const [user, setUser] = useState('');
    const [username, setUsername] = useState('');
 

  useEffect(() => {
    const sessionID = sessionStorage.getItem('sessionID');
    setUsername(sessionID);
   
    axios.get(`http://localhost:8000/${sessionID}`)
      .then(res => {
        console.log(res.data);
        setUser(res.data.username); 
      })
      .catch(error => console.log(error));
  }, []);



    return (
        <div className="uh_container">
            <div className="uh_searchbar">
          
                <Search/>
            </div>
            <div className='uh_prof_cv'>
                <div className="uh_profile">
                    <Profile user= {user} />
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