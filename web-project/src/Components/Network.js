import React from 'react';
import Search from './Search';
import './Network.css';
import connecticon from './pfneto.png';
import person from './person.png';
import bgnetwork from './networkpic.png';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Network() {
  const [allFollower, setAllFollower] = useState([]);
  const [allFollowing, setAllFollowing] = useState([]);

  useEffect(() => {
    const sessionID = sessionStorage.getItem('sessionID');

    axios
      .get(`http://localhost:8000/allNetwork/${sessionID}`)
      .then(res => {
        setAllFollower(res.data);
      })
      .catch(error => console.log(error));

    axios
      .get(`http://localhost:8000/allFollowing/${sessionID}`)
      .then(res => {
        setAllFollowing(res.data);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div className='nisa-network-container'>
      <div className='nisa-search-bar'>
        <Search></Search>
      </div>

      <div className='nisa-network-parent'>
        <div className='nisa-network-lp'>
          <label className='nisa-network-label'>Followers</label>
          <hr className='nisa-network-hr' />
          {allFollower.length === 0 ? (
            <p className='nisa-net-pp2'>No followers found</p>
          ) : (
            <ul>
              {allFollower.map(follow => (
                <li key={follow._id}>
                  <div className='nisa-list-container'>
                    <div className='nisa-list-big'>
                      <div>
                        <img className='nisa-network-img1' src={person} alt='' />
                      </div>
                      <div className='nisa-list-small'>
                        <label className='nisa-network-ppl'>{follow.follower}</label>
                      </div>
                    </div>
                    <div className='btnnnn'>
                      <button className='nisa-network-btn'>
                       Open Profile
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className='nisa-network-lp'>
          <label className='nisa-network-label'>Following</label>
          <hr className='nisa-network-hr' />
          {allFollowing.length === 0 ? (
            <p className='nisa-net-pp'>No following users found</p>
          ) : (
            <ul>
              {allFollowing.map(followi => (
                <li key={followi._id}>
                  <div className='nisa-list-container'>
                    <div className='nisa-list-big'>
                      <div>
                        <img className='nisa-network-img1' src={person} alt='' />
                      </div>
                      <div className='nisa-list-small'>
                        <label className='nisa-network-ppl'>{followi.following}</label>
                      </div>
                    </div>
                    <div>
                      <button className='nisa-network-btn'>
                       Open Profile
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
