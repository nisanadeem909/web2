import React, { useEffect, useState } from 'react'
import './CompanyProfilePage.css'
import ProfileDetails from './ProfileDetailsPublic'
import CompanyHistory from './companyhistory'
import Rating from './ratingcompany'
import Employees from './workshere'
import OwnFeed from './OwnFeed';
import Footer from './Footer';
import Contact from './contactcompany';
import OpenVacancies from './openvacancies'
import axios from 'axios'
import { useLocation } from 'react-router-dom'

export default function UserPrivateProfilePage() {

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
        <div className='companyprof_container'>
            <div className="companyprof_header">
                <ProfileDetails user={user} type="company" cons={cons}/>
            </div>
            <div className="companyprof_left">
                <div className="companyprof_history">
                    <CompanyHistory company={user}/>
                </div>
                <div className="companyprof_rating">
                    <Rating company={user}/>
                </div>
                <div className="companyprof_emp">
                    <Employees company={user}/>
                </div>
            </div>
            <div className="companyprof_activity">
                <OwnFeed user={user} type="company" />
            </div>
            <div className='companyprof_right'>
                <div className='companyprof_contact'>
                    <Contact company={user}/>
                </div>
                <div className='companyprof_vacancies'>
                    <OpenVacancies company={user}/>
                </div>
            </div>
            <div className="companyprof_footer">
                <Footer/>
            </div>
        </div>
    );
}