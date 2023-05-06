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
  var changed = false;

  const newStartDate = useRef(props.selectedEduc.startYear);
  const newEndDate = useRef(props.selectedEduc.endYear);

  const [stateStartDate,setStartDate] = useState(props.selectedEduc.startYear);
  const [stateEndDate,setEndDate] = useState(props.selectedEduc.endYear);

  const [schoolList,setSchoolList] = useState([{"label": "FAST", "value" : "FAST"}, {"label": "LUMS", "value" : "LUMS"}, {"label": "LGS", "value" : "LGS"}]);
  const [degreeList,setDegreeList] = useState([{"label": "Bachelors", "value": "BS"}, {"label": "Masters", "value": "MS"},{"label": "A Level", "value": "AL"},{"label": "PhD", "value": "PHD"},{"label": "O Level", "value": "OL"}]);
  const [majorList,setMajorList] = useState([{"label": "Computer Science", "value": "CS"},{"label": "Software Engineering", "value": "SE"},{"label": "Mathematics", "value": "MT"},{"label": "Medical Science", "value": "MED"}]);

  var tempDegree = degreeList.filter((obj)=>obj.label === props.selectedEduc.degree)[0];
  var tempMajor = majorList.filter((obj)=>obj.label === props.selectedEduc.major)[0];
  
  const [selectedSchool,setSelectedSchool] = useState({"label": props.selectedEduc.school,"value":props.selectedEduc.school});
  const [selectedDegree,setSelectedDegree] = useState({"label": tempDegree.label,"value": tempDegree.value});
  const [selectedMajor,setSelectedMajor] = useState({"label": tempMajor.label,"value": tempMajor.value});

  const handleOpen = () =>{
    changed = false;
    //alert(selectedDegree.label);
    setOpen(true);
  }

  const handleClose = () => {
    ///setSelectedSchool({"label": selectedSchool.school,"value":selectedSchool.school});
    //setSelectedDegree({"label": selectedDegree.label,"value": selectedDegree.value});
    //setSelectedMajor({"label": selectedMajor.label,"value": selectedMajor.value});

    if (!changed)
    {
        setStartDate(props.selectedEduc.startYear);
        setEndDate(props.selectedEduc.endYear);
        setSelectedSchool({"label": props.selectedEduc.school,"value":props.selectedEduc.school});
        tempDegree = degreeList.filter((obj)=>obj.label === props.selectedEduc.degree)[0];
        tempMajor = majorList.filter((obj)=>obj.label === props.selectedEduc.major)[0];
        setSelectedDegree({"label": tempDegree.label,"value": tempDegree.value});
        setSelectedMajor({"label": tempMajor.label,"value": tempMajor.value});
    }

   // alert(selectedDegree.label);

    setOpen(false);
  }

  const editEduc=()=>{

        var startdate = newStartDate.current.value;
        var enddate = newEndDate.current.value;

        if (!startdate || !enddate)
        {
          alert("Please enter all fields!");
          return;
        }

        var currYear = (new Date()).getFullYear();

        if (startdate > currYear)
        {
            alert("Start Year cannot be greater than Present Year!");
            return;
        }

        if (startdate > enddate)
        {
          alert("Start Year cannot be greater than End Year!");
          return;
        }
        
        var newEduc = {'school': selectedSchool.label, 'degree': selectedDegree.label, 'major': selectedMajor.label, 'startYear': startdate, 'endYear': enddate};

        props.changeEduc(newEduc,props.selectedEduc);
        handleClose();
  }


  return (
    <div>
      <button className="kprofile_editbtn" onClick={handleOpen}><img className="kprofile_editicon" src={editicon} alt="Edit"/></button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="kmodal_addskill"
      >
        <Box sx={style}>
            <div className='kmodal_header'>
                <h4 id="kmodal_addskill" className='kmodal_title'>Edit Education</h4>
                <button className="kmodal_crossBtn" onClick={handleClose}>X</button>
            </div>
            <hr className='kmodal_hr'/>
          <div className='kmodal_educ_container'>
            <div className='kmodal_field'>
              <label className='kmodal_large_text'>School: </label>
              <Select options={schoolList}
                placeholder="School/University"
                className='kmodal_dropdown'
                onChange={(choice) => setSelectedSchool(choice)}
                value={selectedSchool}/>
            </div>
            <div className='kmodal_field'>
              <label className='kmodal_large_text'>Degree: </label>
              <Select options={degreeList}
                placeholder="Degree"
                className='kmodal_dropdown'
                onChange={(choice) => setSelectedDegree(choice)}
                value={selectedDegree}/>
            </div>
            <div className='kmodal_field'>
              <label className='kmodal_large_text'>Major: </label>
              <Select options={majorList}
                placeholder="Major Field of Study"
                className='kmodal_dropdown'
                onChange={(choice) => setSelectedMajor(choice)}
                value={selectedMajor}/>
            </div>
            <div className='kmodal_field'>
              <label className='kmodal_large_text'>Start Year: </label>
              <input className='kmodal_date_input' type="number" ref={newStartDate} min="1900" max="3000" value={stateStartDate} placeholder="Starting year" onChange={()=>setStartDate(newStartDate.current.value)}></input>
            </div>
            <div className='kmodal_field'>
              <label className='kmodal_large_text'>End Year: </label>
              <input className='kmodal_date_input' type="number" ref={newEndDate} min="1900" max="3000" value={stateEndDate} placeholder="Ending year or Expected ending year" onChange={()=>setEndDate(newEndDate.current.value)}></input>
            </div>
            <button className='kmodal_buttons kmodal_center_btn' onClick={editEduc}>Confirm Changes</button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}