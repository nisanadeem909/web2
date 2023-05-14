import React,{useState,useEffect} from 'react'
import './CompanyProfilePage.css'
import ProfileDetails from './ProfileDetailsPrivate'
import CompanyHistory from './companyhistory-editable'
import Rating from './ratingcompany'
import Employees from './workshere'
import OwnFeed from './OwnFeed';
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

    const setAboutUs=(newAboutUs)=>{
        var copy = company;
        //alert(JSON.stringify(company));
        copy = {...copy, "aboutUs":newAboutUs}
        //alert(JSON.stringify(copy));
        setCompany(copy);
    }

    const setContact=(newContact)=>{
        var copy = company;
        //alert(JSON.stringify(company));
        copy = {...copy, "contact":newContact}
        //alert(JSON.stringify(copy));
        setCompany(copy);
    }


    return (
        <div className='companyprof_container'>
            <div className="companyprof_header">
                <ProfileDetails user={company} type="company" cons={cons}/>
            </div>
            <div className="companyprof_left">
                <div className="companyprof_history">
                    <CompanyHistory company={company} setAboutUs={setAboutUs}/>
                </div>
                <div className="companyprof_rating">
                    <Rating company={company} type="private"/>
                </div>
                <div className="companyprof_emp">
                    <Employees company={company}/>
                </div>
            </div>
            <div className="companyprof_activity">
                <OwnFeed/>
            </div>
            <div className='companyprof_right'>
                <div className='companyprof_contact'>
                    <Contact company={company} add={setContact}/>
                </div>
                <div className='companyprof_vacancies'>
                    <OpenVacancies company={company}/>
                </div>
            </div>
            <div className="companyprof_footer">
                <Footer/>
            </div>
        </div>
    );
}