import React, { useEffect, useRef } from 'react'
import jobicon from './workk.png'
import Footer from './Footer'

import './JobComparison.css';

import narsun from './narsun.jpg'
import mindstorm from './mindstorm.jpg'
import empicon from './dummy.jpg'
import axios from 'axios';
import {useState} from 'react';
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
    const setData = async () => {
        alert("I am in axios of job comp");
        alert("props.jobset " + JSON.stringify(props.jobset));
        alert("props.compset " + JSON.stringify(props.compset));
        setJobs(props.jobset);
        setComps(props.compset);
        
        
        let newobj = {"comp1": props.compset[0].compName, "comp2":props.compset[1].compName,"job1":props.jobset[0].des,"job2":props.jobset[1].des};
        
        //setObj({"comp1": props.compset[0].compName, "comp2":props.compset[1].compName,"job1":props.jobset[0].des,"job2":props.jobset[1].des});
        alert("hello");
        alert(JSON.stringify(newobj));
        
        
        let salary1,degree1,exp1,wh1,paidleaves1,location1;
        let salary2,degree2,exp2,wh2,paidleaves2,location2;
        axios.post('http://localhost:8000/comparejobs', newobj)
        .then(response => {alert(JSON.stringify(response.data.job1));
            alert(JSON.stringify(response.data.job2));
            
            salary1 = response.data.job1.Salary;
            inputRef.current.value = salary1;
            //console.log("input ref = " + inputRef.current.value);
            salary2 = response.data.job2.Salary;
            
            exp1 = response.data.job1.Experience;
            exp2 = response.data.job2.Experience;
            wh1 = response.data.job1.WeeklyWorkingHours;
            wh2 = response.data.job2.WeeklyWorkingHours;
            paidleaves1 = response.data.job1.YearlyPaidLeaves;
            paidleaves2 = response.data.job2.YearlyPaidLeaves;

           degree1 = response.data.job1.DegreeRequired;
           degree2 = response.data.job2.DegreeRequired;
            });
        
        //alert("Showing salary = " + job1details);
        
        
      };
    useEffect(() => {
        setData();
      }, []);
    
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
                    <td><button class="uides-btn"><span>UI Designer at Narsun Studios </span></button></td>
                    <td><button class="uides-btn"><span>UI Designer at Mindstorm </span></button></td>
                    
                </tr>
                <tr>
                    <td><img id="jobcomp-img" src={narsun}/>
                    </td>
                    <td><img  id="jobcomp-img" src={mindstorm}/></td>
                    
                </tr>
                <tr>
                    <td  colspan="2">Salary & Yearly Bonus</td>
                    <td></td>
                    
                </tr>
                <tr>
                    <td ref={inputRef}></td>
                    <td>$9k Yearly + $0.5K Yearly Bonus</td>
                    
                </tr>
                <tr>
                    <td  colspan="2">Degree Required</td>
                    <td></td>
                    
                </tr>
                <tr>
                    <td>MPhil Degree in any CS Field</td>
                    <td>Bachelors in CS + industry experience</td>
                    
                </tr>
                <tr>
                    <td  colspan="2">Experience Required</td>
                    <td></td>
                    
                </tr>
                <tr>
                    <td>10 Years in Data Mining</td>
                    <td>5 Years in Field Work</td>
                    
                </tr>
                <tr>
                    <td  colspan="2">Working Hours</td>
                    <td></td>
                    
                </tr>
                <tr>
                    <td>10 to 6 with WFH Available</td>
                    <td>40 Hours Flexible Weekly</td>
                    
                </tr>
                <tr>
                    <td  colspan="2">Paid Leaves</td>
                    <td></td>
                    
                </tr>
                <tr>
                    <td>3 month-Paid-Maternity Leave</td>
                    <td>1 month-Paid-Leave</td>
                    
                </tr>
                <tr>
                    <td  colspan="2">Location</td>
                    <td></td>
                    
                </tr>
                <tr>
                    <td>Silicon Valley, USA</td>
                    <td>Texas</td>
                    
                </tr>
            </table>
            </div>

            
        </div>


    );
}
export default JobComparison;
  