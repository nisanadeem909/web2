import React, { useState } from 'react'

import './contactcompany.css';
import EditContactUsModal from './EditContactUsModal'


function ContactCompanyEditable() {

    const [contact,setContact] = useState({'website': 'www.some-website.com','email':'someone@example.com','phone':'042-3537791'});

    return (
        <div id="contactcompany-box">
             <div id="contactcompany-contactus">Contact Us</div>
             <br></br>
             <EditContactUsModal selectedItem={contact} changeContact={setContact}/>
             <div id="contactcompany-email"><a className='contactcompany-a' href={"//".concat(contact.website)}>{contact.website}</a></div>
             <div id="contactcompany-website">{contact.email}</div>
             <div id="contactcompany-landline">{contact.phone}</div>
       </div>
    );
  }
  
  export default ContactCompanyEditable;
  