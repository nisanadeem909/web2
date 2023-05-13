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
export default function EditProfile() {
  
  const [companyList,setCompanyList] = useState([]);

  const [selectedCompany,setSelectedCompany] = useState(null);
 
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
  }, [/*companyList*/]);


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
                <input className='nisa-edit-input' type="text" />

                <label className='nisa-edit-label'>
                  Current Working Place:  
                </label>
                <Select options={companyList}
                placeholder="Company you worked for"
                className='nisa-edit-input'
                onChange={(choice) => setSelectedCompany(choice)}/>

                <label className='nisa-edit-label'>
                  Bio:  
                </label>
                <textarea className='nisa-edit-input kta-editprof' ></textarea>
                
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
