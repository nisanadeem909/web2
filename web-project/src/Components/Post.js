import React, { useState, useEffect } from 'react';
import './Post.css';
import person from './person.png';
import post from './post.jpg';
import like from './like.webp';
import comment from './comment4.jpeg';
import share from './share.png';
import axios from 'axios';

export default function Post(props) {
  const [likes, setLikes] = useState(0); // Initial number of likes
  const [comments, setComments] = useState(0); // Initial number of comments
  const [shares, setShares] = useState(0); // Initial number of shares
  const [liked, setLiked] = useState(false); // User's like status

  useEffect(() => {
    axios
      .get(`http://localhost:8000/likes/${props.postcurr.postID}`)
      .then((res) => {
        setLikes(res.data);
      })
      .catch((error) => console.log(error));

    axios
      .get(`http://localhost:8000/comments/${props.postcurr.postID}`)
      .then((res) => {
        setComments(res.data);
      })
      .catch((error) => console.log(error));

    axios
      .get(`http://localhost:8000/sharess/${props.postcurr.postID}`)
      .then((res) => {
        setShares(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleLike = () => {
    const username = sessionStorage.getItem('sessionID');
    if (!liked) {
      axios
        .post(`http://localhost:8000/addlikes/${props.postcurr.postID}/${username}`)
        .then((res) => {
          setLikes(likes + 1);
          setLiked(true);
        })
        .catch((error) => console.log(error));
    }
  };

  const handleComment = () => {
    setComments(comments + 1);
  };

  const handleShare = () => {
    setShares(shares + 1);
  };

  return (
    <div>
      <div className='post-container'>
        <div className='post_upper'>
          <img className='post_p1' src={person} alt='' />

          <div className='post_u-1'>
            <strong className='post_strong'>{props.postcurr.username} </strong>
            <p className='nisa-post-p9'>{props.postcurr.text}</p>
          </div>
        </div>

        <div className='post_middle'>
          <img className='post_p2' src={post} alt='' />
          <div className='post_btnpara'>
            <div className='post_btns'>
              <button className='post_icons2' onClick={handleLike}>
                <img className='post_icons11' src={like} alt='like' />
              </button>
              <button className='post_icons2' onClick={handleComment}>
                <img className='post_icons12' src={comment} alt='cmnt' />
              </button>
              <button className='post_icons2' onClick={handleShare}>
                <img className='post_icons13' src={share} alt='shr' />
              </button>
            </div>
            <div className='post_para'>
              <p className='post_pp1'>{likes} likes</p>
              &nbsp; &nbsp;
              <p className='post_pp1'>{comments} comments</p>
              &nbsp;&nbsp;
              <p className='post_pp1'>{shares} shares</p>
            </div>
          </div>

          <hr className='post_hr'></hr>
        </div>

        <div className='post_last'>
          <img className='post_p3' src={person} alt='' />
          <div className='post_comment-l'>
            <h6 className='post_h6'>Komal Waseem</h6>
            <div className='post_comment-part'>
              <p className='post_lp'>Hello, this is Nisa</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
