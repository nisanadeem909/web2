import React from 'react';
import { useNavigate } from "react-router-dom";
import './Search.css';
import searchicon from './search_icon.png';

export default function Search() {
  
  
  let navigate = useNavigate(); 
  const searchPageRouteChange =() =>{
    let path = '/user/searchresults'; {/*This should not be hardcoded */}
    navigate(path);
  
  }
  
  return (
    <div className="search_container_k">
        <div className='search_inner_k'>
            <label id="search_title_k">Search:</label>
            <input type="text" className='search_field_k'></input>
            <button className='search_btn_k' onClick={searchPageRouteChange}><img src={searchicon} alt="Go" className='search_icon_k'></img></button>
        </div>
    </div>
  );
}
