import React from 'react';
import './Feed.css';
import Post from './Post';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

export default function Feed(props) {

  const [allposts, setAllPosts] = useState([]);
  useEffect(() => {
      
    const sessionID = sessionStorage.getItem('sessionID');
   
     axios.get(`http://localhost:8000/allposts/${sessionID}`)
        .then(res => { 
               
          setAllPosts(res.data);            
         res.end();           
        })
        .catch(error => console.log(error));


    }, []);

  return (
    <div className="feed_container_k">

        <ul className='feed_ul_k'>
        {allposts.map(post => (
         <li className='feed_li_k' key={post._id}>   
                   
                <Post postcurr={post}/>
            </li>
                  ))}
        </ul>
    </div>
  );
}
