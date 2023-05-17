import React, { useEffect, useRef } from 'react'
import jobicon from './workk.png'
import Footer from './Footer'

import './JobComparison.css';

import narsun from './narsun.jpg'
import mindstorm from './mindstorm.jpg'
import empicon from './dummy.jpg'
import axios from 'axios';
import {useState} from 'react';
const person = 'person.png'
function JobComparison(props) {
    const [obj,setObj] = useState({
        comp1:"",
        comp2:"",
        job1:"",
        job2:""
        
    });
    const [job1obj,setjob1] = useState([]);
    const[job2obj,setjob2] = useState([]);
    const [jobs,setJobs] = useState([]);
    const [comps,setComps] = useState([]);
    const inputRef = useRef(null);
    const [sal1,setSal1] = useState("Nothing Selected");
    const [sal2,setSal2] = useState("Nothing Selected");
    const [deg1,setdeg1] = useState("Nothing Selected");
    const [deg2,setdeg2] = useState("Nothing Selected");
    const [exp1,setexp1] = useState("Nothing Selected");
    const [exp2,setexp2] = useState("Nothing Selected");
    const [wh1,setwh1] = useState("Nothing Selected");
    const [wh2,setwh2] = useState("Nothing Selected");
    const [leaves1,setleaves1] = useState("Nothing Selected");
    const [leaves2,setleaves2] = useState("Nothing Selected");
    const[major1,setmaj1] = useState("Nothing Selected");
    const[major2,setmaj2] = useState("Nothing Selected");
    const[des1,setdes1] = useState("Job-1");
    const[des2,setdes2] = useState("Job-2");
    const[c1,setc1] = useState("Company-1");
    const[c2,setc2] = useState("Company-2");
    const[uname1,setuname1] = useState();
    const[uname2,setuname2] = useState();

    const[img1,setImg1] = useState();
    const[img2,setImg2] = useState();
    const setData = async () => {
        
        setJobs(props.jobset);
        setComps(props.compset);
        
        
        let newobj = {"jobid1":props.idset[0].j_id,"jobid2":props.idset[1].j_id};
        
        axios.post('http://localhost:8000/comparejobs', newobj)
        .then(response => {
       // alert(JSON.stringify(response.data));   
            setuname1(response.data.job1.CompanyUsername);
            setuname2(response.data.job2.CompanyUsername);
            console.log(uname1);console.log(uname2);
            setc1(response.data.job1.CompanyName);
            setc2(response.data.job2.CompanyName);
            setdes1(response.data.job1.Designation);
            setdes2(response.data.job2.Designation);
           setSal1(response.data.job1.Salary);
           setSal2(response.data.job2.Salary);
           setexp1(response.data.job1.YearsofExperience)
           setexp2(response.data.job2.YearsofExperience)
           setwh1(response.data.job1.WeeklyWorkingHours)
           setwh2(response.data.job2.WeeklyWorkingHours)
           setleaves1(response.data.job1.YearlyPaidLeaves)
           setleaves2(response.data.job2.YearlyPaidLeaves)
           setdeg1(response.data.job1.DegreeRequired);
           setdeg2(response.data.job2.DegreeRequired);
           setmaj1(response.data.job1.MajorRequired);
           setmaj2(response.data.job2.MajorRequired);

           const c_img = {username1:response.data.job1.CompanyUsername,username2:response.data.job2.CompanyUsername};

           axios.post('http://localhost:8000/getcompanyimg', c_img)
           .then(response => {
                                setImg1(response.data.img1);
                                setImg2(response.data.img2);
                            });
           
            });
           
        //alert("Showing salary = " + job1details);
        
        
      };
      
    useEffect(() => {
        if (props.jobset && props.compset)
        setData();
        
      }, [props.jobset,props.compset]);
    
    return (


        <div id="nab-currentjobs-wrapper">
            <div id="nab-comparejobs-wrapper">Comparison</div>

            
        
            <div>
            <table id="jobcomparison-table">
                
                <tr>
                    <td  colspan="2">THIS OR THAT</td>
                    <td></td>
                    
                </tr>
                
                <tr>
                    <td><label class="uides-btn"><span>{des1} at {c1} </span></label></td>
                    <td><label class="uides-btn"><span>{des2} at {c2} </span></label></td>
                    
                </tr>
                <tr>
                    <td><img id="jobcomp-img" src={`http://localhost:8000/profilepictures/${img1 || person}`}/>
                    </td>
                    <td><img  id="jobcomp-img"  src={`http://localhost:8000/profilepictures/${img2 || person}`}/></td>
                    
                </tr>
                <tr>
                    <td  colspan="2"><strong>Salary & Yearly Bonus</strong></td>
                    <td></td>
                    
                </tr>
                <tr>
                    <td >{sal1} </td>
                    <td>{sal2}</td>
                    
                </tr>
                <tr>
                    <td  colspan="2"><strong>Degree of Preference</strong></td>
                    <td></td>
                    
                </tr>
                <tr>
                    <td>{deg1}</td>
                    <td>{deg2}</td>
                    
                </tr>
                <tr>
                    <td  colspan="2"><strong>Preferred Experience in Years</strong></td>
                    <td></td>
                    
                </tr>
                <tr>
                    <td>{exp1}</td>
                    <td>{exp2}</td>
                    
                </tr>
                <tr>
                    <td  colspan="2"><strong>Average Working Hours</strong></td>
                    <td></td>
                    
                </tr>
                <tr>
                    <td>{wh1}</td>
                    <td>{wh2}</td>
                    
                </tr>
                <tr>
                    <td  colspan="2"><strong>Yearly Paid Leaves</strong></td>
                    <td></td>
                    
                </tr>
                <tr>
                    <td>{leaves1}</td>
                    <td>{leaves2}</td>
                    
                </tr>
                <tr>
                    <td  colspan="2"><strong>Major Preferred</strong></td>
                    <td></td>
                    
                </tr>
                <tr>
                    <td>{major1}</td>
                    <td>{major2}</td>
                    
                </tr>
            </table>
            </div>

            
        </div>


    );
}
export default JobComparison;
  