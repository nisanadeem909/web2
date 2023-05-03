import React, { useRef, useState } from 'react'
import Select from 'react-select'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import './JobDetails.css'
import './KModals.css'
import editIcon from './edit.png'

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
  //const handleClose = () => setOpen(false);

  const newWorkHours = useRef(props.selectedItem.workingHours);
  const newSalary = useRef(props.selectedItem.salary);
  const newPaidLeaves = useRef(props.selectedItem.paidLeaves);
  const newPosition = useRef(props.selectedItem.position);
  const newExpReq = useRef(props.selectedItem.requirements.experience);
  const newDesc = useRef(props.selectedItem.description);

  const [degreeList,setDegreeList] = useState([{"label": "Bachelors", "value": "BS"}, {"label": "Masters", "value": "MS"},{"label": "A Level", "value": "AL"},{"label": "PhD", "value": "PHD"},{"label": "O Level", "value": "OL"}]);
  const [majorList,setMajorList] = useState([{"label": "Computer Science", "value": "CS"},{"label": "Software Engineering", "value": "SE"},{"label": "Mathematics", "value": "MT"},{"label": "Medical Science", "value": "MED"}]);

  var tempDegree = degreeList.filter((obj)=>obj.label === props.selectedItem.requirements.degree)[0];
  var tempMajor = majorList.filter((obj)=>obj.label === props.selectedItem.requirements.major)[0];
  
  const [selectedDegree,setSelectedDegree] = useState({"label": tempDegree.label,"value": tempDegree.value});
  const [selectedMajor,setSelectedMajor] = useState({"label": tempMajor.label,"value": tempMajor.value});

  const [stateWorkHours,setWorkHours] = useState(props.selectedItem.workingHours);
  const [stateSalary,setSalary] = useState(props.selectedItem.salary);
  const [statePaidLeaves,setPaidLeaves] = useState(props.selectedItem.paidLeaves);
  const [statePosition,setPosition] = useState(props.selectedItem.position);
  const [stateExpReq,setExpReq] = useState(props.selectedItem.requirements.experience);

  const handleClose = () => {
    setSelectedDegree({"label": tempDegree.label,"value": tempDegree.value});
    setSelectedMajor({"label": tempMajor.label,"value": tempMajor.value});
    
    if (!changed)
    {
        setWorkHours(props.selectedItem.workingHours);
        setSalary(props.selectedItem.salary);
        setPaidLeaves(props.selectedItem.paidLeaves);
        setPosition(props.selectedItem.position);
        setExpReq(props.selectedItem.requirements.experience);
    }

    setOpen(false);
  }

  const editJob=()=>{
        changed = true;

        var slry = newSalary.current.value;
        var hours = newWorkHours.current.value;
        var leaves = newPaidLeaves.current.value;
        var degree = selectedDegree.label;
        var major = selectedMajor.label;
        var exp = newExpReq.current.value;
        var desc = newDesc.current.value;
        var pos = newPosition.current.value;

        if (!slry || !hours || !leaves || !exp || !desc || !pos)
        {
            alert("All fields are required!");
            return;
        }

        

        var newVacancy = {'position': pos,'salary': slry, 'workingHours': hours, 'paidLeaves': leaves, 'description': desc, 'requirements':{'degree': degree, 'major': major, 'experience': exp}};

        props.changeVacancy(newVacancy);
        handleClose();
  }

  return (
    <div>
      <button className='kjobdetails_smallbtn' onClick={handleOpen}>Edit <img src={editIcon} alt='err' className='kjobdetails_editicon'></img></button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="kmodal_addskill"
      >
        <Box sx={style}>
            <div className='kmodal_header'>
                <h4 id="kmodal_addskill" className='kmodal_title'>Edit Vacancy</h4>
                <button className="kmodal_crossBtn" onClick={handleClose}>X</button>
            </div>
            <hr className='kmodal_hr'/>
          <div className='kmodal_educ_container'>
            <div className='kmodal_field'>
              <label className='kmodal_large_text'>Position: </label>
              <input className='kmodal_date_input' type="text" ref={newPosition} value={statePosition} placeholder="Job position/designation" onChange={()=>setPosition(newPosition.current.value)}></input>
            </div>
            <div className='kmodal_field'>
              <label className='kmodal_large_text'>Salary: </label>
              <input className='kmodal_date_input' type="number" min='0' ref={newSalary} value={stateSalary} placeholder="Estimated salary for the job" onChange={()=>setSalary(newSalary.current.value)}></input>
            </div>
            <div className='kmodal_field'>
              <label className='kmodal_large_text'>Weekly Working Hours: </label>
              <input className='kmodal_date_input' type="number" min='1' ref={newWorkHours} value={stateWorkHours} placeholder="Weekly working hours" onChange={()=>setWorkHours(newWorkHours.current.value)}></input>
            </div>
            <div className='kmodal_field'>
              <label className='kmodal_large_text'>Degree Required: </label>
              <Select options={degreeList}
                placeholder="Degree"
                className='kmodal_dropdown'
                onChange={(choice) => setSelectedDegree(choice)}
                value={selectedDegree}/>
            </div>
            <div className='kmodal_field'>
              <label className='kmodal_large_text'>Major Required: </label>
              <Select options={majorList}
                placeholder="Major Field of Study"
                className='kmodal_dropdown'
                onChange={(choice) => setSelectedMajor(choice)}
                value={selectedMajor}/>
            </div>
            <div className='kmodal_field'>
              <label className='kmodal_large_text'>Years of Experience: </label>
              <input className='kmodal_date_input' type="number" min='0' ref={newExpReq} value={stateExpReq} placeholder="Minimum years of experience required" onChange={()=>setExpReq(newExpReq.current.value)}></input>
            </div>
            <div className='kmodal_field'>
              <label className='kmodal_large_text'>Paid Leaves: </label>
              <input className='kmodal_date_input' type="number" min='0' ref={newPaidLeaves} value={statePaidLeaves} placeholder="Available paid leaves yearly" onChange={()=>setPaidLeaves(newPaidLeaves.current.value)}></input>
            </div>
            <div className='kmodal_field'>
              <label className='kmodal_large_text'>Job Description: </label>
              <textArea className='kmodal_textarea' ref={newDesc} placeholder="Describe the job in a few words">{props.selectedItem.description}</textArea>
            </div>
            <button className='kmodal_buttons kmodal_center_btn' onClick={editJob}>Confirm Changes</button>
        </div>
        </Box>
      </Modal>
    </div>
  );
}