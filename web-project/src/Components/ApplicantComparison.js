import React, { useState, useEffect } from 'react'
import jobicon from './workk.png'
import Footer from './Footer'

import './ApplicantComparison.css';

import narsun from './narsun.jpg'
import mindstorm from './mindstorm.jpg'

import axios from 'axios';
import { useNavigate } from 'react-router-dom';

    
function ApplicantComparison(props) {
    const navigate = useNavigate();



    //import person from './dummy.jpg'
    const person = 'dummy.jpg';
    const[img1,setImg1] = useState(person);
    const[img2,setImg2] = useState(person);
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

    const setData = async()=>{
        let param = {unames:props.appusernameset,names:props.appnameset};
        console.log("param")
        console.log(param);
        const msg = await axios.post("http://localhost:8000/getcomparisondata",param);
        //alert(JSON.stringify(msg.data));

        setName1(msg.data.user1.applicantname);
        setName2(msg.data.user2.applicantname);

        setUname1(msg.data.user1.applicantusername);
        setUname2(msg.data.user2.applicantusername);
        
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

//alert("hello")
        //const uimg = {username1:props.appusernameset[0],username2:props.appusername[1]};
        console.log(param.unames[0] + "," + param.unames[1]);
        const uimg = {username1:param.unames[0],username2:param.unames[1]};
        const res = await axios.post("http://localhost:8000/getusersimg",uimg);
        //alert(JSON.stringify(res.data));
        if (res.data.img1 == "") setImg1()
        setImg1(res.data.img1);
        setImg2(res.data.img2);

    }
    useEffect(() => {
        console.log("In Applicant Comparison ");
        console.log(props.appnameset);
        console.log(props.appusernameset);

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
                    <td><button class="uides-btn" onClick={() => openProfile(uname1)}><span>{name1} </span></button></td>
                    <td><button class="uides-btn" onClick={() => openProfile(uname2)}><span>{name2} </span></button></td>
                    
                </tr>
                <tr>
                    <td><img id="appcomp-img" src={`http://localhost:8000/profilepictures/${img1 || person}`}/>
                    </td>
                    <td><img  id="appcomp-img"  src={`http://localhost:8000/profilepictures/${img2|| person}`} /></td>
                    
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
            </table>
            </div>

            
        </div>


    );
}
export default ApplicantComparison;
  