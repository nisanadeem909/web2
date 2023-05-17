import React,{useState,useEffect} from 'react'

import jobicon from './workk.png'

import './EmployeeRequests.css';
import empicon from './dummy.jpg';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


function EmpRequests(props) {
    
    const [empReq,setEmpReq] = useState([]);
    const [des,setDes] = useState([]);
    const[username,setUsername] = useState([]);
    const[empName,setEmpName] = useState([]);
    const[count,setCount] = useState(0);
    const navigate = useNavigate();
    
    const[current,setCurrent] = useState();
   const  setEmployeeRequests = async() =>{
        
        let sessionID = sessionStorage.getItem('sessionID');
        let param = {"user":sessionID};
        setCurrent(param);
        //alert("sessionId: " + param);

        axios.post('http://localhost:8000/employeerequests', param)
        .then(res => {
                //alert(JSON.stringify(res.data.empreq));
                //check for error here
                let name_list = res.data.empreq.map(cname => cname.EmployeeName);
                setEmpReq(name_list);

                let username_list = res.data.empreq.map(cname => cname.EmployeeUsername);
                setUsername(username_list);

                let des_list = res.data.empreq.map(cname => cname.Designation);
                setDes(des_list);

                
                setCount(des_list.length);

                
            });
            
        
    }
    useEffect(() => {
       
        setEmployeeRequests();
        
      },[]);
    const acceptRequest = (index) =>{
        //alert("I am in accept Request = " + index);
        let newobj = {"companyusername":current.user,"employeeusername":username[index],"empname":empReq[index],"designation":des[index]};
        
        
        axios.post('http://localhost:8000/acceptemployeerequest', newobj)
        .then(res => {
               
            //alert(JSON.stringify(res.data.msg));
            });

            /*Send Accepted Employee as Props*/
           
                let empuname_arr = [""],empdes_arr=[""],empname_arr=[""];
                //alert("I ave clicked on " + username[index] + "," + empReq[index]);
                let u = username[index];
                let n = empReq[index];
                let d = des[index]; 
                
                empuname_arr.push(u);
                empdes_arr.push(d);
                empname_arr.push(n);
                const copieduname = [...username.slice(index, index+1)];
                const copiedname = [...empReq.slice(index, index+1)];
                const copieddes = [...des.slice(index, index+1)];
                console.log(copieduname);
                console.log(copieddes);
                console.log(copiedname);

                if (props.usernameSet!==undefined){
                props.usernameSet(u);
                props.nameSet(n);
                props.desSet(d);}
               

            let u_array = username.slice();
            let des_array = des.slice();
            let names_array = empReq.slice();
            if (index !== -1) {
                u_array.splice(index, 1);
                des_array.splice(index,1);
                names_array.splice(index,1);
                console.log(u_array);
                console.log(des_array);
                console.log(names_array);

                setDes(des_array);
                setUsername(u_array);
                setEmpReq(names_array);
                setCount(des_array.length);


            }
        
    }
    const deleteRequest = (index) =>{
        //alert("I am in delete Request = " + index);
        let newobj = {"companyusername":current.user,"employeeusername":username[index],"empname":empReq[index],"designation":des[index]};
        
        
        axios.post('http://localhost:8000/deleteemployeerequest', newobj)
        .then(res => {
               
            //alert(JSON.stringify(res.data.msg));
            });
            let u_array = username.slice();
            let des_array = des.slice();
            let names_array = empReq.slice();
            if (index !== -1) {
                u_array.splice(index, 1);
                des_array.splice(index,1);
                names_array.splice(index,1);
                console.log(u_array);
                console.log(des_array);
                console.log(names_array);

                setDes(des_array);
                setUsername(u_array);
                setEmpReq(names_array);
                setCount(des_array.length);
            }
        
    }
    const openProfile=(username)=>{
   

        if (username == sessionStorage.getItem("sessionID"))
            {
                var path = "/" + sessionStorage.getItem("userType") + "/ownprofile";
                navigate(path);
                return;
            }
    
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
    const reqRow = () =>{
        return empReq.map((name, index) => {
            
            const desig = des[index];
            const uname = username[index];
            return (<tr>
        <td>
        <div id="wrap-wrap-wrap">
            
            <div class="empreq-works-emp-img"><img className='empreq-wrap-works-emp-icon' src={empicon}></img></div>
            &nbsp;&nbsp;
            
            <div id="nab-emp-detail-wrapper">
                <a id="nab-empreq-name" onClick={()=>openProfile(uname)}>{name}</a>
                
                <label id="nab-emp-des">{desig}</label>
            </div>

        </div> 
        </td>
        
        <td>
            <div id="btn-wrapper">
            <button class="nab-accept-btn" onClick={() => acceptRequest(index)}>&#x2713;</button>
            <button class="nab-decline-btn" onClick={() => deleteRequest(index)}>X</button>    
            </div>
        </td>
    </tr>);})}



      return (
        
        <div id="nab2-current-emp-wrapper">
             <div id="nab2-inner-emp-wrapper">
                Requests({count})
             </div>
             <div id="nab-current-emp-table">
             <table id="customers">
                    
                    {reqRow()}
                    
                </table>
             </div>
       </div>
    );
  }

  export default EmpRequests;

  