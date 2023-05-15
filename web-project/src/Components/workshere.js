import React, { useEffect, useState } from 'react'
import empicon from './dummy.jpg'

import './workshere.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function WorksHere(props) {

  const [empCon,setEmpCon] = useState(<label>Loading</label>);

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

  useEffect(() => {
    if (props.company)
    {
        const param = {"user":props.company.username};

        axios.post("http://localhost:8000/getemployeesk",param).then((response) => {
                //alert(response.data);
                //alert(JSON.stringify(response.data.data));
                if (response.data.data == "error")
                  alert("error");
                else
                  setEmpCon(<ul>{response.data.data.map((list_item)=><li>
                            <div id="works-emp-img"><img className='works-emp-icon' src={empicon}></img></div>
                            <div id="works-emp-name"><a onClick={()=>openProfile(list_item.EmployeeUsername)}>{list_item.EmployeeName}</a></div>
                            <div id="works-emp-des">&nbsp;&nbsp;&nbsp;{list_item.Designation}</div>

                            <br></br>
                        </li>)}</ul>);
                //{educList.map((list_item)=>
                //alert('hi');
            })
            .catch(function (error) {
                alert(error);
            });
      }
  }, [props.company]);

    return (
        <div className="works-box">
              <div id="works-our-employees">Our Employees</div>   
              <br></br>

            {empCon}
        
       </div>
    );
  }
  
  export default WorksHere;
  