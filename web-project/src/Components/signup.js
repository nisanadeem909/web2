import React, { useState } from 'react'
import './signup.css';
import img from './people.jpeg';
import SignUpUser from './signup-user'
import SignUpCompany from './signup-company'
//import {useState} from 'react'
import Footer from './Footer'
function SignUpBoth()
{
    const [flag,setFlag] = useState(true);
    

    const setUserFlag = ()=>
    {
        //alert("in user");
        setFlag(true);
        document.getElementById("signupcompany-btn").style.backgroundColor = "white";
        document.getElementById("signupuser-btn").style.backgroundColor = "#008080";
        document.getElementById("signupuser-btn").style.color = "white" ;
        document.getElementById("signupcompany-btn").style.color = "#008080";
    }
    const setCompanyFlag = ()=>
    {
        //alert("in company");
        setFlag(false);
        document.getElementById("signupcompany-btn").style.backgroundColor = "#008080";
        document.getElementById("signupuser-btn").style.backgroundColor ="white";
        document.getElementById("signupuser-btn").style.color = "#008080";
        document.getElementById("signupcompany-btn").style.color = "white";
    }
    return(
        <div id="nab-wrapsignup">
            <div class="nab-wrapper-signup">
            <div class="nab-login-left-side">    
                    <img id="emerald" src={img} alt="emeraldimg" />
            </div>

          
        
        <div class="nab-signuppage-right-side">
            <br></br><br></br><br></br><br></br>
            <div>
                <ul class="nab-tabs">
                    <button id="signupuser-btn"onClick={setUserFlag} >Sign up as User</button>
                    <button id="signupcompany-btn" onClick={setCompanyFlag}>Sign up as Company</button>
                </ul>
            </div>
        
            <SignupPage isUser={flag}/> {/* How do I set this???? */}
        </div>
        
    </div>
        <Footer></Footer>
    </div>
    );
}

function SignupPage(props) {
    const isUser = props.isUser;
    if (isUser){
        return (
            <SignUpUser />
        );
    }
    else{
        return(
            <SignUpCompany />
        );
    }
  }
  
  export default SignUpBoth;
  