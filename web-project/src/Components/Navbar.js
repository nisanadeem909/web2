import React, { useState } from 'react';
import { Outlet, Link, useNavigate } from "react-router-dom";
import './Navbar.css';
import logo1 from './logo1.png';
import nabhumanicon from './personcircle.png';
import nablogouticon from './nab-logout-icon.png';
import nabprofileicon from './nab-profile-icon.png';
import axios from "axios";
import { useEffect } from "react";

const person = 'person.png';

const Layout = (props) => {

  useEffect(()=>{
      if ((props.type == "user" || props.type == "company") && !sessionStorage.getItem("sessionID"))
      {
        navigate('/login');
      }
  },[])

  useEffect(()=>{
    if (props.type == "user" || props.type == "company")
    {
    var username = sessionStorage.getItem('sessionID');
    //alert(username);
    //const t = sessionStorage.getItem('userType');
    
        axios.get(`http://localhost:8000/finduser/${username}`)
          .then(res => {
            setUser(res.data);
            //alert(JSON.stringify(res.data));
            //alert(JSON.stringify(currUser));
          });
    }
},[props])

  const navigate = useNavigate(); 
  const [img1,setImg1] = useState();
  const [currUser,setUser] = useState([]);
  const companyRouteChange =() =>{
    let path = '/company/ownprofile'; 
    navigate(path);
    handleProfile();
  }
  const userRouteChange = () =>{ 
    let path = '/user/ownprofile'; 
    navigate(path);
    handleProfile();
  }

  const logoutSession = () =>{ 
  
  
 axios.get('http://localhost:8000/logout')
  .then(response => {
   
    sessionStorage.removeItem("sessionID");
   
    sessionStorage.removeItem("userType");

    navigate("/login");
  })
  .catch(error => {
    console.error('Error logging out:', error);
    
  });
  }

  const handleProfile = () =>{
    document.getElementById("myDropdown").classList.toggle("show");
  }

  const getUserName =() =>{
    return sessionStorage.getItem("sessionID");
  }

  var navlayout = 
    <ul className="navb_ul">
          <li className="navb_li">
            <Link to="/cvviewer" id="cvbutton_navbar">Build CV</Link>
          </li>
          <li className="navb_li">
            <Link to="/">Home</Link>
          </li>
          <li className="navb_li">
            <Link to="/about">About</Link>
          </li>
          <li className="navb_li">
            <Link to="/signup">Signup</Link>
          </li>
          <li className="navb_li">
            <Link to="/login">Login</Link>
          </li>
        </ul>;

  if (props.type)
  {
    if (props.type == "user")
    {
      navlayout = <ul className="navb_ul">
                      <li className="navb_li">
                        <Link to="/user">Home</Link>
                      </li>
                      <li className="navb_li">
                        <Link to="/user/network">Network</Link>
                      </li>
                      <li className="navb_li">


                        <Link to="/user/jobs">Jobs</Link>

                      </li>
                      <li className="navb_li">
                        <Link to="/user/notifications">Notifications</Link>
                      </li>
                      
                      <li className="navb_li">
                        <div class="nab-dropdown" >
                           
                        <button class="nab-dropbtn" onClick={handleProfile}>
                           Profile
                            {/*<Link to="/user/ownprofile"> 
                              Profile
                              
                            </Link>*/}
                          
                        </button>
                           
                          
                           <div class="nab-dropdown-content" id="myDropdown">
                           <div id="nab-dropdown-items">
                                <div id="profile-head-section">
                                  <img src={`http://localhost:8000/profilepictures/${currUser.user?.profilePicture || currUser.company?.profilePicture || person}`} id="nab-human-icon"></img>
                                  &nbsp;&nbsp;
                                  <label>{getUserName()}</label>
                                  
                                </div>
                                <div id="profile-line-hr"></div>
                                <div id="profile-head-section">
                                  <img src={nabprofileicon} id="nab-profile-icon"></img>
                                  &nbsp;&nbsp;
                                  
                                    <button class="editprofile-button" onClick={userRouteChange}>My Profile </button>
                                  
                                </div>
                                <div id="profile-head-section">
                                  <img src={nablogouticon} id="nab-logout-icon"></img>
                                  &nbsp;&nbsp;
                                  
                                  <button onClick={logoutSession} class="editprofile-button" > <span>Logout </span></button>
                                  
                                </div>
                                
                                  
                                
                                  
                                
                              </div>
                              
                          </div>

                        </div>

                      </li>
                  </ul>;
    }
    else if (props.type == "company")
    {
      navlayout = <ul className="navb_ul">
                      <li className="navb_li">
                        <Link to="/company">Home</Link>
                      </li>
                      <li className="navb_li">
                        <Link to="/company/network">Network</Link>
                      </li>
                      <li className="navb_li">
                        <Link to="/company/vacancies">Vacancies</Link>
                      </li>
                      <li className="navb_li">
                        <Link to="/company/ManageEmployees">Employees</Link>
                      </li>
                      <li className="navb_li">
                        <Link to="/company/notifications">Notifications</Link>
                      </li>
                      <li className="navb_li">
                        <div class="nab-dropdown" >
                           
                        <button class="nab-dropbtn" onClick={handleProfile}>
                        Profile
                          {/*<Link to="/company/ownprofile" onClick={handleProfile}>
                              Profile
                              
                          </Link>*/}
                          
                        </button>
                           
                          
                           <div class="nab-dropdown-content" id="myDropdown">
                           <div id="nab-dropdown-items">
                                <div id="profile-head-section">
                                  <img src={`http://localhost:8000/profilepictures/${currUser.user?.profilePicture || currUser.company?.profilePicture || person}`} id="nab-human-icon"></img>
                                  &nbsp;&nbsp;
                                  <label>{getUserName()}</label>
                                  
                                </div>
                                <div id="profile-line-hr"></div>
                                <div id="profile-head-section">
                                  <img src={nabprofileicon} id="nab-profile-icon"></img>
                                  &nbsp;&nbsp;
                                  <button class="editprofile-button" onClick={companyRouteChange}> My Profile</button>
                                  
                                </div>
                                <div id="profile-head-section">
                                  <img src={nablogouticon} id="nab-logout-icon"></img>
                                  &nbsp;&nbsp;
                                  
                                  <button onClick={logoutSession} class="editprofile-button" > <span>Logout </span></button>
                                  
                                </div>
                                
                                  
                                
                              </div>
                              
                          </div>

                        </div>

                      </li>
                  </ul>;
    }
  }

  return (
    <>
      <nav>
      <input type="checkbox" id="navb_check"/>
      <label for="navb_check" class="navb_checkbtn">
        <i class="navb_fas navb_fa-bars"></i>
      </label>
      <img class="navb_logo" src={logo1}/>
        {navlayout}
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
  