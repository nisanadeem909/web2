import React, { useRef, useState } from 'react'
import Select from 'react-select'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import './ProfileEducation.css'
import './KModals.css'
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
  const handleOpen = () => setOpen(true);

  const newStartDate = useRef(props.selectedExp.startYear);
  const newEndDate = useRef(props.selectedExp.endYear);
  const newPosition = useRef(props.selectedExp.position);

  const [companyList,setCompanyList] = useState([{"label": "FAST", "value" : "FAST"}, {"label": "Google", "value" : "Google"}, {"label": "LUMS", "value" : "LUMS"}, {"label": "McDonalds", "value" : "McDonalds"}, {"label": "LGS", "value" : "LGS"}, {"label": "educative", "value" : "educative"}]);

  var tempComp = companyList.filter((obj)=>obj.label === props.selectedExp.organization)[0];

  const [selectedCompany,setSelectedCompany] = useState({"label": tempComp.label,"value": tempComp.value});

  const handleClose = () => {
    setSelectedCompany({"label": tempComp.label,"value": tempComp.value});
    setOpen(false);
  }

  const editExp=()=>{
        
        var startdate = newStartDate.current.value;
        var enddate = newEndDate.current.value;
        var pos = newPosition.current.value;

        if (!startdate)
          startdate = props.selectedExp.startYear;

        if (!enddate)
            enddate = props.selectedExp.endYear;

        if (!pos)
            pos = props.selectedExp.position;

        if (startdate > enddate)
        {
          alert("Start Year cannot be greater than End Year!");
          return;
        }

        var newExp = {'organization': selectedCompany.label, 'position': pos, 'startYear': startdate, 'endYear': enddate};

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
              <input className='kmodal_date_input' type="text" ref={newPosition} placeholder={props.selectedExp.position}></input>
            </div>
            <div className='kmodal_field'>
              <label className='kmodal_large_text'>Start Year: </label>
              <input className='kmodal_date_input' type="number" ref={newStartDate} min="1900" max="3000" placeholder={props.selectedExp.startYear}></input>
            </div>
            <div className='kmodal_field'>
              <label className='kmodal_large_text'>End Year: </label>
              <input className='kmodal_date_input' type="number" ref={newEndDate} min="1900" max="3000" placeholder={props.selectedExp.endYear}></input>
            </div>
            <button className='kmodal_buttons kmodal_center_btn' onClick={editExp}>Confirm Changes</button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}