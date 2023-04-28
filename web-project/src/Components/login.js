import React from 'react'
import './login.css';
import img from './people.jpeg';

function LoginPage() {
    return (
        

        <div >
            <div class="nab-wrapper-login">
                
                <div class="nab-login-left-side">
                    
                    <img id="emerald" src={img} alt="emeraldimg" />
                </div>

                <div class="nab-loginpage-right-side">
                    <div class="nab-login-right-innerbox">
                        
                      <div>
                            <h1 id="welcomeback">Welcome Back</h1>
                            <h3 id="welcomeback-subheading">Login to get started right where you left off.</h3>
                            <form>
                                <div>
                                    <input type="text" name="username" id="nab-login-username" class="nab-form__input" placeholder="Username"/>
                                    
                                </div>
                              <div >
                                    
                                    <input type="password" name="password" id="nab-login-password" class="nab-form__input" placeholder="Password"/>
                                    

                                </div>
                               
                                <div>
                                    <input type="submit" value="Login" id="nab-login-submit-btn"/> 
                                </div>
                            </form>
                        </div>
                        
                    </div>
    </div>
             </div>
        </div>
        
    );
  }
  
  export default LoginPage;
  