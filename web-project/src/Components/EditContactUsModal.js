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
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const newWebsite = useRef(props.selectedItem.website);
  const newPhone = useRef(props.selectedItem.phone);
  const newEmail = useRef(props.selectedItem.email);

  const editAboutUs=()=>{
        //alert(selectedCity.label);
        var phn = newPhone.current.value;
        var eml = newEmail.current.value;
        var webs = newWebsite.current.value;

        if (!phn)
            phn = props.selectedItem.phone;

        if (!eml)
            eml = props.selectedItem.email;

        if (!webs)
            webs = props.selectedItem.website;

        

        var newContact = {'website': webs,'phone': phn, 'email': eml};

        props.changeContact(newContact);
        handleClose();
  }

  return (
    <div>
      <button id="contactcompany-edit-btn" onClick={handleOpen}>Edit</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="kmodal_addskill"
      >
        <Box sx={style}>
            <div className='kmodal_header'>
                <h4 id="kmodal_addskill" className='kmodal_title'>Edit Contact Us</h4>
                <button className="kmodal_crossBtn" onClick={handleClose}>X</button>
            </div>
            <hr className='kmodal_hr'/>
          <div className='kmodal_educ_container'>
            <div className='kmodal_field'>
              <label className='kmodal_large_text'>Website: </label>
              <input className='kmodal_date_input' type="text" ref={newWebsite} placeholder={props.selectedItem.website}></input>
            </div>
            <div className='kmodal_field'>
              <label className='kmodal_large_text'>Phone: </label>
              <input className='kmodal_date_input' type="text" ref={newPhone} placeholder={props.selectedItem.phone}></input>
            </div>
            <div className='kmodal_field'>
              <label className='kmodal_large_text'>Email: </label>
              <input className='kmodal_date_input' type="text" ref={newEmail} placeholder={props.selectedItem.email}></input>
            </div>
            <button className='kmodal_buttons kmodal_center_btn' onClick={editAboutUs}>Confirm Changes</button>
        </div>
        </Box>
      </Modal>
    </div>
  );
}