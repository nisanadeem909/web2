import { Outlet, Link } from "react-router-dom";
import './Navbar.css';
import logo1 from './logo1.png';

const Layout = (props) => {

  var navlayout = 
    <ul className="navb_ul">
          <li className="navb_li">
            <Link to="/">Home</Link>
          </li>
          <li className="navb_li">
            <Link to="/">About</Link>
          </li>
          <li className="navb_li">
            <Link to="/signup">Signup</Link>
          </li>
          <li className="navb_li">
            <Link to="/login">Login</Link>
          </li>
        </ul>;

  if (props.type)
  {
    if (props.type == "user")
    {
      navlayout = <ul className="navb_ul">
                      <li className="navb_li">
                        <Link to="/user">Home</Link>
                      </li>
                      <li className="navb_li">
                        <Link to="/user/network">Network</Link>
                      </li>
                      <li className="navb_li">


                        <Link to="/user/jobs">Jobs</Link>

                      </li>
                      <li className="navb_li">
                        <Link to="/user/notifications">Notifications</Link>
                      </li>
                      <li className="navb_li">
                        <Link to="/user/ownprofile">Profile</Link>
                      </li>
                  </ul>;
    }
    else if (props.type == "company")
    {
      navlayout = <ul className="navb_ul">
                      <li className="navb_li">
                        <Link to="/company">Home</Link>
                      </li>
                      <li className="navb_li">
                        <Link to="/company/network">Network</Link>
                      </li>
                      <li className="navb_li">
                        <Link to="/company">Vacancies</Link>
                      </li>
                      <li className="navb_li">
                        <Link to="/company/ManageEmployees">Employees</Link>
                      </li>
                      <li className="navb_li">
                        <Link to="/company/notifications">Notifications</Link>
                      </li>
                      <li className="navb_li">
                        <Link to="/company/ownprofile">Profile</Link>
                      </li>
                  </ul>;
    }
  }

  return (
    <>
      <nav>
      <input type="checkbox" id="navb_check"/>
      <label for="navb_check" class="navb_checkbtn">
        <i class="navb_fas navb_fa-bars"></i>
      </label>
      <img class="navb_logo" src={logo1}/>
        {navlayout}
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
  