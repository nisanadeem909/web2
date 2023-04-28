import React from 'react'
import './signup.css';
import img from './people.jpeg';
import './signup-company.css';


function SignupCompany() {
    const validate =() =>{
        if (document.getElementById("nab-signup-username").value == "") 
            alert("field empty");
        else if (document.getElementById("nab-signup-password").value == "") 
            alert("field empty");
    }
    return(
    <div>
        <div id="nab-company-wrapper">

        <form>
            <div>
                
                <input id="nab-signup-companyname" type="text" name="name" placeholder="Registered Company Name" required/>
            </div>
            <div>
                
                <input id="nab-signup-company-password" type="text" name="username" placeholder="Company Username" required/>
            </div>
            <div>
                
                <input id="nab-signup-company-password" type="text" name="email" placeholder="Registered Company Email" required/>
            </div>
            <div>
                
                <input id="nab-signup-company-password"type="password" name="password" placeholder="Password" required/>
            </div>
            <div>
                
                <input id="nab-signup-company-password"type="password" name="password" placeholder="Confirm Password"required />
            </div>
            <div>
                <input id="nab-signup-submit-btn" type="submit" value="Signup as Company" />
            </div>
            
        </form>

        </div>
    </div>
    
    
    );
  }
  
  export default SignupCompany;
  