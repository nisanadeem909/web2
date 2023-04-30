import React, { useRef, useState } from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import './ratingcompany.css'
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
  const newRating = useRef(5);

  const [selectedRating,setSelectedRating] = useState(5);

  const updateRating=()=>{
        
        props.addRating(newRating.current.value);
        handleClose();
  }

  const handleClose = () => {
    newRating.current.value = 5;
    setSelectedRating(5);
    setOpen(false);
  }

  return (
    <div>
      <button className='ratingcompany-btn' onClick={handleOpen}>Rate</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="kmodal_addeduc"
      >
        <Box sx={style}>
            <div className='kmodal_header'>
                <h4 id="kmodal_addeduc" className='kmodal_title'>Rate your Company</h4>
                <button className="kmodal_crossBtn" onClick={handleClose}>X</button>
            </div>
            <hr className='kmodal_hr'/>
          <div className='kmodal_container'>
            <label>Your Rating: </label>
            <input ref={newRating} type="range" className='kmodal_inputrange' min="0" max="5" onChange={()=>setSelectedRating(newRating.current.value)}></input>
            <label>{selectedRating}</label>
            <button className='kmodal_buttons' onClick={updateRating}>Add Rating</button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}