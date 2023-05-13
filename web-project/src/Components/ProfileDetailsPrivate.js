import React, { useState,useEffect } from 'react'
import './ProfileDetails.css';
import picture from './dummy.jpg'
import editicon from './edit.png'
import networkicon from './network.png'
import workicon from './workk.png'
import { useNavigate } from 'react-router-dom';
import EditProfile from './EditProfile';
export default function ProfileDetails(props) {

    var user;

    var cons = {'followers':0,'following':0};
    var username = "loading";
    var name = "Loading";
    var bio;
    var worksAt = <></>;
    //const [contact,setDetails] = useState({name: 'Jobify User',username:'someone@jobify.com',Bio:'This is biooo bioooo biooo biooooooooooooooooooo'});

    //alert(props.user);

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
                        <label>Works At {user.worksAt}</label>
                    </div>;
        }
        
        if (props.type == "company")
        {
            worksAt = <div className="profdetails_workplace">
                        <label>Company type: &nbsp;&nbsp;&nbsp; {user.companyType}</label>
                    </div>;
        }

        cons = props.cons;

    }
  
    const navigate = useNavigate();
  
    const edit=()=> {

       
        navigate("editprofile");
        
        
               
    }



    var profilepic = picture; // dummy picture to use if no profile picture applied
    
    return (
        <div className="profdetails_container">
            <div id="profdetails_imgedit">
                <img src={profilepic} className="profdetails_profilePic"/>
            
            </div>
            <div className="profdetails_details">
                <div id="profdetails_namebtn">
                    <label id = "profdetails_name">{name}</label>
                    <button id="profdetails_btne" className='profdetails_button' onClick={() =>edit()}><div><img src={editicon} id="profdetails_conimg"></img><label>Edit</label></div></button>
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