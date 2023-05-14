
import React from 'react'
import Search from './Search';
import './SearchResults.css';
import connecticon from './follow.png'
import person from './person.png';
import bgnetwork from './networkpic.png';
import axios from 'axios';
import {useState} from 'react';
import searchicon from './search_icon.png';
export default function SearchResults() {
    var array2 = new Array();
    const [searchword,setSearchWord] = useState();
    const[people,setPeople] = useState(["Nobody Yet"]);
    const[des,setDes] =useState([]);
    const[comp,setComp] = useState(["Nobody Yet"]);
    const[jobs,setJobName] = useState(["Nobody Yet"]);
    const[jobincomp,setJobComp] = useState([]);
    const[def,setDefault] = useState(["None to Show"]);
    const updateSearchWord = e=>{
        setSearchWord(e.target.value);
        //alert(searchword);
    }
    const sendQuery = async () =>{
        let newobj = {"searchword":searchword};
        //alert("I have receied + " + props.match.params.id);
        axios.post("http://localhost:8000/searchresults",newobj )
                    .then((res => 
                    //alert(JSON.stringify(res.data.peopleobj))
                    {
                    
                    if (!res.data.peopleobj.worksAt)
                        setDes(def);
                    else{
                        let des_list = res.data.peopleobj.map(cname=>cname.worksAt.Designation);
                        //console.log(people_list);
                        setDes(des_list);
                    }
                    
                    if (!res.data.companyobj)
                        setComp(def);
                    else {
                        let compname = res.data.companyobj.map(cname =>cname.name);
                        setComp(compname);
                    }
                    
                    if(!res.data.jobobj)
                        setJobName(def);
                    else{
                        
                        let jobname = res.data.jobobj.map(cname => cname.Designation);
                        setJobName(jobname);
                    }
                       
                    if (!res.data.jobobj)
                        setJobComp(def);
                    else{
                    let jobcmp = res.data.jobobj.map(cname => cname.CompanyName);
                    
                        setJobComp(jobcmp);
                    }
                    
                    if (!res.data.peopleobj)
                        setPeople(def);
                    else{
                        let people_list = res.data.peopleobj.map(cname => cname.name);
                        setPeople(people_list);
                    }   
                    console.log(jobincomp);
                        console.log(comp);
                        console.log(jobs);
                        console.log(people);
                        console.log(des);
                    
                    
    }));
                    
         
      

    }
    
    const returnRow = () =>{ 
        return  people.map((compName, index) => {
            let desg = "not defined";
            if(des.length === 0) desg="not defined";
            else desg = des[index];
            return (<div className='nab-list-big' key={index}>
                <div id="nab-wrap-people">
                            <div >
                                <img className='nab-network-img1' src={person} alt="" />
                            </div>
                        
                        <div id="nab-person-details" >
                                <label className='nab-person-name'>{compName}</label>
                                <p className='nisa-network-p'>Designation:{desg} </p>
                            </div>
                </div>
                    
                </div>);
            })
    }
    const returnCompanies = () =>{ 
        return  comp.map((compName, index) => {
            
            
            return (<div className='nab-list-big' key={index}>
                <div id="nab-wrap-people">
                            <div >
                                <img className='nab-network-img1' src={person} alt="" />
                            </div>
                        
                        <div id="nab-person-details">
                                <label className='nab-person-name'>{compName}</label>
                                
                            </div>
                </div>
                    
                </div>);
            })
    }
    const returnJobs = () =>{ 
        return  jobs.map((title, index) => {
            
            const cname = jobincomp[index];
            
            return (<div className='nab-list-big' key={index}>
                <br></br>
                <div id="nab-wrap-people">
                            <div >
                                <img className='nab-network-img1' src={person} alt="" />
                            </div>
                        
                        <div id="nab-person-details">
                                <label  className='nab-person-name'>{title}</label>
                                <br/>
                                <label  >{cname}</label>
                            </div>
                </div>
                    
                </div>);
            })
    }
  return (
    <div className='nab-searchresults-container'>
       
        <div className='nab-search-bar'>
        <div>
        <div className="search_container_k">
        <div className='search_inner_k'>
            <label id="search_title_k">Search:</label>
            <input type="text" className='search_field_k' value={searchword} onChange={updateSearchWord}/> 
            <button className='search_btn_k' onClick={() => sendQuery()}><img src={searchicon} alt="Go" className='search_icon_k'></img></button>
        </div>
    </div>
            </div>
        </div>
                    <br></br><br></br>
        <div id="nab-search-wrapper">
            
            
            <div> 
            <label className='nab-searchresults-label1'>People</label>
                <div>
                    
                        <div id="nab-people-container">
                    {/* {componentArray}*/}
                            {returnRow()}
                  
                        </div>
                </div>
            </div>
            <div>
                <label className='nab-searchresults-label2'>Companies</label>
                <div id="nab-people-container">
                {returnCompanies()}
                </div>
            
            
            
            
            </div>
            <div>
                <label className='nab-searchresults-label3'>Jobs</label>
                <div id="nab-people-container">
                    {returnJobs()}
                </div>
            </div>
        
        
        
        </div>
      </div>
      
    
  )
}
