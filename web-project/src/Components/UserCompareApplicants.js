import React from 'react' 
import './KCompareApps.css';

export default function CompareApps() {

    return (
      <div className='kcompareapp-container'>
        <div className='kcompareapp-header'>
            <label>See how you compare to other applicants</label>
        </div>
        <div className='kcompareapp-topapps kcompareapp-section'>
            <label className='kcompareapp-section-label'>Top Applicants</label>
            <hr className='kcompareapp-section-hr'></hr>
            <div className='ktopapps-content'>
                <div className='ktopapps-percent-con'>
                    <label className='ktopapps-percent'>25%</label>
                    <p className='ktopapps-percent-text'>You are in top 25% of the total 12 applicants based your application and profile.</p>
                </div>
                <div className='ktopapps-flexcon'>
                    <div>
                        <label className='ktopapps-number'>12 &nbsp;</label>
                        <label className='ktopapps-label'>Applicants</label>
                    </div>
                    <div>
                        <label className='ktopapps-number'>3 &nbsp;</label>
                        <label className='ktopapps-label'>Applicants today</label>
                    </div>
                </div>
            </div>
        </div>
          <div className='kcompareapp-topappskills kcompareapp-section'>
            <label className='kcompareapp-section-label'>Top Skills</label>
            <hr className='kcompareapp-section-hr'></hr>
            <div className='ktopskills-content'>
                <p className='ktopskills-heading'>You have 3 out of the 6 top skills among other applicants.</p>
                <ul className='ktopskills-skill-con'>
                    <li className='ktopskills-skill ktopskills-skill-have'>JavaScript</li>
                    <li className='ktopskills-skill ktopskills-skill-have'>HTML</li>
                    <li className='ktopskills-skill ktopskills-skill-have'>CSS</li>
                    <li className='ktopskills-skill ktopskills-skill-nothave'>MERN Stack</li>
                    <li className='ktopskills-skill ktopskills-skill-nothave'>MySQL</li>
                    <li className='ktopskills-skill ktopskills-skill-nothave'>ASP.net</li>
                </ul>
            </div>
          </div>
          <div className='kcompareapp-appexplevel kcompareapp-section'>
            <label className='kcompareapp-section-label'>Experience Level</label>
            <hr className='kcompareapp-section-hr'></hr>
            <div className='kexplevel-content'>
                <div className='kexplevel-exp'>
                    <label className='kexplevel-exp-lbl'>75% Entry Level Applicants</label>
                    <progress className="kexplevel-progress" value="75" max="100"></progress>
                </div>
                <div className='kexplevel-exp'>
                    <label className='kexplevel-exp-lbl'>25% Senior Level Applicants</label>
                    <progress className="kexplevel-progress" value="25" max="100"></progress>
                </div>
                <div className='kexplevel-exp'>
                    <label className='kexplevel-exp-lbl'>0% Manager Level Applicants</label>
                    <progress className="kexplevel-progress" value="0" max="100"></progress>
                </div>
                <div className='kexplevel-exp'>
                    <label className='kexplevel-exp-lbl'>0% Director Level Applicants</label>
                    <progress className="kexplevel-progress" value="0" max="100"></progress>
                </div>
            </div>
          </div>
          <div className='kcompareapp-appedulevel kcompareapp-section'>
            <label className='kcompareapp-section-label'>Education Level</label>
            <hr className='kcompareapp-section-hr'></hr>
            <div className='kedulevel-content'>
                <div className='kedulevel-field'>
                    <label className='kedulevel-percent'>50% &nbsp;</label>
                    <label className='kedulevel-lbl'>have a Bachelors Degree</label>
                </div>
                <div className='kedulevel-field'>
                    <label className='kedulevel-percent'>25% &nbsp;</label>
                    <label className='kedulevel-lbl'>have a Masters Degree</label>
                </div>
                <div className='kedulevel-field'>
                    <label className='kedulevel-percent'>60% &nbsp;</label>
                    <label className='kedulevel-lbl'>have majored in Software Engineering</label>
                </div>
                <div className='kedulevel-field'>
                    <label className='kedulevel-percent'>35% &nbsp;</label>
                    <label className='kedulevel-lbl'>have majored in Software Engineering</label>
                </div>
            </div>
          </div>
      </div>
    )
  }