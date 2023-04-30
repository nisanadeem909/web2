import React from 'react'
import './Notifications.css'
import notify from './notify.png'
import person from './person.png'
import post from './post.jpg';

export default function Notifications() {
  return (
    <div className='nisa-notif-container'>

    <div className='nisa-notif-container1'>
    <img className='nisa-notify-img1' src={notify} alt="" />
    <label className='nisa-label'>Notifications</label>
   </div>

    <hr className='notif'/>
       
     <div className='nisa-notif-list'>
        <div className='nisa-notify-container2'>
            <img className='nisa-notify-img2' src={person} alt="" />
                <div className='nisa-notify-container3'>
                    <div className='nisa-notify-container4'>
                    <label className='nisa-notify-lb'>Nisa Nadeem</label>
                    <p className='nisa-notify-p1'>commented on your post</p>
                    
                    </div>
                    <p className='nisa-notify-p2'>Hello, Nabeeha you look so so so so so so so so so pretty </p>
                    <p className='nisa-notify-p3'>3hrs ago. </p>
                </div>
          </div>

          <div className='nisa-notify-post'>
          
            <img className='nisa-notify-img3' src={post} alt="" />
       
          </div>
        </div>



        <div className='nisa-notif-list'>
        <div className='nisa-notify-container2'>
            <img className='nisa-notify-img2' src={person} alt="" />
                <div className='nisa-notify-container3'>
                    <div className='nisa-notify-container4'>
                    <label className='nisa-notify-lb'>Nisa Nadeem</label>
                    <p className='nisa-notify-p1'>commented on your post</p>
                    
                    </div>
                    <p className='nisa-notify-p2'>Hello, Nabeeha you look so so so so so so so so so pretty </p>
                    <p className='nisa-notify-p3'>3hrs ago. </p>
                </div>
          </div>

          <div className='nisa-notify-post'>
          
            <img className='nisa-notify-img3' src={post} alt="" />
       
          </div>
        </div>

        <div className='nisa-notif-list'>
        <div className='nisa-notify-container2'>
            <img className='nisa-notify-img2' src={person} alt="" />
                <div className='nisa-notify-container3'>
                    <div className='nisa-notify-container4'>
                    <label className='nisa-notify-lb'>Nisa Nadeem</label>
                    <p className='nisa-notify-p1'>commented on your post</p>
                    
                    </div>
                    <p className='nisa-notify-p2'>Hello, Nabeeha you look so so so so so so so so so pretty </p>
                    <p className='nisa-notify-p3'>3hrs ago. </p>
                </div>
          </div>

          <div className='nisa-notify-post'>
          
            <img className='nisa-notify-img3' src={post} alt="" />
       
          </div>
        </div>


      
    </div>
  )
}
