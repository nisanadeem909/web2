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
        var div = document.getElementById("image");
        div.innerText = "";
    }

    const upload = () => {
        if (img.current != null)
        {
            var path = img.current.value;
            var div = document.getElementById("image");
            div.innerText = path.slice(path.indexOf("fakepath\\")+9) + " selected";
        }
    }

    return (
        <div className="container">
            <label id="heading">Post Something</label>
            <div className="postcontent">
                <textarea ref={txt}></textarea>
                <div className="buttons">
                    <label id="filelbl" for="upload"><img id="pic" src={picicon}/>Upload Photo</label>
                    <input type="file" accept='image/*' id="upload" ref={img} onChange={upload}></input>
                    <div id="btn">
                    <button id="post" onClick={post}>Post</button>
                    <button id="cancel" onClick={cancel}>Cancel</button>
                    </div>
                </div>
                <div id="image"></div>
            </div>
        </div>
    );
}