import React from 'react'

import './contactcompany.css';


function ContactCompanyEditable() {
    return (
        <div id="contactcompany-box">
             <div id="contactus">Contact Us</div>
             <br></br>
             <button id="edit-btn">Edit</button>
             <div id="email"><a href="#">www.some-website.com</a></div>
             <div id="website">someone@example.com</div>
             <div id="landline">042-3537791</div>
       </div>
    );
  }
  
  export default ContactCompanyEditable;
  