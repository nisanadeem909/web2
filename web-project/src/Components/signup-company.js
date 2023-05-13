import React from 'react'
import './signup.css';
import img from './people.jpeg';
import './signup-company.css';
import axios from 'axios';
import {useState} from 'react';
function SignupCompany() {
    const [companyuser,setCompany] = useState({
        fullname:"",
        username:"",
        email:"",
        password: "",
        type:""
    });
    
    const handleChangeCompany = e =>{
        const {name,value} = e.target;
        setCompany({
        ...companyuser,//spread operator 
        [name]:value
        })
    };
    
    const registerCompany = ({}) =>{
        const {fullname,username,email,password,type} = companyuser;    
        /*alert("i am in register name = ");
        alert(companyuser.fullname);
        alert(companyuser.username);
        alert(companyuser.email);
        alert(companyuser.password);
        alert(companyuser.type);*/
        if (fullname && username && email && password && type)
        {
            /*alert("I am in axios");*/
                axios.post("http://localhost:8000/signupcompany",companyuser )
                .then((res => {alert(res.data)}));
        }
        else{
            alert("invalid input")
        }
        
    };
    
    return(
    <div>
        <div id="nab-company-wrapper">

        <form>
            <div>
                
                <input id="nab-signup-companyname" type="text" value={companyuser.fullname} onChange={handleChangeCompany} name="fullname" placeholder="Registered Company Name" required/>
            </div>
            <div>
                
                <input id="nab-signup-company-password"value={companyuser.username} onChange={handleChangeCompany} type="text" name="username" placeholder="Company Username" required/>
            </div>
            <div>
                
                <input id="nab-signup-company-password" value={companyuser.email} onChange={handleChangeCompany}type="text" name="email" placeholder="Registered Company Email" required/>
            </div>
            <div>
                
                <input id="nab-signup-company-password" value={companyuser.password} onChange={handleChangeCompany}type="password" name="password" placeholder="Password" required/>
            </div>
            <div>
                <input id="nab-signup-company-password" value={companyuser.type} onChange={handleChangeCompany}type="text" name="type" placeholder="type: education,business,service" required/>
                
            </div>
            <div>
            <button id="nab-signup-submit-btn" type="submit" onClick={registerCompany} >Sign Up As Company</button>
            </div>
            
        </form>

        </div>
    </div>
    
    
    );
  }
  
  export default SignupCompany;
  