import { Outlet, Link } from "react-router-dom";
import './Navbar.css';
import logo1 from './logo1.png';

const Layout = () => {
  return (
    <>
      <nav>
      <input type="checkbox" id="navb_check"/>
      <label for="navb_check" class="navb_checkbtn">
        <i class="navb_fas navb_fa-bars"></i>
      </label>
      <img class="navb_logo" src={logo1}/>
        <ul className="navb_ul">
          <li className="navb_li">
            <Link to="/">Home</Link>
          </li>
          <li className="navb_li">
            <Link to="/">About</Link>
          </li>
          <li className="navb_li">
            <Link to="/">Signup</Link>
          </li>
          <li className="navb_li">
            <Link to="/">Login</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
  