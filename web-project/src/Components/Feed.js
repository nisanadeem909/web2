import React from 'react';
import './Feed.css';
import Post from './Post';

export default function Feed() {
  return (
    <div className="feed_container_k">
        <ul className='feed_ul_k'>
            <li className='feed_li_k'>
                <Post/>
            </li>
        </ul>
    </div>
  );
}
