import React, { useEffect } from 'react'
import jobicon from './workk.png'
import Footer from './Footer'

import './ApplicantComparison.css';

import narsun from './narsun.jpg'
import mindstorm from './mindstorm.jpg'
import empicon from './dummy.jpg'

function ApplicantComparison() {
    
    return (


        <div id="nab-currentapp-wrapper">
            <div id="nab-compareapps-wrapper">Comparison</div>

            
        
            <div>
            <table id="appcomparison-table">
                
                <tr>
                    <td  colspan="2">THIS OR THAT</td>
                    <td></td>
                    
                </tr>
                
                <tr>
                    <td><button class="uides-btn"><span>Nabeeha Mudassir </span></button></td>
                    <td><button class="uides-btn"><span>Nabeeha's Competitor </span></button></td>
                    
                </tr>
                <tr>
                    <td><img id="appcomp-img" src={empicon}/>
                    </td>
                    <td><img  id="appcomp-img" src={empicon}/></td>
                    
                </tr>
                <tr>
                    <td  colspan="2">Industry Experience</td>
                    <td></td>
                    
                </tr>
                <tr>
                    <td>6 Years at Devsinc</td>
                    <td>10 Years at Spadasoft</td>
                    
                </tr>
                <tr>
                    <td  colspan="2">Degree </td>
                    <td></td>
                    
                </tr>
                <tr>
                    <td>BS-SE, MBA</td>
                    <td>BS-CS, MS-CS</td>
                    
                </tr>
                <tr>
                    <td  colspan="2">Current Workplace</td>
                    <td></td>
                    
                </tr>
                <tr>
                    <td>Devsinc</td>
                    <td>Educative</td>
                    
                </tr>
                <tr>
                    <td  colspan="2">Preferred Working Hours</td>
                    <td></td>
                    
                </tr>
                <tr>
                    <td>10 to 6 with WFH Available</td>
                    <td>40 Hours Flexible Weekly</td>
                    
                </tr>
                <tr>
                    <td  colspan="2">Preferred Salary</td>
                    <td></td>
                    
                </tr>
                <tr>
                    <td>$10K Yearly</td>
                    <td>$15K Yearly</td>
                    
                </tr>
                <tr>
                    <td  colspan="2">Preferred Mode of Work</td>
                    <td></td>
                    
                </tr>
                <tr>
                    <td>Remote and On-site Flexibility</td>
                    <td>On-site</td>
                    
                </tr>
            </table>
            </div>

            
        </div>


    );
}
export default ApplicantComparison;
  