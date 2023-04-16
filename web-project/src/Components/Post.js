import React from 'react'
import './Post.css';
import person from './person.png';
import post from './post.jpg';
import like from './like.webp';
import comment from './comment4.jpeg';
import share from './share.png';

export default function Post() {
  return (
    <div>
        <div className='post-container'>
           <div className='upper'> 
           <img className='p1' src={person} alt="" />
           <strong>Nisa Nadeem </strong> 
           <p>3 hours ago</p>
           </div>

           <div className='middle'>
           <img className='p2' src={post} alt="" />
           <div className='btns'>
           <button className='icons2' ><img className='icons11' src={like} alt="" /></button>
           <button className='icons2' ><img className='icons12' src={comment} alt="" /></button>
           <button className='icons2' ><img className='icons13' src={share} alt="" /></button>
           <p>14 likes</p>
           <p>14 comments</p>
           <p>14 shares</p>
           </div>
           
           <hr className='h'></hr>

           <div className='last'>
           <img className='p3' src={person} alt="" />
           <div className='comment-l'>
            <h6>Komal Waseem</h6>
           <div className='comment-part'>
            <p className='lp'>Hello, this is Nisa</p>
            </div>
           </div>
           </div>
           </div>

           
        </div>
      
    </div>
  )
}
