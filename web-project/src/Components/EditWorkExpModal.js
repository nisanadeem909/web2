import React, { useRef, useState,useEffect } from 'react'
import Select from 'react-select'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import './ProfileEducation.css'
import './KModals.css'
import axios from 'axios';
import editicon from './edit.png'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    bgcolor: 'background.paper',
    border: '3px solid #0E312F',
    boxShadow: 24,
    p: 4,
    borderRadius: '3vh'
  };

export default function BasicModal(props) {
  const [open, setOpen] = React.useState(false);
  var changed = false;

  const handleOpen = () =>{
    changed = false;
    setOpen(true);
  }

  const newStartDate = useRef(props.selectedExp.startYear);
  const newEndDate = useRef(props.selectedExp.endYear);
  const newPosition = useRef(props.selectedExp.position);

  const [stateStartDate,setStartDate] = useState(props.selectedExp.startYear);
  const [stateEndDate,setEndDate] = useState(props.selectedExp.endYear);
  const [statePosition,setPosition] = useState(props.selectedExp.position);

  //alert("hi");
  const [companyList,setCompanyList] = useState([]);
  var tempComp;

  const [selectedCompany,setSelectedCompany] = useState(null);

  useEffect(() => {
    axios.post("http://localhost:8000/getcompanydropdownlist").then((response) => {
        //alert(response.data);
        setCompanyList(response.data);
        //alert("1:"+ JSON.stringify(response.data));
        //alert(JSON.stringify(companyList));
    })
    .catch(function (error) {
        alert("Edit work exp axios error: "+ error);
    });
  }, []);

  useEffect(() => {
    //alert("3:"+JSON.stringify(companyList));
    if (companyList)
    {
        
        tempComp = companyList.filter((obj)=>obj.label === props.selectedExp.company)[0];
        //alert(JSON.stringify(tempComp));
        setSelectedCompany(tempComp);
        //alert("i am here now hi");
    }
}, [companyList]);

  const handleClose = () => {
    if (!changed)
    {
        setStartDate(props.selectedExp.startYear);
        setEndDate(props.selectedExp.endYear);
        setPosition(props.selectedExp.position);
        tempComp = companyList.filter((obj)=>obj.label === props.selectedExp.company)[0];
        setSelectedCompany({"label": tempComp.label,"value": tempComp.value});
    }
    
    setOpen(false);
  }

  const editExp=()=>{
        
        var startdate = newStartDate.current.value;
        var enddate = newEndDate.current.value;
        var pos = newPosition.current.value;

        if (!startdate || !enddate || !pos)
        {
            alert("Please fill all fields!");
            return;
        }

        if (startdate > enddate)
        {
          alert("Start Year cannot be greater than End Year!");
          return;
        }

        var newExp = {'company': selectedCompany.label, 'position': pos, 'startYear': startdate, 'endYear': enddate};

        props.changeExp(newExp,props.selectedExp);
        handleClose();
  }

  return (
    <div>
      <button className="kprofile_editbtn"><img className="kprofile_editicon" src={editicon} alt="Edit" onClick={handleOpen}/></button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="kmodal_addskill"
      >
        <Box sx={style}>
            <div className='kmodal_header'>
                <h4 id="kmodal_addskill" className='kmodal_title'>Edit Work Experience</h4>
                <button className="kmodal_crossBtn" onClick={handleClose}>X</button>
            </div>
            <hr className='kmodal_hr'/>
          <div className='kmodal_educ_container'>
            <div className='kmodal_field'>
              <label className='kmodal_large_text'>Organization: </label>
              <Select options={companyList}
                placeholder="Company you worked for"
                className='kmodal_dropdown'
                onChange={(choice) => setSelectedCompany(choice)}
                value={selectedCompany}/>
            </div>
            <div className='kmodal_field'>
              <label className='kmodal_large_text'>Designation: </label>
              <input className='kmodal_date_input' type="text" ref={newPosition} value={statePosition} placeholder="Job Position" onChange={()=>setPosition(newPosition.current.value)}></input>
            </div>
            <div className='kmodal_field'>
              <label className='kmodal_large_text'>Start Year: </label>
              <input className='kmodal_date_input' type="number" ref={newStartDate} min="1900" max="3000" value={stateStartDate} placeholder="Starting year" onChange={()=>setStartDate(newStartDate.current.value)}></input>
            </div>
            <div className='kmodal_field'>
              <label className='kmodal_large_text'>End Year: </label>
              <input className='kmodal_date_input' type="number" ref={newEndDate} min="1900" max="3000" value={stateEndDate} placeholder="Ending year (if applicable)" onChange={()=>setEndDate(newEndDate.current.value)}></input>
            </div>
            <button className='kmodal_buttons kmodal_center_btn' onClick={editExp}>Confirm Changes</button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}