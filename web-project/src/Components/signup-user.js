import React from 'react'
import './signup.css';
import img from './people.jpeg';
import './signup-user.css';


function SignupUser() {
    
    return(
    <div>
        <div id="nab-user-wrapper">

        <form>
            <div>
                <input id="nab-signup-username" type="text" name="name" placeholder="Username" required/>
            </div>
            <div>
                <input id="nab-signup-password" type="text" name="name" placeholder="Full Name" required />
            </div>
            <div>
                <input id="nab-signup-password" type="text" name="name" placeholder="Email"required />
            </div>
            <div >
               
                <input id="nab-signup-password"type="password" name="password" placeholder="Password" required/>
            </div>
            
            <div >
               
                <input id="nab-signup-password"type="password" name="password" placeholder="Confirm Password" required/>
            </div>
           
            <div>
                <input type="submit" id="nab-signup-submit-btn" value="Signup as User" required/>
            </div>
        </form>

        </div>
    </div>
    
    
    );
  }
  
  export default SignupUser;
  