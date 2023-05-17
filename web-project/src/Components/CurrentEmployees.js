
import jobicon from './workk.png'
import React,{useState,useEffect} from 'react'
import './CurrentEmployees.css';
import empicon from './dummy.jpg'
import axios from 'axios'
import './workshere.css';
import Modal from 'react-modal';
import DeleteModal from './DeleteConfirmationEmployee';
import { useNavigate } from 'react-router-dom';

Modal.setAppElement('#root');

function CurrentEmployeesComponent(props) {
    
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    
    const [empReq,setEmpReq] = useState([]);
    const [des,setDes] = useState([]);
    const[username,setUsername] = useState([]);
    const[empName,setEmpName] = useState([]);
    const[count,setCount] = useState(0);
    let sessionID;
    let param;
    const[current,setCurrent] = useState();
    const navigate = useNavigate();
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
            //alert("I am in current employees. I have received");
            //alert(props.empName + "," + props.empDes + "," + props.username);
            console.log("props: ");
            console.log(props.empName);
            console.log(props.empDes);
            console.log(props.username);
            
            /*YEH CHANGE KARO */
            /*setUsername(prevArray => [...prevArray, ...props.username]);
            setDes(prevArray => [...prevArray, ...props.empDes]);
            setEmpReq(prevArray => [...prevArray,... props.empName]);
            */


            props.callset();

            setUsername(prevArray => [...prevArray,props.username]);
            setDes(prevArray => [...prevArray,props.empDes]);
            setEmpReq(prevArray => [...prevArray,props.empName]);
            //alert("New state = " + username);
            alert("Employee will be added to current employees."); //IF I REMOVE THIS ALERT IT DOES NOT WORK
            console.log("New States = ");
            console.log(username);
            console.log(des);
        }
        setEmployees();
        
      },[props.empName,props.empDes,props.username,props.callset]);

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

    const  openDeleteModal = (index)=>{

        setDeleteModalOpen(true);

        removeEmployee(index);

        setDeleteModalOpen(false);
    }
    const empRow = () =>{
        return empReq.map((name, index) => {
            const desig = des[index];
            const uname = username[index];
            return (<tr><td>
        <img className='works-emp-icon' src={empicon}></img>
            &nbsp;&nbsp;
            <a onClick={()=>openProfile(uname)}>{name}</a>
        </td>
        <td>
            {desig}
        </td>
        <td>
            <DeleteModal remove={removeEmployee} selectedItem={index}/>   
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

  