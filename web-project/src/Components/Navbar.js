/*import React from 'react'
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
  
  export default Navbar;*/

import { Outlet, Link } from "react-router-dom";
import './Navbar.css';
import logo1 from './logo1.png';

const Layout = () => {
  return (
    <>
      <nav>
      <input type="checkbox" id="check"/>
      <label for="check" class="checkbtn">
        <i class="fas fa-bars"></i>
      </label>
      <img class="logo" src={logo1}/>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Signup</Link>
          </li>
          <li>
            <Link to="/">Login</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
  