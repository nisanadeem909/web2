
import jobicon from './workk.png'
import React,{useState,useEffect} from 'react'
import './CurrentEmployees.css';
import empicon from './dummy.jpg'
import axios from 'axios'
import './workshere.css';

function CurrentEmployeesComponent(props) {
    
    const [empReq,setEmpReq] = useState([]);
    const [des,setDes] = useState([]);
    const[username,setUsername] = useState([]);
    const[empName,setEmpName] = useState([]);
    const[count,setCount] = useState(0);
    let sessionID;
    let param;
    const[current,setCurrent] = useState();
    const  setEmployees = async() =>{
        
        let sessionID = sessionStorage.getItem('sessionID');
        let param = {"user":sessionID};
        setCurrent(param);
        //alert("sessionId: " + param);

        axios.post('http://localhost:8000/getcurrentemployees', param)
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
                console.log(username);
                console.log(des);
                console.log(empReq);
            });
            
        
    }
    useEffect(() => {
       
       
        if (props.empName !== undefined){
            alert("I am in current employees. I have received");
            alert(props.empName + "," + props.empDes + "," + props.username);
            /*console.log(props.empName);
            console.log(props.empDes);
            console.log(props.username);
            */
            
            setUsername(prevArray => [...prevArray, ...props.username]);
            setDes(prevArray => [...prevArray, ...props.empDes]);
            setEmpReq(prevArray => [...prevArray,... props.empName]);
            
            alert("New state = " + username);
            alert("New state "+ des);
        }
        setEmployees();
        
      },[props.empName,props.empDes,props.username]);

    const removeEmployee =(index)=>{
        //alert("I am in remove employee = " + index);
        let newobj = {"companyusername":current.user,"employeeusername":username[index]};
        
        
        axios.post('http://localhost:8000/deleteemployee', newobj)
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
            }
    }
    const empRow = () =>{
        return empReq.map((name, index) => {
            const desig = des[index];

            return (<tr><td>
        <img className='works-emp-icon' src={empicon}></img>
            &nbsp;&nbsp;
            <a href="/">{name}</a>
        </td>
        <td>
            {desig}
        </td>
        <td>
            <button class="nab-openvacancies-button" onClick={() => removeEmployee(index)}>Remove</button>    
        </td>
    </tr>
    );})}
    
    return (
        
        <div id="nab-current-emp-wrapper">
             <div id="nab-inner-emp-wrapper">
                Current Employees
             </div>
             <div id="nab-current-emp-table">
             <table id="customers">
                    {empRow()}
                    
                    
                </table>
             </div>
       </div>
    );
  }

  export default CurrentEmployeesComponent;

  