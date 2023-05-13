import React,{useState,useEffect} from 'react'
import './CompanyProfilePage.css'
import ProfileDetails from './ProfileDetailsPrivate'
import CompanyHistory from './companyhistory-editable'
import Rating from './ratingcompany'
import Employees from './workshere'
import Feed from './Feed';
import Footer from './Footer';
import Contact from './contactcompany-editable';
import OpenVacancies from './openvacancies-editable'
import axios from 'axios'

export default function UserPrivateProfilePage() {

    const [company,setCompany] = useState(null);
    const [cons,setCons] = useState(null);

    useEffect(() => {
        const sessionID = sessionStorage.getItem('sessionID');
        const param = {"user":sessionID}

        //post request to server to get profile details 
        axios.post("http://localhost:8000/getcompanyprofiledetails",param).then((response) => {
            //alert(response.data);
            setCompany(response.data.company);
            setCons(response.data.cons);
            //alert('hi');
        })
        .catch(function (error) {
            alert(error);
        });
    }, []);

    return (
        <div className='companyprof_container'>
            <div className="companyprof_header">
                <ProfileDetails user={company} type="company" cons={cons}/>
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