import React, { useEffect, useState } from 'react' 
import './KCompareApps.css';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

export default function CompareApps() {

    
    const location = useLocation();
    const stateData = location.state;
    const [con,setCon] = useState(<label>Loading</label>);

    useEffect(()=>{
        //get all data from db based on username, applicationID, and other applications based on jobid
        var username = sessionStorage.getItem("sessionID");
        var param = {"username":username,"jobID":stateData.jobID,"appID":stateData.appID};
        axios.post('http://localhost:8000/getotherappscomparisondata',param).then(res => {
                //alert("Response" + JSON.stringify(res.data))
                if (res.data.status == "success")
                {
                    var data = res.data.data;
                    setCon(<><div className='kcompareapp-topapps kcompareapp-section'>
                    <label className='kcompareapp-section-label'>Top Applicants</label>
                    <hr className='kcompareapp-section-hr'></hr>
                    <div className='ktopapps-content'>
                        <div className='ktopapps-percent-con'>
                            <label className='ktopapps-percent'>{data.ranking}%</label>
                            <p className='ktopapps-percent-text'>You are in top {data.ranking}% of the total {data.totalApplications} applicants based your application and profile.</p>
                        </div>
                        <div className='ktopapps-flexcon'>
                            <div>
                                <label className='ktopapps-number'>{data.totalApplications} &nbsp;</label>
                                <label className='ktopapps-label'>Applicants for this job</label>
                            </div>
                        </div>
                    </div>
                </div>
                  <div className='kcompareapp-topappskills kcompareapp-section'>
                    <label className='kcompareapp-section-label'>Top Skills</label>
                    <hr className='kcompareapp-section-hr'></hr>
                    <div className='ktopskills-content'>
                        <p className='ktopskills-heading'>You have {data.presentSkills.length} out of the {data.topSkills.length} top skills among other applicants.</p>
                        <ul className='ktopskills-skill-con'>
                            {data.topSkills.map((item)=><li className={item.present}>{item._id}</li>)}
                        </ul>
                    </div>
                  </div>
                  <div className='kcompareapp-appexplevel kcompareapp-section'>
                    <label className='kcompareapp-section-label'>Experience Level</label>
                    <hr className='kcompareapp-section-hr'></hr>
                    <div className='kexplevel-content'>
                        <div className='kexplevel-exp'>
                            <label className='kexplevel-exp-lbl'>{data.expYearList.entry}% Entry Level Applicants</label>
                            <progress className="kexplevel-progress" value={data.expYearList.entry} max="100"></progress>
                        </div>
                        <div className='kexplevel-exp'>
                            <label className='kexplevel-exp-lbl'>{data.expYearList.senior}% Senior Level Applicants</label>
                            <progress className="kexplevel-progress" value={data.expYearList.senior} max="100"></progress>
                        </div>
                        <div className='kexplevel-exp'>
                            <label className='kexplevel-exp-lbl'>{data.expYearList.manager}% Manager Level Applicants</label>
                            <progress className="kexplevel-progress" value={data.expYearList.manager} max="100"></progress>
                        </div>
                        <div className='kexplevel-exp'>
                            <label className='kexplevel-exp-lbl'>{data.expYearList.director}% Director Level Applicants</label>
                            <progress className="kexplevel-progress" value={data.expYearList.director} max="100"></progress>
                        </div>
                    </div>
                  </div>
                  <div className='kcompareapp-appedulevel kcompareapp-section'>
                    <label className='kcompareapp-section-label'>Education Level</label>
                    <hr className='kcompareapp-section-hr'></hr>
                    <div className='kedulevel-content'>
                        {data.top2degrees.map((item)=><div className='kedulevel-field'>
                            <label className='kedulevel-percent'>{item.count / data.totalApplications * 100}% &nbsp;</label>
                            <label className='kedulevel-lbl'>have a {item._id} degree</label>
                        </div>)}
                        {data.top2majors.map((item)=><div className='kedulevel-field'>
                            <label className='kedulevel-percent'>{item.count / data.totalApplications * 100}% &nbsp;</label>
                            <label className='kedulevel-lbl'>have majored in {item._id}</label>
                        </div>)}
                    </div>
                  </div></>);
                }
                else
                {
                    console.log(res.data.data);
                    setCon(<label>Error loading data!</label>);
                }
        })
              .catch(err=>{alert("ERROR IN AXIOS : "+err)});
    },[]);

    return (
      <div className='kcompareapp-container'>
        <div className='kcompareapp-header'>
            <label>See how you compare to other applicants</label>
        </div>
        {con}
      </div>
    )
  }