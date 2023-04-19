import React from 'react'
import empicon from './dummy.jpg'

import './workshere.css';


function WorksHere() {
    return (
        <div className="works-box">
              <div id="works-our-employees">Our Employees</div>   
              <br></br>

              <div id="works-emp-img"><img className='works-emp-icon' src={empicon}></img></div>
              <div id="works-emp-name"><a href="/">Nisa Nadeem</a></div>
              <div id="works-emp-des">&nbsp;&nbsp;&nbsp;Senior Software Eng.</div>

            <br></br>
              <div id="works-emp-img"><img className='works-emp-icon' src={empicon}></img></div>
              <div id="works-emp-name"><a href="/">Komal Waseem</a></div>
              <div id="works-emp-des">&nbsp;&nbsp;&nbsp;Front-end Developer</div>

              <br></br>
              <div id="works-emp-img"><img className='works-emp-icon' src={empicon}></img></div>
              <div id="works-emp-name"><a href="/">Nabeeha Mudassir</a></div>
              <div id="works-emp-des">&nbsp;&nbsp;&nbsp;Intern</div>

              <br></br>
              <div id="works-emp-img"><img className='works-emp-icon' src={empicon}></img></div>
              <div id="works-emp-name"><a href="/">Hassan Rehman</a></div>
              <div id="works-emp-des">&nbsp;&nbsp;&nbsp;HR Manager</div>

              <br></br>
              <div id="works-emp-img"><img className='works-emp-icon' src={empicon}></img></div>
              <div id="works-emp-name"><a href="/">Usman Faisal</a></div>
              <div id="works-emp-des">&nbsp;&nbsp;&nbsp;Senior Software Eng.</div>
        
       </div>
    );
  }
  
  export default WorksHere;
  