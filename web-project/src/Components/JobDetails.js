import React, { useEffect, useState } from 'react'
import './JobDetails.css';
import applyIcon from './applyy.png'
import eduIcon from './edu.png'
import expIcon from './exp.png'
import clockIcon from './clocki.png'
import salaryIcon from './salaryi.png'
import leaveIcon from './leavei.png'
import jobIcon from './workk.png'
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function JobDetails(props) {

    const navigate = useNavigate();

    const openProfile=(username)=>{
        //find user type
        var param = {"user":username};
        axios.post(`http://localhost:8000/getusertype`,param)
          .then(res => {
              if (res.data.type != "none")
              {
                  var utype = sessionStorage.getItem("userType");
                  var path = "/" + utype + "/";
    
                  if (res.data.type == "user")
                  {
                      path += "publicuserprofile";
                  }
                  else {
                      path += "publiccompanyprofile";
                  }
    
                 // alert(path);
    
                  navigate(path, { state: res.data.user });
              }
              else 
                console.log("error");
          })
          .catch(error => alert(error));
      }

    //salary, location, working hours, paid leaves, degree, experience, description, company,

    //var jobDetails = {'salary': 'Loading','workingHours':'Loading','paidLeaves':'8', 'position': 'Internship', 'datePosted':'12/12/2022','requirements':{'degree':'Bachelors', 'major':'Computer Science','experience':'2'},'description':'This is a job description. This is a job description. This is a job description. This is a job description. This is a job description. This is a job description. This is a job description. This is a job description. This is a job description. This is a job description. This is a job description. This is a job description. This is a job description. This is a job description. This is a job description. This is a job description. This is a job description. This is a job description. This is a job description. This is a job description. This is a job description. This is a job description. This is a job description. This is a job description. This is a job description. This is a job description. This is a job description. This is a job description. This is a job description. This is a job description. '};
    //var companyDetails = {'Location':{'country': 'Pakistan', 'city':'Lahore'},'name':'Devsinc','rating':'4.5'};
    //var noOfApplicants = 12;

    const [job,setJob] = useState(null);
    const [company,setCompany] = useState(null);
    const [noOfApplications,setNumber] = useState(-1);

    const [con,setCon] = useState();

    useEffect(()=>{

        if (props.job)
        {
            setJob(props.job);

            var param = {"user":props.job.CompanyUsername};
            axios.post("http://localhost:8000/getcompanyprofiledetails",param).then((response) => {
                //alert(response.data);
                setCompany(response.data.company);
                //alert('hi');
            })
            .catch(function (error) {
                alert(error);
            });

            var param2 = {"JobId": props.job.JobId}
            axios.post("http://localhost:8000/getNoOfApplicants",param2).then((response) => {
                //alert(response.data);
                setNumber(response.data.count);
                //alert(noOfApplications);
                //alert('hi');
            })
            .catch(function (error) {
                alert(error);
            });

        }

    },[]);

    const handleApply = (job) => {
        //alert(job.JobId);
        navigate('/user/applyjob', { state: job });
    };

    useEffect(()=>{

        //alert(JSON.stringify(job)+ "\n" + JSON.stringify(company) + "\n" + noOfApplications)
        if (job && company && noOfApplications >= 0)
        {
            var Location;
            if (!company.aboutUs)
                Location = ""
            else 
                Location = company.aboutUs.city + ", "+ company.aboutUs.country;

            setCon(<><div className='kjobdetails_header'>
            <label className='kjobdetails_position'>{job.Designation}</label>
            <button className='kjobdetails_applyBtn' onClick={()=>{handleApply(job)}}>Apply <img src={applyIcon} alt='' className='kjobdetails_applyicon'></img></button>
        </div>
        <div className="kjobdetails_subheader">
            <label>{Location}</label>
            <label>{noOfApplications} Applicants</label>
        </div>
        <div className='kjobdetails_aboutjob'>
            <label className='kjobdetails_aboutjob_title'>About the Job</label>
            <hr className='kjobdetails_hr'/>
            <div className='kjobdetails_aboutjob_inner'>
                <label><img src={eduIcon} className='kjobdetails_smallicon'></img>Degree requirements: &nbsp; {job.DegreeRequired} in {job.MajorRequired} or related fields</label>
                <label><img src={expIcon} className='kjobdetails_smallicon'></img>Experience requirements: &nbsp; Minimum {job.YearsofExperience} years of experience</label>
                <label><img src={salaryIcon} className='kjobdetails_smallicon'></img>Salary: &nbsp; {job.Salary}</label>
                <label><img src={clockIcon} className='kjobdetails_smallicon'></img>Working Hours: &nbsp; {job.WeeklyWorkingHours} weekly</label>
                <label><img src={leaveIcon} className='kjobdetails_smallicon'></img>Paid Leaves: &nbsp; {job.YearlyPaidLeaves}</label>
                <div className='kjobdetails_aboutjob_desc'>
                    <p>{job.Description}</p>
                </div>
            </div>
        </div>
        <div className='kjobdetails_aboutjob'>
            <label className='kjobdetails_aboutjob_title'>About the Company</label>
            <hr className='kjobdetails_hr'/>
            <div className='kjobdetails_aboutcompany_header'>
                <img src={jobIcon} className='kjobdetails_aboutcompany_icon' alt='Company'></img>
                <div className='kjobdetails_aboutcompany_inner_header'>
                    <label className='kjobdetails_aboutcompany_title'>{company.name}</label>
                    <label className='kjobdetails_aboutcompany_location'>{Location}</label>
                </div>
                <button className='kjobdetails_companyBtn' onClick={()=>openProfile(company.username)}>View Company</button>
            </div>
        </div></>);
        }

    },[job,company,noOfApplications]);

  return (
    <div className='kjobdetails-container'>
        {con}
    </div>
  )
}
