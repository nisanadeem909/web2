import React,{useState, useEffect} from 'react'
import './companyhistory.css';
import EditAboutUsModal from './EditAboutUsModal'
import AddAboutUsModal from './AddAboutUsModal'
import axios from 'axios';


function CompanyHistoryEditable(props) {

    const [aboutUs,setAboutUs] = useState(null);

    const add=(newAboutUs)=>{
        const sessionID = sessionStorage.getItem('sessionID');
        const param = {"user":sessionID, "aboutUs": newAboutUs}

        //post request to server to get profile details 
        axios.post("http://localhost:8000/setaboutus",param).then((response) => {
            //alert(response.data);
            //alert('hi');
        })
        .catch(function (error) {
            alert(error);
        });

        props.setAboutUs(newAboutUs);
        setAboutUs(newAboutUs);
    }

    const [aboutUsCon,setAboutUsCon] = useState(<><AddAboutUsModal addAboutUs={add}/><label className='komal-noinfoyet'>No information added yet</label></>);

    
    
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
                setAboutUsCon(<><EditAboutUsModal selectedItem={props.company.aboutUs} changeAboutUs={add}/>
                <a id="companyhistory-website" href={"//".concat(props.company.aboutUs.website)}>{props.company.aboutUs.website}
                
                </a>
                <div id="companyhistory-years">{props.company.aboutUs.startYear}-present . {totalYears} years</div>
                <div id="companyhistory-location">{props.company.aboutUs.city},{props.company.aboutUs.country}</div>
                <br></br>
                <p id="about-text">
    
                    {props.company.aboutUs.text}
                    
                </p> </>);
            }
        }
    }, [props.company, aboutUs]);


    const edit=(newValues)=>{
        setAboutUs(newValues);
    }
    
    return (
        <div id="companyhistory-box">
            <div id="about-company">About Us</div>
            <br></br>
            
            {aboutUsCon}
 
       </div>
    );
  }
  
  export default CompanyHistoryEditable;
  