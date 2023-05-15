import React from 'react';
import './HomePage.css';
import home from './finalhome.png';
import Slideshow from './Slideshow';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate=useNavigate();
  return (
    <div>
      <div className="container-home">
        <div className="box1">
          <h2>Connecting Applicants And Companies At One Place</h2>
          <div>
            <button className="b1" onClick={()=>navigate("/signup")}>Get a Job</button>
            <button className="b2" onClick={()=>navigate("/signup")}>Own Company</button>
          </div>
          <div className="l">
            <p id="loginp">Already have an account? <a  onClick={()=>navigate("/login")}>Login</a></p>
          </div>
        </div>

        <div className="box2">
          <img className="img1" src={home} alt="" />
        </div>
      </div>

      <div className="sld">
        <Slideshow />
      </div>

      <div className="service">
        <div className="box3">
          <p className="service-text">CV Builder just one click away jdhshu fdghdgdkh ifdkufdhdk kufhkudhf</p>
          <button className="bs1">Go</button>
        </div>
        <div className="box4">
          <p className="service-text">CV Builder just one click away jdhshu fdghdgdkh ifdkufdhdk kufhkudhf</p>
          <button className="bs1">Go</button>
        </div>
        <div className="box5">
          <p className="service-text">CV Builder just one click away jdhshu fdghdgdkh ifdkufdhdk kufhkudhf</p>
          <button className="bs1">Go</button>
        </div>
      </div>

      <div className="ft">
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
