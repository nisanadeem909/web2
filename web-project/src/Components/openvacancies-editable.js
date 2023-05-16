import React, { useEffect, useState } from 'react'
import jobicon from './workk.png'

import './openvacancies.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function OpenVacanciesEditable() {

  const navigate=useNavigate();
  const [vacancyCon,setVacCon] = useState(<label>Loading</label>);

  const handleView = (job) => {
    //alert(job.JobId);
    navigate('/company/vacancies/editvacancy', { state: job });
  };

  useEffect(() => {
    const sessionID = sessionStorage.getItem('sessionID');
    const param = {"user":sessionID};

    axios.post("http://localhost:8000/getcompanyjobs",param).then((response) => {
            //alert(response.data);
            //alert(JSON.stringify(response.data.data));
            if (response.data.data == "error")
              alert("error");
            else
               setVacCon(<ul>{response.data.data.map((list_item)=><li> <div id="openvacancies-emp-img"><img className='openvacancies-emp-icon' src={jobicon}/></div>
               <div id="openvacancies-emp-name">&nbsp;&nbsp;<a onClick={()=>handleView(list_item)}>{list_item.Designation}</a></div>&nbsp;&nbsp;
 
               <br></br><br></br></li>)}</ul>);
            //{educList.map((list_item)=>
            //alert('hi');
        })
        .catch(function (error) {
            alert(error);
        });
  }, []);

    return (
        <div id="openvacancies-box">
             <div id="openvacancies-our-employees">Current Vacancies</div>   
             
             <br></br>
             
             {vacancyCon}
              <br></br><br></br>
              <button class="openvacancies-button" onClick={()=>navigate('/company/vacancies')}> <span>View All</span></button>
              
       </div>
    );
  }
  
  export default OpenVacanciesEditable;
  