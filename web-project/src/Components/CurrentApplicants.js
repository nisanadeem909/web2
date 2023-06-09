import React, { useEffect } from 'react'
import jobicon from './workk.png'
import axios from 'axios';
import {useState} from 'react';

import './CurrentApps.css';


import empicon from './dummy.jpg'
const person='dummy.jpg';
function CurrentAppRow(props)
{
    
    
    return(
        <tr>
        <td>
        <img className='works-emp-icon' src={empicon}></img>
            &nbsp;&nbsp;
            <a>Nabeeha Mudassir</a>
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
    const [checkeduname,setCheckedUname] = useState([]);
    const [images,setImages] = useState([]);
    
    const handleCheckboxChange =  ( event, nam, unam,index) => {
        
      // alert("In checkbox: name= "+nam.aname+ "," + unam.uname);
        if (event.target.checked) {
          
            const updatednames = [...checkedapp,appname[index.index]];
            setCheckedApp(updatednames);
            const updatedunames = [...checkeduname,appusername[index.index]];
            setCheckedUname(updatedunames);

          
             
        }
        else{
            
            if (checkedapp.length!=0){
                /*const newNames = checkedapp.filter((selectedRow) => selectedRow !== appname[index]);
                setCheckedApp(newNames);*/
                const i = checkedapp.indexOf(appname[index]);
                const updatednames = [...checkedapp];
                updatednames.splice(i,1);
                setCheckedApp(updatednames);
            }
            if (checkeduname.length!=0){
                /*const newUsernames = checkeduname.filter((selectedRow) => selectedRow !== appusername[index]);
                console.log("Filterin")
                //const newUsernames = checkeduname.filter((selectedRow) => console.log(selectedRow));
                console.log(newUsernames);
                setCheckedUname([newUsernames]);*/

                const i = checkeduname.indexOf(appusername[index]);
                const updatedUsernames = [...checkeduname];
               updatedUsernames.splice(i,1);
                setCheckedUname(updatedUsernames);
                
            }
           
            console.log("unchecking: ")
            console.log(checkedapp);
            console.log(checkeduname);
            
        }
      };
      
    const returnRow = () =>{
            return appname.map((aname, index) => {
                const uname = appusername[index];
                const img = images[index];
                
                    
                return (<tr key={index}>
            <td>
            <img className='works-emp-icon'src={`http://localhost:8000/profilepictures/${img|| person}`} ></img>
                &nbsp;&nbsp;
                <label>{aname}</label>
            </td>
            
            <td>
                <div id="nab-currentapps-btn-group">
                   
                    <div id="nab-currentapps-checkbox-wrapper">
                        <input id="nab-currentapps-checkbox" type="checkbox" onChange={event => handleCheckboxChange(event,{aname},{uname},{index})}></input>
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
            alert("Only 2 Applicants are Allowed for Comparison");
        else{
                /* Setting the props */
                
                console.log("Sending");
                console.log(checkeduname);
                console.log(checkedapp);
                
                props.appusernameset(checkeduname);
                props.appnameset(checkedapp);
                
                
        }
        
    }
    
    
    const setData = async () =>{
        //alert("I am in set data");
        const param = {jobid:props.jobid};
        //alert("param " + param.jobid);
        console.log("params: ");
        console.log(param);
        const msg = await axios.post("http://localhost:8000/getcurrentapplicants",param);
        
        let name_list = msg.data.apps.map(cname => cname.applicantname);
        let u_list = msg.data.apps.map(comp => comp.applicantusername);
        
       
        setappname(name_list);
        setappusername(u_list);
        
        console.log(appname);
        console.log(appusername);
        const u = {u_list:u_list};
        const profpic = await axios.post("http://localhost:8000/getapplicantimages",u);
        //alert(JSON.stringify(profpic.data.c1));
        const pictures = profpic.data.c1.map(item => item.profilePicture);
        console.log(pictures);
        setImages(pictures);
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
  