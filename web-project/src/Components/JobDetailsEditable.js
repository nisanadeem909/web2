import React,{useState} from 'react'
import './JobDetails.css';
import applyIcon from './applyy.png'
import eduIcon from './edu.png'
import expIcon from './exp.png'
import clockIcon from './clocki.png'
import salaryIcon from './salaryi.png'
import leaveIcon from './leavei.png'
import jobIcon from './workk.png'
import { useNavigate } from "react-router-dom";
import EditVacancyModal from './EditVacancyModal'

export default function JobDetails() {

    const navigate = useNavigate();

    //salary, location, working hours, paid leaves, degree, experience, description, company,

    const [jobDetails,setJobDetails] = useState({'salary': '50000','workingHours':'3','paidLeaves':'8', 'position': 'Internship', 'datePosted':'12/12/2022','requirements':{'degree':'Bachelors', 'major':'Computer Science','experience':'2'},'description':'This is a job description. This is a job description. This is a job description. This is a job description. This is a job description. This is a job description. This is a job description. This is a job description. This is a job description. This is a job description. This is a job description. This is a job description. This is a job description. This is a job description. This is a job description. This is a job description. This is a job description. This is a job description. This is a job description. This is a job description. This is a job description. This is a job description. This is a job description. This is a job description. This is a job description. This is a job description. This is a job description. This is a job description. This is a job description. This is a job description. '});
    var companyDetails = {'Location':{'country': 'Pakistan', 'city':'Lahore'},'name':'Devsinc','rating':'4.5'};
    var noOfApplicants = 12;

    const edit=(newItem)=>{
        setJobDetails(newItem);
    }

  return (
    <div className='kjobdetails-container'>
        <div className='kjobdetails_header'>
            <label className='kjobdetails_position'>{jobDetails.position}</label>
            <button className='kjobdetails_applyBtn'>View Applicants <img src={applyIcon} alt='' className='kjobdetails_applyicon'></img></button>
        </div>
        <div className="kjobdetails_subheader">
            <label>{companyDetails.Location.city}, {companyDetails.Location.country}</label>
            <label>Posted: {jobDetails.datePosted}</label>
            <label>{noOfApplicants} Applicants</label>
        </div>
        <div className='kjobdetails_aboutjob'>
            <div class="kjobdetails_flexspacebtwn">
                <label className='kjobdetails_aboutjob_title'>About the Job</label>
                <EditVacancyModal selectedItem={jobDetails} changeVacancy={edit}/>
            </div>
            <hr className='kjobdetails_hr'/>
            <div className='kjobdetails_aboutjob_inner'>
                <label><img src={eduIcon} className='kjobdetails_smallicon'></img>Degree requirements: &nbsp; {jobDetails.requirements.degree} in {jobDetails.requirements.major} or related fields</label>
                <label><img src={expIcon} className='kjobdetails_smallicon'></img>Experience requirements: &nbsp; Minimum {jobDetails.requirements.experience} years of experience</label>
                <label><img src={salaryIcon} className='kjobdetails_smallicon'></img>Salary: &nbsp; {jobDetails.salary}</label>
                <label><img src={clockIcon} className='kjobdetails_smallicon'></img>Working Hours: &nbsp; {jobDetails.workingHours} weekly</label>
                <label><img src={leaveIcon} className='kjobdetails_smallicon'></img>Paid Leaves: &nbsp; {jobDetails.paidLeaves}</label>
                <div className='kjobdetails_aboutjob_desc'>
                    <p>{jobDetails.description}</p>
                </div>
            </div>
        </div>
        <div className='kjobdetails_aboutjob'>
            <label className='kjobdetails_aboutjob_title'>About the Company</label>
            <hr className='kjobdetails_hr'/>
            <div className='kjobdetails_aboutcompany_header'>
                <img src={jobIcon} className='kjobdetails_aboutcompany_icon' alt='Company'></img>
                <div className='kjobdetails_aboutcompany_inner_header'>
                    <label className='kjobdetails_aboutcompany_title'>{companyDetails.name}</label>
                    <label className='kjobdetails_aboutcompany_location'>{companyDetails.Location.city}, {companyDetails.Location.country}</label>
                </div>
                <button className='kjobdetails_companyBtn' onClick={()=>navigate('/company/ownprofile')}>Go to Profile</button>
            </div>
        </div>
    </div>
  )
}
