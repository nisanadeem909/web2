import React, { createElement } from 'react'
import './AddPost.css';
import picicon from './photo.png'
import { useRef } from "react";
import { useState } from 'react';
import { useEffect } from 'react';
import ReactDOM from "react-dom";
import Feed from './Feed';
import axios from "axios";
export default function AddPost() {

    const txt = useRef("");
    const img2 = useRef(null);
    const [img,setImg] = useState(); //this is to upload the image img 
    const [images, setImages] = useState([]); //this is to store the image in an array
    
   

    
    

    const cancel = () => {
        txt.current.value = "";
        img2.current.value = null;
        var div = document.getElementById("apost_image");
        div.innerText = "";
    }

    const upload = () => {
        var fdata = new FormData();
        fdata.append("Image", img);    
        alert("hel");
        axios.post('http://localhost:8000/upload',fdata).then(res => {alert("Respnse" + JSON.stringify(res.data))});
       

        //<Feed data={images}/>

    }

    return (
        <div className="apost_container">
            <label id="post_heading">Post Something</label>
            <ul>
                {images.map(image => (
                <li key={image.id}>
                    <img src={image} alt="an image here"/>
                    {/*<p>{image.name}</p>*/}
                </li>
                ))}
                </ul> 
            <div className="apost_postcontent">
                <textarea className="post_textarea" ref={txt}></textarea>
                <div className="apost_buttons">
                    
                    <label id="apost_filelbl" for="apost_upload"><img id="apost_pic" src={picicon}/>Upload Photo</label>
                    <input type="file" accept='image/*' id="apost_upload" ref={img} ></input>
                    <div id="apost_btn">
                    <button className="apost_button" id="apost_post" onClick = {()=>upload()}>Post</button>
                    <button className="apost_button" id="apost_cancel" onClick={cancel}>Cancel</button>
                    
                    </div>
                  
                </div>

              

                <div id="apost_image"></div>
            </div>
        </div>
    );
}