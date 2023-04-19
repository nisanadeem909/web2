import React from 'react'
import './ProfileDetails.css';
import picture from './dummy.jpg'
import connecticon from './follow.png'
import networkicon from './network.png'

export default function ProfileDetails() {

    var btn = 
    <button id="profdetails_btn" className='profdetails_button'><div><img src={connecticon} id="profdetails_conimg"></img><label>Connect</label></div></button>; // changes if already connected

    var cons = 0;
    var username = "@komalwaseem";
    var name = "Komal Waseem";
    var bio = "This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. ";

    var profilepic = picture; // dummy picture to use if no profile picture applied
    
    return (
        <div className="profdetails_container">
            <img src={profilepic} className="profdetails_profilePic"/>
            <div className="profdetails_details">
                <div id="profdetails_namebtn">
                    <label id = "profdetails_name">{name}</label>
                    {btn}
                </div>
                <label id = "profdetails_username">{username}</label>
                <div className="profdetails_bio">
                    <p>{bio}</p>
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