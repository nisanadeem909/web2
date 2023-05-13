import React, { useRef, useState } from 'react'
import Select from 'react-select'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import './contactcompany.css'
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

  const handleOpen = () =>{
    setOpen(true);
  }
  //const handleClose = () => setOpen(false);

  const newWebsite = useRef(null);
  const newPhone = useRef(null);
  const newEmail = useRef(null);

  const handleClose = () => {
    setOpen(false);
  }

  const editContact=()=>{
        var phn = newPhone.current.value;
        var eml = newEmail.current.value;
        var webs = newWebsite.current.value;

        if (!phn && !eml && !webs)
        {
          alert('Please add at least one contact option.');
          return;
        }

        var newContact = {'website': webs,'phone': phn, 'email': eml};

        props.addContact(newContact);
        handleClose();
  }

  return (
    <div>
      <button id="contactcompany-edit-btn" onClick={handleOpen}>Add</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="kmodal_addskill"
      >
        <Box sx={style}>
            <div className='kmodal_header'>
                <h4 id="kmodal_addskill" className='kmodal_title'>Add Contact Us</h4>
                <button className="kmodal_crossBtn" onClick={handleClose}>X</button>
            </div>
            <hr className='kmodal_hr'/>
          <div className='kmodal_educ_container'>
            <div className='kmodal_field'>
              <label className='kmodal_large_text'>Website: </label>
              <input className='kmodal_date_input' type="text" ref={newWebsite} placeholder="Company Website for contact"></input>
            </div>
            <div className='kmodal_field'>
              <label className='kmodal_large_text'>Phone: </label>
              <input className='kmodal_date_input' type="text" ref={newPhone} placeholder="Company contact number"></input>
            </div>
            <div className='kmodal_field'>
              <label className='kmodal_large_text'>Email: </label>
              <input className='kmodal_date_input' type="text" ref={newEmail} placeholder="Company email address"></input>
            </div>
            <button className='kmodal_buttons kmodal_center_btn' onClick={editContact}>Confirm Changes</button>
        </div>
        </Box>
      </Modal>
    </div>
  );
}