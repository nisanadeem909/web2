import React, { useRef, useState,useEffect } from 'react'
import Select from 'react-select'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import './ProfileEducation.css'
import './KModals.css'
import axios from 'axios'

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

  const [selectedSchool,setSelectedSchool] = useState(null);
  const [selectedDegree,setSelectedDegree] = useState(null);
  const [selectedMajor,setSelectedMajor] = useState(null);

  const [schoolList,setSchoolList] = useState([]);
  const [degreeList,setDegreeList] = useState([{"label": "Bachelors", "value": "BS"}, {"label": "Masters", "value": "MS"},{"label": "A Level", "value": "AL"},{"label": "PhD", "value": "PHD"},{"label": "O Level", "value": "OL"}]);
  const [majorList,setMajorList] = useState([{"label": "Computer Science", "value": "CS"},{"label": "Software Engineering", "value": "SE"},{"label": "Mathematics", "value": "MT"},{"label": "Medical Science", "value": "MED"}]);

  useEffect(() => {
    //post request to server to get profile details 
    axios.post("http://localhost:8000/getschooldropdownlist").then((response) => {
        //alert(response.data);
        setSchoolList(response.data);
        //alert('hi');
    })
    .catch(function (error) {
        alert("Axios Error:" + error);
    });
  }, []);

  const addEduc=()=>{
        //alert(newEduc.current.value);
        
        /*var school = newSchool.current.value;
        var degree = newDegree.current.value;
        var major = newMajor.current.value;*/

        if (!selectedSchool || !selectedDegree || !selectedMajor )
        {
          alert("Please select all fields!");
          return;
        }

        
        var startdate = newStartDate.current.value;
        var enddate = newEndDate.current.value;

        if (isNaN(startdate) || isNaN(enddate))
        {
          alert("Please select all fields!");
          return;
        }

        if (startdate > enddate)
        {
          alert("Start Date must be before End Date!");
          return;
        }

        var newEduc = {'school': selectedSchool.label, 'degree': selectedDegree.label, 'major': selectedMajor.label, 'startYear': startdate, 'endYear': enddate};

        props.addNewEduc(newEduc);
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
                <h4 id="kmodal_addskill" className='kmodal_title'>Add Education</h4>
                <button className="kmodal_crossBtn" onClick={handleClose}>X</button>
            </div>
            <hr className='kmodal_hr'/>
          <div className='kmodal_educ_container'>
            <div className='kmodal_field'>
              <label className='kmodal_large_text'>School: </label>
              <Select options={schoolList}
                placeholder="School/University"
                className='kmodal_dropdown'
                onChange={(choice) => setSelectedSchool(choice)}/>
            </div>
            <div className='kmodal_field'>
              <label className='kmodal_large_text'>Degree: </label>
              <Select options={degreeList}
                placeholder="Degree"
                className='kmodal_dropdown'
                onChange={(choice) => setSelectedDegree(choice)}/>
            </div>
            <div className='kmodal_field'>
              <label className='kmodal_large_text'>Major: </label>
              <Select options={majorList}
                placeholder="Major Field of Study"
                className='kmodal_dropdown'
                onChange={(choice) => setSelectedMajor(choice)}/>
            </div>
            <div className='kmodal_field'>
              <label className='kmodal_large_text'>Start Year: </label>
              <input className='kmodal_date_input' type="number" ref={newStartDate} min="1900" max="3000"></input>
            </div>
            <div className='kmodal_field'>
              <label className='kmodal_large_text'>End Year: </label>
              <input className='kmodal_date_input' type="number" ref={newEndDate} min="1900" max="3000"></input>
            </div>
            <button className='kmodal_buttons kmodal_center_btn' onClick={addEduc}>Add to Profile</button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}