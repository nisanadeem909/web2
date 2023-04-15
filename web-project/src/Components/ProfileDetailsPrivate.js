import React from 'react'
import './ProfileDetails.css';
import picture from './dummy.jpg'
import editicon from './edit.png'
import networkicon from './network.png'

export default function ProfileDetails() {

    const edit=()=> {

    }



    var cons = 0;
    var username = "@komalwaseem";
    var name = "Komal Waseem";
    var bio = "This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. ";

    var profilepic = picture; // dummy picture to use if no profile picture applied
    
    return (
        <div className="container">
            <div id="imgedit">
                <img src={profilepic} className="profilePic"/>
                <button className="editpfp"><img src={editicon} id="conimg"></img></button>
            </div>
            <div className="details">
                <div id="namebtn">
                    <label id = "name">{name}</label>
                    <button id="btne" onClick={edit()}><div><img src={editicon} id="conimg"></img><label>Edit</label></div></button>
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