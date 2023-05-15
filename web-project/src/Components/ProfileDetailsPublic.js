import React, { useState } from 'react'
import './ProfileDetails.css';
import picture from './dummy.jpg'
import connecticon from './follow.png'
import networkicon from './network.png'
import workicon from './workk.png'
export default function ProfileDetails(props) {

    var btn = 
    <button id="profdetails_btn" className='profdetails_button'><div><img src={connecticon} id="profdetails_conimg"></img><label>Connect</label></div></button>; // changes if already connected

    var user;

    var cons = {'followers':0,'following':0};
    var username = "loading";
    var name = "Loading";
    var bio;
    var worksAt = <></>;
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
                        <label>Works At {user.worksAt}</label>
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
            <img src={profilepic} className="profdetails_profilePic"/>
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