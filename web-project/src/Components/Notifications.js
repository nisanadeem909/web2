import React, { useState, useEffect } from 'react';
import './Notifications.css';
import notify from './notify.png';

import post from './post.jpg';
import axios from 'axios';

const person = 'person.jpg';
export default function Notifications() {
  const [allNotifications, setAllNotifications] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const sessionID = sessionStorage.getItem('sessionID');
    axios
      .get(`http://localhost:8000/allnotifs/${sessionID}`)
      .then(res => {
        setAllNotifications(res.data);
        setIsLoading(false);
      })
      .catch(error => console.log(error));
  }, []);

  const calculateTimeDuration = timestamp => {
    const currentTime = new Date().getTime();
    const notificationTime = new Date(timestamp).getTime();
    const timeDifference = currentTime - notificationTime;
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
      return `${days} day${days > 1 ? 's' : ''} ago`;
    } else if (hours > 0) {
      return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else if (minutes > 0) {
      return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else {
      return `${seconds} second${seconds !== 1 ? 's' : ''} ago`;
    }
  };

  return (
    <div className='nisa-notif-container'>
      <div className='nisa-notif-container1'>
        <img className='nisa-notify-img1' src={notify} alt='' />
        <label className='nisa-label'>Notifications</label>
      </div>

      <hr className='notif' />

      {isLoading ? (
        <p className='nisa-ll'>Loading...</p>
      ) : allNotifications.length === 0 ? (
        <p className='nisa-ll'>No notifications found.</p>
      ) : (
        <ul className='nisa-notif-new'>
          {allNotifications.map(not => (
            <li key={not._id}>
              <div className='nisa-notif-list'>
                <div className='nisa-notify-container2'>
                  <img className='nisa-notify-img2' src={`http://localhost:8000/profilepictures/${not.img|| person}`} alt='' />
                  <div className='nisa-notify-container3'>
                    <div className='nisa-notify-container4'>
                      <label className='nisa-notify-lb'>@{not.notifusername}</label>
                      <p className='nisa-notify-p1'>{not.text}</p>
                    </div>
                    {not.notificationType === 2 && (
                      <p className='nisa-notify-p2'>{not.comment}</p>
                    )}
                    <p className='nisa-notify-p3'>{calculateTimeDuration(not.date)}</p>
                  </div>
                </div>
                <div className='nisa-notify-post'>
                  <img className='nisa-notify-img3' src={post} alt='' />
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
