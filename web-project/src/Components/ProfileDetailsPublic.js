import React, { useEffect, useState } from 'react'
import './ProfileDetails.css';
import picture from './dummy.jpg'
import connecticon from './follow.png'
import networkicon from './network.png'
import workicon from './workk.png'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

var person = 'person.png';

export default function ProfileDetails(props) {

    const [btn,setBtn] = useState(<></>);
    const [connected,setConctd] = useState(false);
    const [sessionUser, setSessionUser] = useState([]);
    
    var pf = 'person.png';
    const navigate = useNavigate();

    const checkConnected = async() =>{
       var param = {"curruser":sessionStorage.getItem("sessionID"),"conuser":props.user.username};
        await axios.post("http://localhost:8000/checkifconnected",param).then((response) => {
            if (response.data.exists == "error")
                alert("db error!");
            else if (response.data.exists == true)
                setBtn(<button id="profdetails_btn" className='profdetails_button' onClick={()=>{disconnect(props.user.username)}}><div><img src={connecticon} id="profdetails_conimg"></img><label>Disconnect</label></div></button>); // changes if already connected);    
            else
                setBtn(<button id="profdetails_btn" className='profdetails_button' onClick={()=>{connect(props.user.username)}}><div><img src={connecticon} id="profdetails_conimg"></img><label>Connect</label></div></button>); // changes if already connected);
            /*if (!connected)
                setBtn(<button id="profdetails_btn" className='profdetails_button' onClick={()=>{connect(props.user.username)}}><div><img src={connecticon} id="profdetails_conimg"></img><label>Connect</label></div></button>); // changes if already connected);
            else
                setBtn(<button id="profdetails_btn" className='profdetails_button' onClick={()=>{disconnect(props.user.username)}}><div><img src={connecticon} id="profdetails_conimg"></img><label>Disconnect</label></div></button>); // changes if already connected);    
        */
            })
        .catch(function (error) {
            alert(error);
        });
    }

    const connect=(conuser)=>{
        var curruser = sessionStorage.getItem("sessionID");
        //alert(conuser);
        var param = {"curruser":sessionStorage.getItem("sessionID"),"conuser":props.user.username};
        axios.post("http://localhost:8000/connectk",param).then((response) => {
            //alert(response.data);
           
           
           
            setBtn(<button id="profdetails_btn" className='profdetails_button' onClick={()=>{disconnect(props.user.username)}}><div><img src={connecticon} id="profdetails_conimg"></img><label>Disconnect</label></div></button>); // changes if already connected);
            axios
            .get(`http://localhost:8000/finduser/${sessionStorage.getItem("sessionID")}`)
            .then((res) => {
            //alert("HELLO");
              //setSessionUser(res.data);
              var sesUser = res.data;
              //alert(JSON.stringify(res.data));
              //alert(JSON.stringify(sessionUser));
              //alert("Please wait.");
              axios.post(`http://localhost:8000/addnotifconnect`, {
        
                usernames: props.user.username,
                notifusername: curruser,
                image: sesUser.user?.profilePicture || sesUser.company?.profilePicture || person
                });
            
                })
                .catch(function (error) {
                    alert(error);
                });
              
            })
            .catch((error) => console.log(error));
      

      
    }

    const disconnect=(conuser)=>{
        var curruser = sessionStorage.getItem("sessionID");
       // alert(conuser);
       var param = {"curruser":sessionStorage.getItem("sessionID"),"conuser":props.user.username};
        axios.post("http://localhost:8000/disconnectk",param).then((response) => {
            //alert(response.data);
            setBtn(<button id="profdetails_btn" className='profdetails_button' onClick={()=>{connect(props.user.username)}}><div><img src={connecticon} id="profdetails_conimg"></img><label>Connect</label></div></button>); // changes if already connected);
        })
        .catch(function (error) {
            alert(error);
        });
    }
    
    useEffect(()=>{
        checkConnected();

            axios
            .get(`http://localhost:8000/finduser/${props.user.username}`)
            .then((res) => {
              
              setUser(res.data);
              
            })
            .catch((error) => console.log(error));


    },[])
    
    const openProfile=(username)=>{

        if (username == sessionStorage.getItem("sessionID"))
        {
            var path = "/" + sessionStorage.getItem("userType") + "/ownprofile";
            navigate(path);
            return;
        }
   
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
    
                  navigate(path, { state: res.data.user });
              }
              else 
                console.log("error");
          })
          .catch(error => alert(error));
      }

    var user;

    var cons = {'followers':0,'following':0};
    var username = "loading";
    var name = "Loading";
    var bio;
    var worksAt = <></>;
    const [User, setUser] = useState([]);
    const [profilepic,setPic] = useState(picture);

    if (props.user)
    {
        user = props.user;
        username = user.username;
        name = user.name;

        if (user.bio)
        {
            bio = user.bio;
        }

        if (props.type == "user" && user.worksAt)
        {
            worksAt = <div className="profdetails_workplace">
                        <img id="profdetails_neticon" src={workicon}></img>
                        <label>Works At <a onClick={()=>openProfile(user.worksAt.CompanyUsername)}>@{user.worksAt.CompanyUsername}</a> as {user.worksAt.Designation}</label>
                    </div>;
        }
        
        if (props.type == "company")
        {
            worksAt = <div className="profdetails_workplace">
                        <label>Company type: &nbsp;&nbsp;&nbsp; {user.companyType}</label>
                    </div>;
        }
    }

    if (props.cons)
        cons = props.cons;
    
    return (
        <div className="profdetails_container">
            <img src={`http://localhost:8000/profilepictures/${User.user?.profilePicture || User.company?.profilePicture || pf}`} className="profdetails_profilePic"/>
            <div className="profdetails_details">
                <div id="profdetails_namebtn">
                    <label id = "profdetails_name">{name}</label>
                    {btn}
                </div>
                <label id = "profdetails_username">@{username}</label>
                <div className="profdetails_bio">
                    <p>{bio}</p>
                        
                        <br></br>
                        {worksAt}
                        <hr className='profdetails_hr'></hr>
                </div>
                <div className="profdetails_network">
                    <img id="profdetails_neticon" src={networkicon}></img>
                    <label id="profdetails_connections">{cons.followers} Followers &nbsp;&nbsp;&nbsp;&nbsp; {cons.following} Following</label>
                </div>
            </div>
        </div>
    );
}