import React from 'react';
import './Feed.css';
import Post from './Post';
import { useState, useEffect } from 'react';
import axios from 'axios';



export default function Feed(props) {
  const [allposts, setAllPosts] = useState([]);
  const [error, setError] = useState(false);
 var sortedPosts;
 
  useEffect(() => {
    const sessionID = sessionStorage.getItem('sessionID');

    axios
      .get(`http://localhost:8000/allposts/${sessionID}`)
      .then(res => {
        setAllPosts(res.data);
        
        allposts.sort((a, b) => new Date(b.date) - new Date(a.date));
       
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
                <Post postcurr={post} />
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
}
