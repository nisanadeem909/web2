import React, { useRef } from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import './ProfileEducation.css'
import './KModals.css'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
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
  const newSkill = useRef(null);

  const addSkill=()=>{
        //alert(newSkill.current.value);
        
        var str = newSkill.current.value;

        if (!str || !str.trim())
        {
            alert("Please enter a skill to add!");
            return;
        }

        props.addNewSkill(newSkill.current.value);
        handleClose();
  }

  return (
    <div>
      <button className="kprofile_addbtn" onClick={handleOpen}>+</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="kmodal_addeduc"
      >
        <Box sx={style}>
            <div className='kmodal_header'>
                <h4 id="kmodal_addeduc" className='kmodal_title'>Add a Skill</h4>
                <button className="kmodal_crossBtn" onClick={handleClose}>X</button>
            </div>
            <hr className='kmodal_hr'/>
          <div className='kmodal_container'>
            <label>New Skill: </label>
            <input ref={newSkill} type="text" className='kmodal_inputfields'></input>
            <button className='kmodal_buttons' onClick={addSkill}>Add to Profile</button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}