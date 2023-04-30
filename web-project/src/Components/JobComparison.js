import React, { useEffect } from 'react'
import jobicon from './workk.png'
import Footer from './Footer'

import './JobComparison.css';

import narsun from './narsun.jpg'
import mindstorm from './mindstorm.jpg'
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
       
    </tr>);
}

function JobComparison() {
    
    const componentArray = [
        <CurrentJobRow key="example-key-1"/>,
        <CurrentJobRow key="example-key-2" />,
        <CurrentJobRow key="example-key-3" />,
        <CurrentJobRow key="example-key-4" />
    ];
    
    return (


        <div id="nab-currentjobs-wrapper">
            <div id="nab-comparejobs-wrapper">Comparison</div>

            
        
            <div>
            <table id="jobcomparison-table">
                
                <tr>
                    <td  colspan="2">THIS OR THAT</td>
                    <td></td>
                    
                </tr>
                
                <tr>
                    <td><button class="uides-btn"><span>UI Designer at Narsun Studios </span></button></td>
                    <td><button class="uides-btn"><span>UI Designer at Mindstorm Studios </span></button></td>
                    
                </tr>
                <tr>
                    <td><img id="jobcomp-img" src={narsun}/>
                    </td>
                    <td><img  id="jobcomp-img" src={mindstorm}/></td>
                    
                </tr>
                <tr>
                    <td  colspan="2">Salary & Yearly Bonus</td>
                    <td></td>
                    
                </tr>
                <tr>
                    <td>$7k Yearly + $1K Yearly Bonus</td>
                    <td>$9k Yearly + $0.5K Yearly Bonus</td>
                    
                </tr>
                <tr>
                    <td  colspan="2">Degree Required</td>
                    <td></td>
                    
                </tr>
                <tr>
                    <td>MPhil Degree in any CS Field</td>
                    <td>Bachelors in CS + industry experience</td>
                    
                </tr>
                <tr>
                    <td  colspan="2">Experience Required</td>
                    <td></td>
                    
                </tr>
                <tr>
                    <td>10 Years in Data Mining</td>
                    <td>5 Years in Field Work</td>
                    
                </tr>
                <tr>
                    <td  colspan="2">Working Hours</td>
                    <td></td>
                    
                </tr>
                <tr>
                    <td>10 to 6 with WFH Available</td>
                    <td>40 Hours Flexible Weekly</td>
                    
                </tr>
                <tr>
                    <td  colspan="2">Paid Leaves</td>
                    <td></td>
                    
                </tr>
                <tr>
                    <td>3 month-Paid-Maternity Leave</td>
                    <td>1 month-Paid-Leave</td>
                    
                </tr>
                <tr>
                    <td  colspan="2">Location</td>
                    <td></td>
                    
                </tr>
                <tr>
                    <td>Silicon Valley, USA</td>
                    <td>Texas</td>
                    
                </tr>
            </table>
            </div>

            
        </div>


    );
}
export default JobComparison;
  