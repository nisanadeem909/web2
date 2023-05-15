import React, { useState, useEffect } from 'react';
import './ApplicantsView.css';
import app from './app.png';
import person from './person.png';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function ApplicantsView() {
  const location = useLocation();
  const propsData = location.state;
  const [allApp, setAllApp] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/allapps/${propsData}`)
      .then(res => {
        setAllApp(res.data);
        setLoading(false);
      })
      .catch(error => console.log(error));
  }, []);

  const openProfile=(username)=>{
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

  return (
    <div className="nisa-app-container1">
      <div className="nisa-app-container2">
        <img className="nisa-app-img1" src={app} alt="" />
        <label className="nisa-vaca-label">Applicants</label>
      </div>

      <hr className="notif" />

      {loading ? (
        <p className='nisa-vac-ll'>Loading...</p>
      ) : (
        <ul>
          {allApp.length === 0 ? (
            <p className='nisa-vac-ll'>No applications found.</p>
          ) : (
            allApp.map(app => (
              <li key={app._id}>
                <div className="nisa-notif-list">
                  <div className="nisa-notify-container2">
                    <img className="nisa-notify-img2" src={person} alt="" />
                    <div className="nisa-notify-container3">
                      <div className="nisa-notify-container4">
                        <label className="nisa-vaca-lb">{app.applicantname}</label>
                      </div>
                    </div>
                  </div>

                  <div className="nisa-notify-post">
                    <button className="nisa-vaca-btn1">Application</button>
                    <button className="nisa-vaca-btn1" onClick={()=>{openProfile(app.applicantusername)}}>Profile</button>
                  </div>
                </div>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
}
