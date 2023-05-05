import React, { useState } from 'react'
import './ProfileDetails.css';
import picture from './dummy.jpg'
import editicon from './edit.png'
import networkicon from './network.png'
import workicon from './workk.png'
import { useNavigate } from 'react-router-dom';
import EditProfile from './EditProfile';
export default function ProfileDetails() {

    var cons = 0;
    var username = "@komalwaseem";
    var name = "Komal Waseem";
    var bio = "This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. ";
    
    const [contact,setDetails] = useState({name: 'Jobify User',username:'someone@jobify.com',Bio:'This is biooo bioooo biooo biooooooooooooooooooo'});

  
    const navigate = useNavigate();
  
    const edit=()=> {

       
        navigate("editprofile",{ state: { id : 10, namee: 'Jobify User' } });
        
        
               
    }



    var profilepic = picture; // dummy picture to use if no profile picture applied
    
    return (
        <div className="profdetails_container">
            <div id="profdetails_imgedit">
                <img src={profilepic} className="profdetails_profilePic"/>
                <button className="profdetails_editpfp profdetails_button"><img src={editicon} id="profdetails_conimg"></img></button>
            </div>
            <div className="profdetails_details">
                <div id="profdetails_namebtn">
                    <label id = "profdetails_name">{name}</label>
                    <button id="profdetails_btne" className='profdetails_button' onClick={() =>edit()}><div><img src={editicon} id="profdetails_conimg"></img><label>Edit</label></div></button>
                </div>
                <label id = "profdetails_username">{username}</label>
                
                <div className="profdetails_bio">
                    <p>{bio}</p>
                    <br></br>
                    <div className="profdetails_workplace">
                        <img id="profdetails_neticon" src={workicon}></img>
                        <label>Works At Mindstorm Studios</label>
                    </div>
                    
                    <hr className='profdetails_hr'></hr>
                </div>
                
                

                <div className="profdetails_network">
                    <img id="profdetails_neticon" src={networkicon}></img>
                    <label id="profdetails_connections">{cons} Connections</label>
                </div>
            </div>
        </div>
    );
}