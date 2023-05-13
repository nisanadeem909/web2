import React from 'react'
import './EditProfile.css'
import editpic from './editpic.png';
import person from './dummy.jpg';
import editicon from './edit.png';
import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import Select from 'react-select'
import Footer from './Footer';
import axios from 'axios'
import { SettingsOverscanSharp } from '@material-ui/icons';
export default function EditProfile() {
  
  const [companyList,setCompanyList] = useState([]);

  const [selectedCompany,setSelectedCompany] = useState(null);

  const [varField,setVarField] = useState(<label>Loading</label>);

  const [name,setName] = useState("");
  const [companyType,setCompanyType] = useState("");
  const [bio,setBio] = useState("");
  
 
  useEffect(() => {
    axios.post("http://localhost:8000/getcompanydropdownlist").then((response) => {
        //alert(response.data);
        setCompanyList(response.data);
        /*if (companyList)
        {
          tempComp = companyList.filter((obj)=>obj.label === props.selectedExp.company)[0];
          setSelectedCompany({"label": tempComp.label,"value": tempComp.value});
        }*/
    })
    .catch(function (error) {
        alert(error);
    });
  }, [companyList]);

  useEffect(() => {
    const userType = sessionStorage.getItem("userType");
    const username = sessionStorage.getItem("sessionID");

    if (userType == "user")
    {
          setVarField(<><label className='nisa-edit-label'>
                          Current Working Place:  
                        </label>
                        <Select options={companyList}
                        placeholder="Company you worked for"
                        className='nisa-edit-input'
                        onChange={(choice) => setSelectedCompany(choice)}/></>);

          const param = {"user":username}

          //post request to server to get profile details 
          axios.post("http://localhost:8000/getuserprofiledetails",param).then((response) => {
              //alert(response.data);
              //setUser(response.data.user);
              //alert(response.data.user);
              setName(response.data.user.name);
              //alert('hi');
          })
          .catch(function (error) {
              alert(error);
          });
    }
    else if (userType == "company")
    {
                        
          const param = {"user":username}
          //post request to server to get profile details 
          axios.post("http://localhost:8000/getcompanyprofiledetails",param).then((response) => {
              //alert(response.data);
              //setUser(response.data.company);
              //alert(response.data.company.companyType);
              setName(response.data.company.name);
              setCompanyType(response.data.company.companyType);
              if (response.data.company.bio)
                setBio(response.data.company.bio);
              
              //alert('hi');
          })
          .catch(function (error) {
              alert(error);
          });
    }
  }, []);

  useEffect(() => {
    
    const userType = sessionStorage.getItem("userType");

    if (userType == "company"){
    setVarField(<><label className='nisa-edit-label'>
                          Company type:  
                        </label>
                        <input className='nisa-edit-input' type="text" value={companyType} onChange={(event)=>{setCompanyType(event.target.value)}}/>
                        </>);
     }
  }, [companyType]);


  return (
   
<div>
    <div className='nisa-edit-container1'>

      <div className='nisa-notif-container1'>
          <img className='nisa-notify-img1' src={editpic} alt="" />
          <label className='nisa-label'>Edit Profile</label>
      </div>

      <hr className='notif'/>


    <div className='nisa-edit-container3'>

      <div className='nisa-edit-container2'>
          <img src={person} className="edit-nisa-img1"/>
          <label class="custom-file-upload">
            <input type="file" accept=".jpeg,.jpg,.png"/>
            Upload image
          </label>

        
      
                <label className='nisa-edit-label'>
                  Name:
                </label>
                <input className='nisa-edit-input' type="text" value={name} onChange={(event)=>{setName(event.target.value)}}/>

                {varField}

                <label className='nisa-edit-label'>
                  Bio:  
                </label>
                <textarea className='nisa-edit-input kta-editprof' >{bio}</textarea>
                
                <div className='keditprof-btns'>
                  <button className="keditprof-savebtn">Save Changes</button>
                  <button className="keditprof-cancelbtn">Cancel</button>
                </div>
           
      </div>

      </div>
      
    </div>
    <Footer/>
    </div>
    
  )
}
