import React, { useEffect } from 'react'
import jobicon from './workk.png'


import './CurrentApps.css';


import empicon from './dummy.jpg'

function CurrentAppRow()
{
    return(
        <tr>
        <td>
        <img className='works-emp-icon' src={empicon}></img>
            &nbsp;&nbsp;
            <a href="/">Nabeeha Mudassir</a>
        </td>
        <td>
            DevOpsEngineer
        </td>
        <td>
            <div id="nab-currentapps-btn-group">
               
                <div id="nab-currentapps-checkbox-wrapper">
                    <input id="nab-currentapps-checkbox" type="checkbox"></input>
                    &nbsp;&nbsp;
                    <label id="select-for-comp">Add to Compare</label>
                </div>
                
            </div>
        </td>
    </tr>);
}

function CurrentAppsPage() {
    
    const componentArray = [
        <CurrentAppRow key="example-key-1"/>,
        <CurrentAppRow key="example-key-2" />,
        <CurrentAppRow key="example-key-3" />,
        <CurrentAppRow key="example-key-4" />
    ];
    
    function countCheckboxes () {
        if (document.querySelectorAll('input[type="checkbox"]:checked').length != 2)
            alert("Only 2 Jobs are Allowed for Comparison");
        
    }
    return (


        <div id="nab-currentapps-wrapper">
            <div id="nab-innerapps-wrapper">All Applicants</div>

            <div id="nab-compare-div">
                <button class="nab-compareapps-button" onClick={countCheckboxes}>Compare 2 Applicants</button> 
                <label id="select3apps">Select 2 applicants to compare.</label>
            </div>
        
            <div>
                <table id="currentapps-table">
                   {componentArray}
                </table>
            </div>
        </div>
    );
}

export default CurrentAppsPage;
  