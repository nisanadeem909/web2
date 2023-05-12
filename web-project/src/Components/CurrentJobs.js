import React, { useEffect } from 'react'
import jobicon from './workk.png'
import axios from 'axios';
import {useState} from 'react';


import './CurrentJobs.css';


import empicon from './dummy.jpg'

function CurrentJobRow(props)
{
    
    return(
        <tr>
            <td>
            <img className='works-emp-icon' src={empicon}></img>
                &nbsp;&nbsp;
                <a href="/">{props.companyname}</a>
            </td>
            <td>
                {props.designation}
            </td>
            <td>
                <div id="nab-currentjobs-btn-group">
                
                    <div id="nab-currentjobs-checkbox-wrapper">
                        <input id="nab-currentjobs-checkbox" type="checkbox"></input>
                        &nbsp;&nbsp;
                        <label id="select-for-comp">Add to Compare</label>
                    </div>
                    
                </div>
            </td>
    </tr>);
}

function CurrentJobsPage() {
    
    const [componentArray, setJobs] = useState([]);
    const JobsArray = [
        <CurrentJobRow  companyname="Spadasoft" designation="FrontEnd Eng"/>,
        <CurrentJobRow  companyname="Educative" designation="Backend Eng"/>,
        
    ];
    
    const [companyName,setCompanyNames] = useState([]);
    const [designations,setDesignations] = useState([]);
   
    let uniqueid = 31;
    const incrementID = ()=>{
        
        uniqueid+=3;
       // alert(uniqueid);
    }
    const [checkedcomp, setCheckedComp] = useState([]);
    const [checkeddes, setCheckedDes] = useState([]);
    const handleCheckboxChange = (event, rowid, comp, desig) => {
        
        incrementID();
        if (checkedcomp.length >= 2){const empty = []; setCheckedComp(empty);setCheckedDes(empty);}
        if (event.target.checked === true) {
            alert("Setting company = " + comp + " des= " + desig)
            setCheckedComp([
                ...checkedcomp,
                comp
             ]);
             setCheckedDes([
                ...checkeddes,
                desig
             ]);
            
        }
        else{
            /*this isnt working */
            /*const nextSelectedRows = checkedcomp.filter(selectedRow => selectedRow != comp);
            alert("I am here");
            console.log("filetered: " + nextSelectedRows)
            setCheckedComp(nextSelectedRows)
                
            const nextSelectedRow = checkeddes.filter(selectedRow => selectedRow != desig);
            setCheckedDes(nextSelectedRow)*/
                
        }
      };
    
    const getData = async () => {
        const msg = await axios.get("http://localhost:8000/currentjobs");
        alert("I am in get data");
        //alert("I am in axios = " + msg.data[0].JobId);
        let des_list = msg.data.map(cname => cname.Designation);
        let comp_list = msg.data.map(comp => comp.CompanyName);
        
        setCompanyNames(comp_list);
        setDesignations(des_list);
        
        /*alert("all designation = "+ designations + "des_list = " + des_list);
        alert("company ames " + companyName + "comp_list " + comp_list);*/
      };



    useEffect(() => {
        
        setJobs(JobsArray);
        getData();
      }, []);



    function countCheckboxes () {
        if (document.querySelectorAll('input[type="checkbox"]:checked').length != 2)
            alert("Only 2 Jobs are Allowed for Comparison");
        else{ alert("Checked boxes = " + checkeddes);
            console.log(checkeddes);
            console.log(checkedcomp);}
           // console.log(checked[0] + "," + checked[1]);
        
    }
    const returnRow = ()=>{
        return  companyName.map((item, index) => {
            
            const correspondingItem = designations[index];
            return (<tr key={index}>
                <td>
                    <img className='works-emp-icon' src={empicon}></img>
                        &nbsp;&nbsp;
                        <a href="/">{item}</a>
                </td>
                    <td>
                        {correspondingItem}
                    </td>
                    <td>
                        <div id="nab-currentjobs-btn-group">
                        
                            <div id="nab-currentjobs-checkbox-wrapper">
                                <input id="nab-currentjobs-checkbox" onChange={event => handleCheckboxChange(event, uniqueid, {correspondingItem},{item})} type="checkbox"></input>
                                &nbsp;&nbsp;
                                <label id="select-for-comp">Add to Compare</label>
                            </div>
                            
                        </div>
                    </td>
                </tr>);
            })
    }
    return (


        <div id="nab-currentjobs-wrapper">
            <div id="nab-innerjobs-wrapper">All Jobs</div>

            <div id="nab-compare-div">
                <button class="nab-comparejobs-button" onClick={countCheckboxes}>Compare 2 Jobs</button> 
                <label id="select3jobs">Select 2 jobs to compare.</label>
            </div>
        
            <div>
                <table id="currentjobs-table">
                  {/* {componentArray}*/}
                  {returnRow()}
                  
                  
                  
                            
                </table>
            </div>
        </div>
    );
}

export default CurrentJobsPage;
  