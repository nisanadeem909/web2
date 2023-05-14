import React from 'react'
import './signup.css';
import img from './people.jpeg';
import './signup-user.css';
import axios from 'axios';
import {useState} from 'react';

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
    
    const registerUser = ({}) =>{
        const {fullname,username,email,password} = user;    
        /*alert("i am in register name = ");
        alert(user.fullname);
        alert(user.username);
        alert(user.email);
        alert(user.password);*/
        if (fullname && username && email && password)
        {
            try{    
            axios.post("http://localhost:8000/signupuser",user )
                    .then(res => {alert(JSON.stringify(res.data.message))
                    console.log(res.data.message)});
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
  