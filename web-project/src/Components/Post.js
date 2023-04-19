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
           <div className='post_upper'> 
           <img className='post_p1' src={person} alt="" />
           
           <div className='post_u-1'>
           <strong  className='post_strong'>Nisa Nadeem </strong> 
            <p className='post_pp'>3 hours ago</p>
           </div>
          
           </div>

           <div className='post_middle'>
           <img className='post_p2' src={post} alt="" />
           <div className='post_btnpara'>
           <div className='post_btns'>
           <button className='post_icons2' ><img className='post_icons11' src={like} alt="like" /></button>
           <button className='post_icons2' ><img className='post_icons12' src={comment} alt="cmnt" /></button>
           <button className='post_icons2' ><img className='post_icons13' src={share} alt="shr" /></button>
           </div>
           <div className='post_para'>
           <p className='post_pp1'> 14 likes </p>
           &nbsp; &nbsp;
           <p className='post_pp1' >14 comments </p>
           &nbsp;&nbsp;
           <p className='post_pp1'>14 shares </p>

           
           </div>
           </div>
           
           <hr className='post_hr'></hr>
           </div>
           


           <div className='post_last'>
           <img className='post_p3' src={person} alt="" />
           <div className='post_comment-l'>
            <h6 className='post_h6'>Komal Waseem</h6>
           <div className='post_comment-part'>
            <p className='post_lp'>Hello, this is Nisa</p>
            </div>
           </div>
           </div>
           
           
        </div>
      
    </div>
  )
}
