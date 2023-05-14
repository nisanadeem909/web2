import React, { useRef } from 'react'
import './EditProfile.css'
import editpic from './editpic.png';
import person from './dummy.jpg';
import editicon from './edit.png';
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
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

  const des = useRef(null);

  const navigate = useNavigate();

  const [img,setImg] = useState(null);

  const refBio = useRef(bio);
  
 
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
  }, []);

  useEffect(() => {
    const userType = sessionStorage.getItem("userType");
    const username = sessionStorage.getItem("sessionID");

    if (userType == "user")
    {
          setVarField(<><label className='nisa-edit-label'>
                          Request for New Working Place:  
                        </label>
                        <Select options={companyList}
                        placeholder="Company you worked for"
                        className='nisa-edit-input'
                        onChange={(choice) => setSelectedCompany(choice)}/>
                        <label className='nisa-edit-label'>
                        Designation:  
                      </label>
                      <input className='nisa-edit-input' type="text" ref={des}/>
                      </>);

          const param = {"user":username}

          //post request to server to get profile details 
          axios.post("http://localhost:8000/getuserprofiledetails",param).then((response) => {
              //alert(JSON.stringify(response.data))
              //alert(response.data.user.bio)
              setName(response.data.user.name);
              if (response.data.user.bio)
                setBio(response.data.user.bio);
              /*if (response.data.user.worksAt)
              {
                setDes(response.data.user.worksAt.Designation);
                setS
              }*/
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
  }, [companyList]);

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

  const HandleUpload=(t)=>{
    //console.log(t.handle.files);
    alert("image set");
    setImg(t.target.files[0]);
  }

  const upload = () =>{

      const uname = sessionStorage.getItem("sessionID");
      const utype = sessionStorage.getItem("userType");

      if (!name)
      {
          alert("Please fill name!");
          return;
      }
      
      if  (utype == "user" && ((selectedCompany && !des.current.value) || (!selectedCompany && des.current.value)))
      {
        alert("Please fill both fields required for new workplace request!");
        return;
      }

      if (img)
      {
        var fdata = new FormData();
        fdata.append("Image", img);
        fdata.append("Username", uname);
        fdata.append("UserType", utype);
        axios.post('http://localhost:8000/uploadprofilepic',fdata)
        .then(res => {alert("Respnse" + JSON.stringify(res.data))})
        .catch(err=>{alert("ERROR IN UPLOADAXIOS : "+err)});
      }
      const param = {"uname": uname, "utype":utype, "bio": refBio.current.value, "name":name,"worksAt":selectedCompany,"ctype":companyType};
      
      if (des)
        if (des.current)
          param.des = des.current.value;

      axios.post("http://localhost:8000/updateprofiledetails",param).then((response) => {
        //alert(response.data);
        
        //alert('hi');
      })
      .catch(function (error) {
          alert(error);
      });
      cancel();
  }

  const cancel=()=>{
    const utype = sessionStorage.getItem("userType");
    if (utype == "user")
          navigate("/user/ownprofile");
        else
          navigate("/company/ownprofile");
  }


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
            <input id="displaynone" type="file" onChange={HandleUpload}/>
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
                <textarea className='nisa-edit-input kta-editprof' ref={refBio} value={bio} onChange={(event)=>{setBio(event.target.value)}}></textarea>
                
                <div className='keditprof-btns'>
                  <button className="keditprof-savebtn" onClick={upload}>Save Changes</button>
                  <button className="keditprof-cancelbtn" onClick={cancel}>Cancel</button>
                </div>
           
      </div>

      </div>
      
    </div>
    <Footer/>
    </div>
    
  )
}
