import React,{useState} from 'react'
import './companyhistory.css';
import EditAboutUsModal from './EditAboutUsModal'


function CompanyHistoryEditable() {

    const [aboutUs,setAboutUs] = useState({'website':'www.example-website.com','startYear': '2010', 'endYear':'present', 'years':'23', 'Location': {'city': 'New York', 'country': 'USA'}, 'aboutUsText':'We specialise in manufacturing shoes and serve major clients like Adidas and Nike. We have been listed #7 in Forbes Highly Ranked Companies in 2020.'});

    if (aboutUs.endYear == 'present')
    {
        var currYear = (new Date()).getFullYear();
        var totalYears = parseInt(currYear - aboutUs.startYear);
        aboutUs.years = totalYears;
    }
    else 
    {
        var totalYears = parseInt(aboutUs.endYear - aboutUs.startYear);
        aboutUs.years = totalYears;
    }

    const edit=(newValues)=>{
        setAboutUs(newValues);
    }
    
    return (
        <div id="companyhistory-box">
            <div id="about-company">About Us</div>
            <br></br>
            
            <EditAboutUsModal selectedItem={aboutUs} changeAboutUs={edit}/>
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
  
  export default CompanyHistoryEditable;
  