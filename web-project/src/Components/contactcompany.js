import React,{useEffect, useState} from 'react'

import './contactcompany.css';


function ContactCompany(props) {

    const [contactCon,setContactCon] = useState(<><label className='komal-noinfoyet'>No information added yet.</label></>);

    useEffect(() => {
      var totalYears;

      //alert(props.company);

      if (props.company)
      {
          if (props.company.contact){
              //setAboutUs(props.company.aboutUs);
             // alert(JSON.stringify(aboutUs));
              setContactCon(<><div id="contactcompany-email"><a className='contactcompany-a' href={"//".concat(props.company.contact.website)}>{props.company.contact.website}</a></div>
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
  
  export default ContactCompany;
  