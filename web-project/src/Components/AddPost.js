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
    
   

    function generateRandomId() {
        const min = 1000; // Minimum ID value
        const max = 9999; // Maximum ID value
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      

    const cancel = () => {
        txt.current.value = "";
       /* img2.current.value = null;
        var div = document.getElementById("apost_image");
        div.innerText = "";*/
    }


    const HandleUpload=(t)=>{
        //console.log(t.handle.files);
        alert("image set");
        setImg(t.target.files[0]);
      }

    const upload = () => {
        const text1 = txt.current.value;
        const sessionID = sessionStorage.getItem('sessionID');
        const pID = generateRandomId();
        const uname = sessionStorage.getItem("sessionID");
        const utype = sessionStorage.getItem("userType");
  

        if (img && text1)
        {
            alert(img);
          var fdata = new FormData();
          fdata.append("Image", img);
          fdata.append("Username", uname);
          fdata.append("UserType", text1);

          axios.post('http://localhost:8000/uploadpostpic',fdata)
          .then(res => {
           
            txt.current.value = "";

        })
          .catch(err=>{alert("ERROR IN UPLOADAXIOS : "+err)});

               

        }
        else if(img)
        {
            var fdata = new FormData();
            fdata.append("Image", img);
            fdata.append("Username", uname);
            fdata.append("UserType", "");
  
            axios.post('http://localhost:8000/uploadpostpic',fdata)
            .then(res => {alert("Respnse" + JSON.stringify(res.data))
               
          
        
            txt.current.value = "";
        
              })
            .catch(err=>{alert("ERROR IN UPLOADAXIOS : "+err)});

         
  
        }
        else if(text1)
        {
            
        axios
        .post(`http://localhost:8000/posts`, {
          username: sessionID,
          text : text1,
          postID : pID,
          date : "2023-08-01",
          imagePath : "",
          
      })
        .then((res) => {
            txt.current.value = "";
           
        })
        .catch((error) => console.log(error));

      

        }


        window.location.reload();
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
                    <input type="file" accept='image/*' onChange={HandleUpload} id="apost_upload" ref={img} ></input>
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