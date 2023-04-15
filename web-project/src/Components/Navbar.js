import React from 'react'
import './Navbar.css';
import logo1 from './logo1.png';

function Navbar() {
    return (
        <div>
        <nav>
      <input type="checkbox" id="check"/>
      <label for="check" class="checkbtn">
        <i class="fas fa-bars"></i>
      </label>
      <img class="logo" src={logo1}/>
      <ul>
        <li><a class="active" href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Feedback</a></li>
      </ul>
    </nav>
    </div>
    );
  }
  
  export default Navbar;
  