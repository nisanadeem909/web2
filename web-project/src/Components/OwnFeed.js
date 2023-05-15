import React from 'react';
import './Feed.css';
import OwnPost from './OwnPost';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Feed(props) {
  const [allposts, setAllPosts] = useState([]);
  const [error, setError] = useState(false);
 var sessionID = ''; 
  useEffect(() => {
    if(!props.user)
     sessionID = sessionStorage.getItem('sessionID');
     else{
      if(props.type == "user")
      sessionID = props.user.username;
      else if(props.type == "company")
      sessionID = props.user.username;
     }

    axios
      .get(`http://localhost:8000/allpostsmy/${sessionID}`)
      .then(res => {
        setAllPosts(res.data);
      })
      .catch(error => {
        console.log(error);
        setError(true);
      });
  }, []);

  return (
    <div className='feed_container_k'>
      {error ? (
        <p>Error occurred while loading posts.</p>
      ) : (
        <ul className='feed_ul_k'>
          {allposts.length === 0 ? (
            <p className='nisa-f-pp'>No posts found!</p>
          ) : (
            allposts.map(post => (
              <li className='feed_li_k' key={post._id}>
                <OwnPost postcurr={post} />
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
}
