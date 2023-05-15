import React, { useEffect } from 'react'
import jobicon from './workk.png'
import axios from 'axios';
import {useState} from 'react';

import './CurrentApps.css';


import empicon from './dummy.jpg'

function CurrentAppRow(props)
{
    
    
    return(
        <tr>
        <td>
        <img className='works-emp-icon' src={empicon}></img>
            &nbsp;&nbsp;
            <a href="/">Nabeeha Mudassir</a>
        </td>
        <td>
            DevOpsEngineer
        </td>
        <td>
            <div id="nab-currentapps-btn-group">
               
                <div id="nab-currentapps-checkbox-wrapper">
                    <input id="nab-currentapps-checkbox" type="checkbox"></input>
                    &nbsp;&nbsp;
                    <label id="select-for-comp">Add to Compare</label>
                </div>
                
            </div>
        </td>
    </tr>);
}

function CurrentAppsPage(props) {
    const [jobid,setJobId] = useState();
    const [appname,setappname] = useState([]);
    const [appusername,setappusername] = useState([]);
    const [checkedapp, setCheckedApp] = useState([]);
    const [checkedid,setCheckedId] = useState([]);

    const handleCheckboxChange = (event, name, id) => {
        
       
        if (event.target.checked === true) {
            //alert("Setting company = " + comp.compName + " des= " + desig.des)
            setCheckedApp([
                ...checkedapp,
                name
             ]);
             setCheckedId([
                ...checkedid,
                id
             ]);
             
        }
        else{
            
            
            
        }
      };
    
    const returnRow = () =>{
        
        
        
            return appname.map((aname, index) => {
                return (<tr key={index}>
            <td>
            <img className='works-emp-icon' src={empicon}></img>
                &nbsp;&nbsp;
                <a href="/">{aname}</a>
            </td>
            
            <td>
                <div id="nab-currentapps-btn-group">
                   
                    <div id="nab-currentapps-checkbox-wrapper">
                        <input id="nab-currentapps-checkbox" type="checkbox" onChange={event => handleCheckboxChange(event,{aname})}></input>
                        &nbsp;&nbsp;
                        <label id="select-for-comp" >Add to Compare</label>
                    </div>
                    
                </div>
            </td>
        </tr>);
            })
    }
    
    function countCheckboxes () {
        if (document.querySelectorAll('input[type="checkbox"]:checked').length != 2)
            alert("Only 2 Jobs are Allowed for Comparison");
        
    }
    
    
    const setData = async () =>{
        //alert("I am in set data");
        const param = {jobid:props.jobid};
        //alert("param " + param.jobid);
        console.log("params: ");
        console.log(param);
        const msg = await axios.post("http://localhost:8000/getcurrentapplicants",param);
        //alert(JSON.stringify(msg.data.apps));
        alert("Showing All Applicants");
        let name_list = msg.data.apps.map(cname => cname.applicantname);
        let u_list = msg.data.apps.map(comp => comp.applicantusername);
        
       
        setappname(name_list);
        setappusername(u_list);

        console.log(appname);
        console.log(appusername);
        /*let des_list = msg.data.map(cname => cname.Designation);
        let comp_list = msg.data.map(comp => comp.CompanyName);
        let jobid_list = msg.data.map(comp => comp.JobId);
        console.log(jobid_list);*/
    }
    useEffect(() => {
      
        //alert(propsData);
        //console.log(propsData);
        setJobId(props.jobid);
        //alert("jobid =" + props.jobid);
        
        setData();
      }, [props.jobid]);
    return (


        <div id="nab-currentapps-wrapper">
            <div id="nab-innerapps-wrapper">All Applicants</div>

            <div id="nab-compare-div">
                <button class="nab-compareapps-button" onClick={countCheckboxes}>Compare 2 Applicants</button> 
                <label id="select3apps">Select 2 applicants to compare.</label>
            </div>
        
            <div>
                <table id="currentapps-table">
                   {returnRow()}
                </table>
            </div>
        </div>
    );
}

export default CurrentAppsPage;
  