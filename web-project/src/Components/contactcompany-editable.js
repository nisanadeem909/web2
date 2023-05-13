import React, { useEffect, useState } from 'react'

import './contactcompany.css';
import EditContactUsModal from './EditContactUsModal'
import AddContactUsModal from './AddContactUsModal'
import axios from 'axios';


function ContactCompanyEditable(props) {

    const setContact=(newContact)=>{

        const sessionID = sessionStorage.getItem('sessionID');
        const param = {"user":sessionID, "contact": newContact}

        //post request to server to get profile details 
        axios.post("http://localhost:8000/setcontact",param).then((response) => {
            console.log(response.data.status)
        })
        .catch(function (error) {
            alert(error);
        });

        props.add(newContact);
    }

    const [contactCon,setContactCon] = useState(<><AddContactUsModal addContact={setContact}/><label className='komal-noinfoyet'>No information added yet.</label></>);

    useEffect(() => {
      var totalYears;

      if (props.company)
      {
          if (props.company.contact){
              //setAboutUs(props.company.aboutUs);
             // alert(JSON.stringify(aboutUs));
              setContactCon(<><EditContactUsModal selectedItem={props.company.contact} changeContact={setContact}/>
              <div id="contactcompany-email"><a className='contactcompany-a' href={"//".concat(props.company.contact.website)}>{props.company.contact.website}</a></div>
              <div id="contactcompany-website">{props.company.contact.email}</div>
              <div id="contactcompany-landline">{props.company.contact.phone}</div></>);
          }
      }
  }, [props.company]);

    return (
        <div id="contactcompany-box">
             <div id="contactcompany-contactus">Contact Us</div>
             <br></br>
             {contactCon}
       </div>
    );
  }
  
  export default ContactCompanyEditable;
  