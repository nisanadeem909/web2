import React, { useRef } from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
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
  //const newSkill = useRef(null);

    const handleDelete=()=>{
        props.remove(props.selectedItem);
        handleClose();
  }

  return (
    <div>
      <button className="kprofile_removebtn" onClick={handleOpen}>-</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="kmodal_addeduc"
      >
        <Box sx={style}>
            <div className='kmodal_header'>
                <h4 id="kmodal_addeduc" className='kmodal_title'>Confirm Changes</h4>
                <button className="kmodal_crossBtn" onClick={handleClose}>X</button>
            </div>
            <hr className='kmodal_hr'/>
            <p className='kmodal_msg'>Are you sure you want to delete?</p>
          <div className='kmodal_container'>
            <button className='kmodal_buttons' onClick={handleDelete}>Delete</button>
            <button className='kmodal_cancel_buttons' onClick={handleClose}>Cancel</button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}