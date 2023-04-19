import React from 'react';
import './Search.css';
import searchicon from './search_icon.png';

export default function Search() {
  return (
    <div className="search_container_k">
        <div className='search_inner_k'>
            <label id="search_title_k">Search:</label>
            <input type="text" className='search_field_k'></input>
            <button className='search_btn_k'><img src={searchicon} alt="Go" className='search_icon_k'></img></button>
        </div>
    </div>
  );
}
