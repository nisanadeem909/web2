import React from 'react'
import CompanyProfile from './CompanyProfile'
import PostJob from './CompanyHomePostJob';
import AddPost from './AddPost';
import Feed from './Feed';
import Footer from './Footer';
import Search from './Search';
import './CompanyHome.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function CompanyHome() {
    const [user, setUser] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const sessionID = sessionStorage.getItem('sessionID');
       
        axios.get(`http://localhost:8000/company/${sessionID}`)
          .then(res => {
            setIsLoading(false); 
            setUser(res.data); 
          })
          .catch(error => console.log(error));
    
         

      }, []);
    

      return (
        <div className="kch_container">
          <div className="kch_searchbar">
            <Search />
          </div>
          {!isLoading && (
            <>
              <div className="kch_profile">
                <CompanyProfile user={user} />
              </div>
              <div className="kch_addpost">
                <AddPost />
              </div>
              <div className="kch_feed">
                <Feed />
              </div>
              <div className="kch_jobpost">
                <PostJob />
              </div>
              <div className="kch_footer">
                <Footer />
              </div>
            </>
          )}
        </div>
      );
      
}