import React, { useEffect, useState } from 'react' 
import './PostJobPage.css';
import Form from './PostJobForm';
import Footer from './Footer'
import axios from 'axios';

export default function PostJob() {

    const [companyDetails,setCompany] = useState(null);
   
    useEffect(() => {
      const sessionID = sessionStorage.getItem('sessionID');
      const param = {"user":sessionID}
      //post request to server to get profile details 
      axios.post("http://localhost:8000/getcompanyprofiledetails",param).then((response) => {
          //alert(JSON.stringify(response.data.company));
          setCompany(response.data.company);
          //alert('hi');
      })
      .catch(function (error) {
          alert(error);
      });
  }, []);

    return (
      <div className='kpostjobpage-container'>
          <div className='kpostjobpage-form'>
            <Form company={companyDetails}/>
          </div>
          <div className='kpostjobpage-footer'>
            <Footer/>
          </div>

      </div>
    )
  }