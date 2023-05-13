import React from 'react'
import './signup.css';
import img from './people.jpeg';
import './signup-user.css';
import axios from 'axios';
import {useState} from 'react';

const SignupUser = () => {
    const [user,setUser] = useState({
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
        const {username,email,password} = user;    
        alert("i am in register name = ");
        alert(user.username);
        alert(user.email);
        alert(user.password);
        if (username && email && password)
        {
                axios.post("http://localhost:8000/signup",user )
                    .then(res=>alert(res.message))
        }
        else{
            alert("invalid input")
        }
        
    };
    
    return(
    <div>
        <div id="nab-user-wrapper">

        <form>
            <div>
                <input id="nab-signup-username" value={user.username} onChange={handleChange} type="text" name="username" placeholder="Username" required/>
            </div>
            {/*<div>
                <input id="nab-signup-password" value={user.email} onChange={handleChange} type="text" name="name" placeholder="Full Name" required />
    </div>*/}
            <div>
                <input id="nab-signup-password" value={user.email} onChange={handleChange} type="text" name="email" placeholder="Email"required />
            </div>
            <div >
               
                <input id="nab-signup-passwor" value={user.password} onChange={handleChange} type="password" name="password" placeholder="Password" required/>
            </div>
            
            {/*<div >
               
                <input id="nab-signup-password"type="password" name="password" placeholder="Confirm Password" required/>
</div>*/}
           
            <div>
               <button type="submit" onClick={registerUser}>Sign Up As User</button>
               {/* <input type="submit"  id="nab-signup-submit-btn" value="Signup as User" required/>*/}
            </div>
        </form>

        </div>
    </div>
    
    
    );
  }
  
  export default SignupUser;
  