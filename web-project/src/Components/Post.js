import React, { useState, useEffect } from 'react';
import './Post.css';

import post from './post.jpg';
import like from './like.webp';
import comment from './comment4.jpeg';
import share from './share.png';
import axios from 'axios';
import Modal from 'react-modal';

Modal.setAppElement('#root');
var person = 'person.png';



export default function Post(props) {
  const [likes, setLikes] = useState(0); // Initial number of likes
  const [comments, setComments] = useState(0); // Initial number of comments
  const [commentText, setCommentText] = useState('');
  // Add a state for controlling the modal visibility
const [modalIsOpen, setModalIsOpen] = useState(false);

  const [shares, setShares] = useState(0); // Initial number of shares
  const [liked, setLiked] = useState(false); // User's like status
  const [allcomments, setAllComments] = useState([]);
  const [Img, setImg] = useState([]);
  const [ImgCom, setImgCom] = useState([]);
  const [User, setUser] = useState([]);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  
  const username = sessionStorage.getItem('sessionID');

  

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
      axios.get(`http://localhost:8000/showcomment/${props.postcurr.postID}`)
        .then(res => {        
          setAllComments(res.data);     
              
         res.end();           
        })
        .catch(error => console.log(error));

        axios
        .get(`http://localhost:8000/profilepicture/${props.postcurr.username}`)
        .then((res) => {
         
          setImg(res.data);
          setIsImageLoaded(true); 
         
          
        })
        .catch((error) => console.log(error));

        
        axios
        .get(`http://localhost:8000/finduser/${username}`)
        .then((res) => {
          
          setUser(res.data);
          
         
          
        })
        .catch((error) => console.log(error));
  



  }, []);

  const fetchComments = () => {
    axios
      .get(`http://localhost:8000/showcomment/${props.postcurr.postID}`)
      .then((res) => {
        setAllComments(res.data);
      })
      .catch((error) => console.log(error));
  };
  

  const handleLike = async () => {
   
    
    if (!liked) {
      try {
        await axios.post(`http://localhost:8000/addlikes`, {
          postId: props.postcurr.postID,
          username: username
        });
        setLikes(likes + 1);
        setLiked(true);
  
    
        await axios.post(`http://localhost:8000/addnotif`, {
          postId: props.postcurr.postID,
          username: props.postcurr.username,
          notifusername: username,
          image: User.user?.profilePicture || User.company?.profilePicture || person
        });

    
       
      } catch (error) {
        console.log(error);
      }
    }
  };
  
  const handleComment = () => {
    
    
    setModalIsOpen(true);
    if (commentText.trim() === '') {
      return;
    }
  
    axios
      .post(`http://localhost:8000/addcomment`, {
        postId: props.postcurr.postID,
        username: username,
        text: commentText,
        img : User.user?.profilePicture || User.company?.profilePicture || person
      })
      .then((res) => {
        setComments(comments + 1);
        setCommentText(''); 
        setModalIsOpen(false);
        fetchComments(); 
      })
      .catch((error) => console.log(error));

      axios
      .post(`http://localhost:8000/addnotifcom`, {
        postId: props.postcurr.postID,
        username: props.postcurr.username,
        notifusername: username, // person who performed the like stored in session ;)
        commentText: commentText,
        img : User.user?.profilePicture || User.company?.profilePicture || person
      })
      .then((res) => {
        
      })
      .catch((error) => console.log(error));

      

  };
  

  const handleShare = () => {
    setShares(shares + 1);
  };

  return (
    <div>

    <Modal
      isOpen={modalIsOpen}
      onRequestClose={() => setModalIsOpen(false)}
      contentLabel="Add Comment Modal"
      className="modal"
      overlayClassName="overlay"
    >
      <textarea className="comment-textarea"
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        placeholder='Enter your comment...'
      ></textarea>
      <button className="add-comment-button" onClick={handleComment}>Add Comment</button>
      <button className="cancel-button" onClick={() => setModalIsOpen(false)}>Cancel</button>
    </Modal>
      
      <div className='post-container'>
        <div className='post_upper'>
          <img className='post_p1' src={`http://localhost:8000/profilepictures/${Img.user?.profilePicture || Img.company?.profilePicture || person}`} alt='' />

          <div className='post_u-1'>
            <strong className='post_strong'>{props.postcurr.username} </strong>
            <p className='nisa-post-p9'>{props.postcurr.text}</p>
          </div>
        </div>

        <div className='post_middle'>
        {isImageLoaded && (
          <img className='post_p2' src={`http://localhost:8000/profilepictures/${props.postcurr?.profilePicture || Img.company?.profilePicture || person}`} alt='' />)}
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
  <div className='post_comment-list'>
    <ul>
      {allcomments.map((cm) => (
        <li key={cm._id}>
          <img className='post_p3' src={`http://localhost:8000/profilepictures/${cm.img || person}`} alt='' />
          <div className='post_comment-l'>
            <h6 className='post_h6'>{cm.username}</h6>
            <div className='post_comment-part'>
              <p className='post_lp'>{cm.text}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  </div>
</div>


      </div>
    </div>
  );
}
