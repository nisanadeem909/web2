import React, { useEffect } from 'react'
import jobicon from './workk.png'


import './CurrentJobs.css';


import empicon from './dummy.jpg'

function CurrentJobRow()
{
    
    return(
        <tr>
        <td>
        <img className='works-emp-icon' src={empicon}></img>
            &nbsp;&nbsp;
            <a href="/">Mindstorm Studios</a>
        </td>
        <td>
            DevOpsEngineer
        </td>
        <td>
            <div id="nab-currentjobs-btn-group">
               
                <div id="nab-currentjobs-checkbox-wrapper">
                    <input id="nab-currentjobs-checkbox" type="checkbox"></input>
                    &nbsp;&nbsp;
                    <label id="select-for-comp">Add to Compare</label>
                </div>
                
            </div>
        </td>
    </tr>);
}

function CurrentJobsPage() {
    
    const componentArray = [
        <CurrentJobRow key="example-key-1"/>,
        <CurrentJobRow key="example-key-2" />,
        <CurrentJobRow key="example-key-3" />,
        <CurrentJobRow key="example-key-4" />
    ];
    
    function countCheckboxes () {
        if (document.querySelectorAll('input[type="checkbox"]:checked').length != 2)
            alert("Only 2 Jobs are Allowed for Comparison");
        
    }
    return (


        <div id="nab-currentjobs-wrapper">
            <div id="nab-innerjobs-wrapper">All Jobs</div>

            <div id="nab-compare-div">
                <button class="nab-comparejobs-button" onClick={countCheckboxes}>Compare 2 Jobs</button> 
                <label id="select3jobs">Select 2 jobs to compare.</label>
            </div>
        
            <div>
                <table id="currentjobs-table">
                   {componentArray}
                </table>
            </div>
        </div>
    );
}

export default CurrentJobsPage;
  