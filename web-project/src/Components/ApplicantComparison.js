import React, { useEffect } from 'react'
import jobicon from './workk.png'
import Footer from './Footer'

import './ApplicantComparison.css';

import narsun from './narsun.jpg'
import mindstorm from './mindstorm.jpg'
import empicon from './dummy.jpg'
import axios from 'axios';
import {useState} from 'react';
function ApplicantComparison(props) {
    
    const[message,setmsg ]= useState();
    const[name1,setName1] = useState("Applicant 1");
    const[name2,setName2] = useState("Applicant 2");
    const[uname1,setUname1] = useState();
    const[uname2,setUname2] = useState();
    const[skills1,setSkills1] = useState([]);
    const[skills2,setSkills2] = useState([]);
    const[deg1,setDeg1] = useState("Not Selected");
    const[deg2,setDeg2] = useState("Not Selected");
    const[uni1,setUni1] = useState("Not Selected");
    const [uni2,setUni2] = useState("Not Selected");
    const[maj1,setMaj1] = useState("Not Selected");
    const[maj2,setMaj2] = useState("Not Selected");
    const[exp1,setExp1] = useState("Not Selected");
    const[exp2,setExp2] = useState("Not Selected");
    const[ans1,setAns1] = useState("Not Selected");
    const[ans2,setAns2] = useState("Not Selected");
    const setData = async()=>{
        let param = {unames:props.appusernameset,names:props.appnameset};
        console.log("param")
        console.log(param);
        const msg = await axios.post("http://localhost:8000/getcomparisondata",param);
        //alert(JSON.stringify(msg.data));

        setName1(msg.data.user1.applicantname);
        setName2(msg.data.user2.applicantname);
        
        setDeg1(msg.data.user1.lastdegree.degree);
        setDeg2(msg.data.user2.lastdegree.degree);

        setUni1(msg.data.user1.lastdegree.university);
        setUni2(msg.data.user2.lastdegree.university);

        setMaj1(msg.data.user1.lastdegree.major);
        setMaj2(msg.data.user2.lastdegree.major);
        
        setExp1(msg.data.user1.yearsExp);
        setExp2(msg.data.user2.yearsExp);

        setAns1(msg.data.user1.answer);
        setAns2(msg.data.user2.answer);

    }
    useEffect(() => {
        console.log("In Applicant Comparison ");
        console.log(props.appnameset);
        console.log(props.appusernameset);
/*START FROM HERE */
        setName1(props.appnameset[0]);
        setName2(props.appnameset[1]);
        console.log("name1 = ");
        console.log( props.appnameset[0]);
        console.log(name1);
        setData();
        
      }, [props.appusernameset, props.appnameset]);
    return (


        <div id="nab-currentapp-wrapper">
            <div id="nab-compareapps-wrapper">Comparison</div>

            
        
            <div>
            <table id="appcomparison-table">
                
                <tr>
                    <td  colspan="2">THIS OR THAT</td>
                    <td></td>
                    
                </tr>
                
                <tr>
                    <td><button class="uides-btn"><span>{name1} </span></button></td>
                    <td><button class="uides-btn"><span>{name2} </span></button></td>
                    
                </tr>
                <tr>
                    <td><img id="appcomp-img" src={empicon}/>
                    </td>
                    <td><img  id="appcomp-img" src={empicon}/></td>
                    
                </tr>
                <tr>
                    <td  colspan="2">Industry Experience in Years</td>
                    <td></td>
                    
                </tr>
                <tr>
                    <td>{exp1}</td>
                    <td>{exp2}</td>
                    
                </tr>
                <tr>
                    <td  colspan="2">Highest Held Degree </td>
                    <td></td>
                    
                </tr>
                <tr>
                    <td>{deg1}</td>
                    <td>{deg2}</td>
                    
                </tr>
                <tr>
                    <td  colspan="2">Institution where Degree was Obtained</td>
                    <td></td>
                    
                </tr>
                <tr>
                    <td>{uni1}</td>
                    <td>{uni2}</td>
                    
                </tr>
                <tr>
                    <td  colspan="2">Major</td>
                    <td></td>
                    
                </tr>
                <tr>
                    <td>{maj1}</td>
                    <td>{maj2}</td>
                    
                </tr>
               
                <tr>
                    <td  colspan="2">Job Motivation</td>
                    <td></td>
                    
                </tr>
                <tr>
                    <td>{ans1}</td>
                    <td>{ans2}</td>
                    
                </tr>
            </table>
            </div>

            
        </div>


    );
}
export default ApplicantComparison;
  