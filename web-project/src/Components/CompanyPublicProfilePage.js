import React from 'react'
import './CompanyProfilePage.css'
import ProfileDetails from './ProfileDetailsPublic'
import CompanyHistory from './companyhistory'
import Rating from './ratingcompany'
import Employees from './workshere'
import Feed from './Feed';
import Footer from './Footer';
import Contact from './contactcompany';
import OpenVacancies from './openvacancies'

export default function UserPrivateProfilePage() {
    return (
        <div className='companyprof_container'>
            <div className="companyprof_header">
                <ProfileDetails/>
            </div>
            <div className="companyprof_left">
                <div className="companyprof_history">
                    <CompanyHistory/>
                </div>
                <div className="companyprof_rating">
                    <Rating/>
                </div>
                <div className="companyprof_emp">
                    <Employees/>
                </div>
            </div>
            <div className="companyprof_activity">
                <Feed/>
            </div>
            <div className='companyprof_right'>
                <div className='companyprof_contact'>
                    <Contact/>
                </div>
                <div className='companyprof_vacancies'>
                    <OpenVacancies/>
                </div>
            </div>
            <div className="companyprof_footer">
                <Footer/>
            </div>
        </div>
    );
}