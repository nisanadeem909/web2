import React from 'react'
import './AddPost.css';
import picicon from './photo.png'

export default function AddPost() {

    const post=()=> {

    }

    const cancel=()=> {
        
    }

    return (
        <div className="container">
            <label id="heading">Post Something</label>
            <div className="postcontent">
                <textarea></textarea>
                <div className="buttons">
                    <label id="filelbl" for="upload"><img id="pic" src={picicon}/>Upload Photo</label>
                    <input type="file" accept='image/*' id="upload"></input>
                    <div id="btn">
                    <button id="post" onClick={post()}>Post</button>
                    <button id="cancel" onClick={cancel()}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
}