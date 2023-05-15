import React, { useEffect, useState } from 'react'
import jobicon from './workk.png'

import './openvacancies.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function OpenVacancies(props) {

  const navigate=useNavigate();
  const [vacancyCon,setVacCon] = useState(<label>Loading</label>);

  const handleView = (job) => {
    //alert(job.JobId);
    var type = sessionStorage.getItem("userType");
    var path = "/" + type + "/viewjob";
    navigate(path, { state: job });
  };

  const handleApply = (job) => {
    //alert(job.JobId);
    var type = sessionStorage.getItem("userType");
    var path = "/" + type + "/applyjob";
    navigate(path, { state: job });
  };

  useEffect(() => {
    if (props.company)
    {
        const param = {"user":props.company.username};

        axios.post("http://localhost:8000/getcompanyjobs",param).then((response) => {
                //alert(response.data);
                //alert(JSON.stringify(response.data.data));
                if (response.data.data == "error")
                  alert("error");
                else
                  setVacCon(<ul>{response.data.data.map((list_item)=><li> 
                    <div id="openvacancies-emp-img"><img className='openvacancies-emp-icon' src={jobicon}/></div>
                    <div id="openvacancies-emp-name">&nbsp;&nbsp;{list_item.Designation}</div>&nbsp;&nbsp;
                    <button class="openvacancies-button" onClick={()=>{handleView(list_item)}}><span>View Details </span></button>
                    &nbsp;&nbsp;
                    <button class="openvacancies-button" onClick={()=>{handleApply(list_item)}}> <span>Apply Now </span></button>
      
                    <br></br><br></br></li>)}</ul>);
                //{educList.map((list_item)=>
                //alert('hi');
            })
            .catch(function (error) {
                alert(error);
            });
      }
  }, [props.company]);

    return (
        <div id="openvacancies-box">
             <div id="openvacancies-our-employees">Current Vacancies</div>   
              

              <br></br><br></br>
              {vacancyCon}
              
       </div>
    );
  }
  
  export default OpenVacancies;
  