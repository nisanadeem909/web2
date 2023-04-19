import React, { createElement } from 'react'
import './AddPost.css';
import picicon from './photo.png'
import { useRef } from "react";
import ReactDOM from "react-dom";

export default function AddPost() {

    const txt = useRef("");
    const img = useRef(null);

    const post = () => {

    }

    const cancel = () => {
        txt.current.value = "";
        img.current.value = null;
        var div = document.getElementById("apost_image");
        div.innerText = "";
    }

    const upload = () => {
        if (img.current != null)
        {
            var path = img.current.value;
            var div = document.getElementById("apost_image");
            div.innerText = path.slice(path.indexOf("fakepath\\")+9) + " selected";
        }
    }

    return (
        <div className="apost_container">
            <label id="post_heading">Post Something</label>
            <div className="apost_postcontent">
                <textarea className="post_textarea" ref={txt}></textarea>
                <div className="apost_buttons">
                    <label id="apost_filelbl" for="apost_upload"><img id="apost_pic" src={picicon}/>Upload Photo</label>
                    <input type="file" accept='image/*' id="apost_upload" ref={img} onChange={upload}></input>
                    <div id="apost_btn">
                    <button className="apost_button" id="apost_post" onClick={post}>Post</button>
                    <button className="apost_button" id="apost_cancel" onClick={cancel}>Cancel</button>
                    </div>
                </div>
                <div id="apost_image"></div>
            </div>
        </div>
    );
}