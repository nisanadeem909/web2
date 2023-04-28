import React from 'react'

import './contactcompany.css';


function ContactCompanyEditable() {
    return (
        <div id="contactcompany-box">
             <div id="contactcompany-contactus">Contact Us</div>
             <br></br>
             <button id="contactcompany-edit-btn">Edit</button>
             <div id="contactcompany-email"><a className='contactcompany-a' href="#">www.some-website.com</a></div>
             <div id="contactcompany-website">someone@example.com</div>
             <div id="contactcompany-landline">042-3537791</div>
       </div>
    );
  }
  
  export default ContactCompanyEditable;
  