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
          
            <div id="nab-discover-opp">Discover Opportunities</div>
          <div id="nab-text">Easily browse and filter through options that match your skills, experience, and preferences</div>
         
        </div>
        <div className="box4">
         
          <div id="nab-discover-opp">Personalised Recommendations</div>
          <div id="nab-text">Applying for jobs has never been easier through our CV Maker.</div>
           
          
          
        </div>
        <div className="box5">
         
          
          <div id="nab-discover-opp">Smart Job Matches</div>
          <div id="nab-text">With our streamlined hiring process, companies can find and compare applicants</div>
           
        </div>
      </div>

      <div className="ft">
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
