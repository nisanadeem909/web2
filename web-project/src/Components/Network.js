import React from 'react'
import Search from './Search';
import './Network.css';
import connecticon from './follow.png'
import person from './person.png';
import bgnetwork from './networkpic.png';

export default function Network() {
    var array2 = new Array();

  return (
    <div className='nisa-network-container'>
       
        <div className='nisa-search-bar'>
        <Search></Search>
        </div>

     <div className='nisa-network-parent'>

      <div className='nisa-network-lp'>
       <label className='nisa-network-label'>People</label>
       <hr className='nisa-network-hr' />
        <ul>


        <li>
        
        <div className='nisa-list-container'>
        
            <div className='nisa-list-big'>
                
                <div>
                <img className='nisa-network-img1' src={person} alt="" />
                </div>

                <div className='nisa-list-small'>
                <label className='nisa-network-ppl'>Nisa Nadeem</label>
                <p className='nisa-network-p'>Undergraduate Software Engineer</p>
                </div>
            </div>
            
            <div>
            <button className='nisa-network-btn'><img className='nisa-network-img2' src={connecticon} alt="" /></button>
            </div>
        </div>

        </li>

    

      </ul>
      </div>


     <div className='nisa-network-lp'>
      <label className='nisa-network-label'>Companies</label>
      <hr  className='nisa-network-hr'/>
        <ul>


        <li>
        
        <div className='nisa-list-container'>
        
        <div className='nisa-list-big'>
            
            <div>
            <img className='nisa-network-img1' src={person} alt="" />
            </div>

            <div className='nisa-list-small'>
            <label className='nisa-network-ppl'>Devsinc PVT</label>
            <p className='nisa-network-p'>Software Company</p>
            </div>
        </div>
        
        <div>
        <button className='nisa-network-btn'><img className='nisa-network-img2' src={connecticon} alt="" /></button>
        </div>
       </div>

        </li>

        
      </ul>
      </div>

      </div>

      
    </div>
  )
}
