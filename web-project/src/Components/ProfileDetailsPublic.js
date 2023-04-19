import React from 'react'
import './ProfileDetails.css';
import picture from './dummy.jpg'
import connecticon from './follow.png'
import networkicon from './network.png'

export default function ProfileDetails() {

    var btn = 
    <button id="btn"><div><img src={connecticon} id="conimg"></img><label>Connect</label></div></button>; // changes if already connected

    var cons = 0;
    var username = "@komalwaseem";
    var name = "Komal Waseem";
    var bio = "This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. ";

    var profilepic = picture; // dummy picture to use if no profile picture applied
    
    return (
        <div className="container">
            <img src={profilepic} className="profilePic"/>
            <div className="details">
                <div id="namebtn">
                    <label id = "name">{name}</label>
                    {btn}
                </div>
                <label id = "username">{username}</label>
                <div className="bio">
                    <p>{bio}</p>
                        <hr></hr>
                </div>
                <div className="network">
                    <img id="neticon" src={networkicon}></img>
                    <label id="connections">{cons} Connections</label>
                </div>
            </div>
        </div>
    );
}