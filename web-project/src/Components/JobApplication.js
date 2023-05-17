import React, { useState, useEffect } from 'react';
import './JobApplication.css';
import { useNavigate } from 'react-router-dom';
import picture from './dummy.jpg';
import { Document, Page } from 'react-pdf';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import ResumeView from './ResumeView';

export default function Application() {
  const location = useLocation();
  const propsData = location.state;
  const navigate = useNavigate();
  const [allApp, setAllApp] = useState(null);
  const [job, setJob] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [con, setCon] = useState(null);

 



  const openResume = (data) => {
   
    navigate("view" ,  {state: data });

  };
  const openProfile=(username)=>{
   

    if (username == sessionStorage.getItem("sessionID"))
        {
            var path = "/" + sessionStorage.getItem("userType") + "/ownprofile";
            navigate(path);
            return;
        }

    //find user type
    var param = {"user":username};
    axios.post(`http://localhost:8000/getusertype`,param)
      .then(res => {
          if (res.data.type != "none")
          {
              var utype = sessionStorage.getItem("userType");
              var path = "/" + utype + "/";

              if (res.data.type == "user")
              {
                  path += "publicuserprofile";
              }
              else {
                  path += "publiccompanyprofile";
              }

             // alert(path);

              navigate(path, { state: res.data.user });
          }
          else 
            console.log("error");
      })
      .catch(error => alert(error));
  }

  useEffect(() => {
    axios
      .get(`http://localhost:8000/allappl/${propsData}`)
      .then((res) => {
        setAllApp(res.data);

        axios
          .get(`http://localhost:8000/findjob/${res.data.jobid}`)
          .then((res) => {
            setJob(res.data);
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (job && allApp) {
      setCon(
        <>
          <div className='kjobapp-header'>
            <label>Job Application</label>
          </div>
          <div className='kjobapp-content'>
            <div className='kjobapp-content-header'>
              <label>
                {job.Designation} ({job.CompanyName})
              </label>
            </div>
            <hr className='kjobapp-content-hr'></hr>
            <div className='kjobapp-content-details'>
              <div className='kjobapp-content-profile'>
                <div className='kjobapp-content-profile-summary'>
                  <div className='kjobapp-content-profile-names'>
                    <label className='kjobapp-content-name'>{allApp.applicantname}</label>
                    <label className='kjobapp-content-username'>@{allApp.applicantusername}</label>
                  </div>
                </div>
                <button className='kjobapp-btn' onClick={() => openProfile(allApp.applicantusername)}>
                  View Profile
                </button>
              </div>
              <hr className='kjobapp-content-hr'></hr>
              <div className='kjobapp-content-application'>
                <div className='kjobapp-content-appfield'>
                  <label className='kjobapp-content-appfield-title'>Date of Birth:</label>
                  <label className='kjobapp-content-appfield-value'>{allApp.dob}</label>
                </div>
                <div className='kjobapp-content-appfield'>
                  <label className='kjobapp-content-appfield-title'>Contact Number:</label>
                  <label className='kjobapp-content-appfield-value'>0{allApp.phone}</label>
                </div>
                <div className='kjobapp-content-appfield'>
                  <label className='kjobapp-content-appfield-title'>Email:</label>
                  <label className='kjobapp-content-appfield-value'>{allApp.email}</label>
                </div>
                <div className='kjobapp-content-appfield'>
                  <label className='kjobapp-content-appfield-title'>Last Degree:</label>
                  <label className='kjobapp-content-appfield-value'>
                    {allApp.lastdegree.degree} in {allApp.lastdegree.major}
                  </label>
                </div>
                <div className='kjobapp-content-appfield'>
                  <label className='kjobapp-content-appfield-title'>Last School/College:</label>
                  <label className='kjobapp-content-appfield-value'>{allApp.lastdegree.university}</label>
                </div>
                <div className='kjobapp-content-appfield'>
                  <label className='kjobapp-content-appfield-title'>Years of Experience:</label>
                  <label className='kjobapp-content-appfield-value'>{allApp.yearsExp}</label>
                </div>
                <div className='kjobapp-content-appfield'>
                  <label className='kjobapp-content-appfield-title'>Reason for Applying:</label>
                  <label className='kjobapp-content-appfield-value'>{allApp.answer}</label>
                </div>
              </div>
              <hr className='kjobapp-content-hr'></hr>
              <div className='kjobapp-content-btn-con'>
                <button
                  onClick={() => openResume(allApp.resume)}
                  id='kjobapp-resumebtn'
                  className='kjobapp-btn'
                >
                  View Resume
                </button>
              </div>
            </div>
          </div>
        </>
      );
    }
  }, [job, allApp]);

  return <div className='kjobapp-container'>{con}</div>;
}

