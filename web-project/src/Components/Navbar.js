import React from 'react'
import './Navbar.css';


function Navbar() {
    return (
        <div>
 <nav class="navbar">
  <div id="trapezoid">
    <a class="sub-home" href="#">Home</a>
    <a href="#About" class="expandHome">About</a>
     <div class="subnav">
     <button class="subnavbtn">Clients<i class="fa fa-caret-down"></i></button>
       
    </div>
  
     <div class="subnav">
     <button class="subnavbtn">Services<i class="fa fa-caret-down"></i></button>
       
      </div>
    <a href="" class="expandHome">Contact</a>
  </div>
</nav>
 </div>
    );
  }
  
  export default Navbar;
  