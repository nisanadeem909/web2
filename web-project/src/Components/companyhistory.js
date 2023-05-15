import React,{useState, useEffect} from 'react'
import './companyhistory.css';
import axios from 'axios';


function CompanyHistory(props) {

    const [aboutUs,setAboutUs] = useState(null);
    const [aboutUsCon,setAboutUsCon] = useState(<label className='komal-noinfoyet'>No information added yet</label>);

    useEffect(() => {
        var totalYears;

        if (props.company)
        {
            if (props.company.aboutUs){
                setAboutUs(props.company.aboutUs);
               // alert(JSON.stringify(aboutUs));
                if (props.company.aboutUs.endYear == 'present')
                {
                    var currYear = (new Date()).getFullYear();
                    totalYears = parseInt(currYear - props.company.aboutUs.startYear);
                }
                else 
                {
                    totalYears = parseInt(props.company.aboutUs.endYear - props.company.aboutUs.startYear);
                }
                setAboutUsCon(<><div id="companyhistory-website">{props.company.aboutUs.website}
            
                </div>
                <div id="companyhistory-years">{props.company.aboutUs.startYear}-present . {props.company.aboutUs.years} years</div>
                <div id="companyhistory-location">{props.company.aboutUs.city},{props.company.aboutUs.country}</div>
                <br></br>
                <p id="about-text">
    
                    {props.company.aboutUs.text}
                    
                </p></>);
            }
        }
    }, [props.company]);

    return (
        <div id="companyhistory-box">
            <div id="about-company">About Us</div>
            <br></br>
            {aboutUsCon}
            {/**  */}
 
       </div>
    );
  }
  
  export default CompanyHistory;
  