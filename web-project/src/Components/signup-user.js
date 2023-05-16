import React from 'react'
import './signup.css';
import img from './people.jpeg';
import './signup-user.css';
import axios from 'axios';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const SignupUser = () => {
    const [user,setUser] = useState({
        fullname:"",
        username:"",
        email:"",
        password: ""
    });
    
    const handleChange = e =>{
        const {name,value} = e.target;
        setUser({
        ...user,//spread operator 
        [name]:value
        })
    };

    const navigate = useNavigate();

    const gotoHome = () => {
        navigate("/user", { state: { user } });
      }
    
    
    const registerUser = ({}) =>{
        const {fullname,username,email,password} = user;    
       
        if (fullname && username && email && password)
        {
            try{    
            axios.post("http://localhost:8000/signupuser",{ username,fullname,email, password} )
                    .then(res => {
                        const userType = "user";
                        sessionStorage.setItem('sessionID', username);
                        sessionStorage.setItem('userType', userType);
                        gotoHome();
                    }
                    
                   
                    
                    );
            }
            catch(err)
            {
                alert(err);
            }
        }
        else{
            alert("invalid input")
        }
        
    };
    
    return(
    <div>
        <div id="nab-user-wrapper">

        <div>
            <div>
                <input id="nab-signup-username" value={user.username} onChange={handleChange} type="text" name="username" placeholder="Username" required/>
            </div>
            <div>
                <input id="nab-signup-password" value={user.fullname} onChange={handleChange} type="text" name="fullname" placeholder="Full Name" required />
            </div>
            <div>
                <input id="nab-signup-password" value={user.email} onChange={handleChange} type="text" name="email" placeholder="Email"required />
            </div>
            <div >
               
                <input id="nab-signup-password" value={user.password} onChange={handleChange} type="password" name="password" placeholder="Password" required/>
            </div>
            
            
           
            <div>

               <button id="nab-signup-submit-btn" type="submit" onClick={registerUser}>Sign Up As User</button>
               
            </div>
        </div>

        </div>
    </div>
    
    
    );
  }
  
  export default SignupUser;
  