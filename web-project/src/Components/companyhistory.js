import React,{useState} from 'react'
import './companyhistory.css';


function CompanyHistory() {

    const [aboutUs,setAboutUs] = useState({'website':'www.example-website.com','startYear': '2010', 'years':'23', 'Location': {'city': 'Texas', 'country': 'USA'}, 'aboutUsText':'We specialise in manufacturing shoes and serve major clients like Adidas and Nike. We have been listed #7 in Forbes Highly Ranked Companies in 2020.'});

    return (
        <div id="companyhistory-box">
            <div id="about-company">About Us</div>
            <br></br>
            <div id="companyhistory-website">{aboutUs.website}
            
            </div>
            <div id="companyhistory-years">{aboutUs.startYear}-present . {aboutUs.years} years</div>
            <div id="companyhistory-location">{aboutUs.Location.city},{aboutUs.Location.country}</div>
            <br></br>
            <p id="about-text">

                {aboutUs.aboutUsText}
                
            </p> 
 
       </div>
    );
  }
  
  export default CompanyHistory;
  