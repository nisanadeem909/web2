import React, { useRef, useState } from 'react'
import Select from 'react-select'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import './ProfileEducation.css'
import './KModals.css'

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
  const handleClose = () => setOpen(false);

  const newStartDate = useRef(null);
  const newEndDate = useRef(null);
  const newPosition = useRef(null);

  const [selectedCompany,setSelectedCompany] = useState(null);

  const [companyList,setCompanyList] = useState([{"label": "FAST", "value" : "FAST"}, {"label": "Google", "value" : "Google"}, {"label": "LUMS", "value" : "LUMS"}, {"label": "McDonalds", "value" : "McDonalds"}, {"label": "LGS", "value" : "LGS"}, {"label": "educative", "value" : "educative"}]);

  const addExp=()=>{

        if (!selectedCompany)
        {
          alert("Please select all fields!");
          return;
        }

        
        var startdate = newStartDate.current.value;
        var enddate = newEndDate.current.value;
        var pos = newPosition.current.value;

        if (!startdate || !enddate || !newPosition)
        {
          alert("Please select all fields!");
          return;
        }

        if (startdate > enddate)
        {
          alert("Start Year cannot be greater than End Year!");
          return;
        }

        var newExp = {'organization': selectedCompany.label, 'position': pos, 'startYear': startdate, 'endYear': enddate};

        props.addNewExp(newExp);
        handleClose();
  }

  return (
    <div>
      <button className="kprofile_addbtn" onClick={handleOpen}>+</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="kmodal_addskill"
      >
        <Box sx={style}>
            <div className='kmodal_header'>
                <h4 id="kmodal_addskill" className='kmodal_title'>Add Work Experience</h4>
                <button className="kmodal_crossBtn" onClick={handleClose}>X</button>
            </div>
            <hr className='kmodal_hr'/>
          <div className='kmodal_educ_container'>
            <div className='kmodal_field'>
              <label className='kmodal_large_text'>organization: </label>
              <Select options={companyList}
                placeholder="Company you worked for"
                className='kmodal_dropdown'
                onChange={(choice) => setSelectedCompany(choice)}/>
            </div>
            <div className='kmodal_field'>
              <label className='kmodal_large_text'>Designation: </label>
              <input className='kmodal_date_input' type="text" ref={newPosition} placeholder='Position you worked at'></input>
            </div>
            <div className='kmodal_field'>
              <label className='kmodal_large_text'>Start Year: </label>
              <input className='kmodal_date_input' type="number" ref={newStartDate} min="1900" max="3000"></input>
            </div>
            <div className='kmodal_field'>
              <label className='kmodal_large_text'>End Year: </label>
              <input className='kmodal_date_input' type="number" ref={newEndDate} min="1900" max="3000"></input>
            </div>
            <button className='kmodal_buttons kmodal_center_btn' onClick={addExp}>Add to Profile</button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}