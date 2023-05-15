import React, { useState, useEffect } from 'react';
import './CompanyVacancies.css';
import vaca from './vaca.png';
import jobicon from './workk.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Modal from 'react-modal';

Modal.setAppElement('#root');

export default function CompanyVacancies() {
  const navigate = useNavigate();
  const [allVacancy, setAllVacancy] = useState([]);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedVacancyId, setSelectedVacancyId] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const sessionID = sessionStorage.getItem('sessionID');
    axios
      .get(`http://localhost:8000/allvacancy/${sessionID}`)
      .then(res => {
        setAllVacancy(res.data);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const viewApplicants = (id) => {
    navigate("viewapplicants", { state: id });
  };

  const addVacancy = () => {
    navigate("postjob");
  };

  const openEditModal = () => {
    navigate("editvacancy");
  };

  const deleteVacancy = () => {
    axios
    .delete(`http://localhost:8000/delvacancy/${selectedVacancyId}`)
    .then(res => {
      setAllVacancy(prevVacancies =>
        prevVacancies.filter(vac => vac._id !== selectedVacancyId)
      );
      setDeleteModalOpen(false);
    })
    .catch(error => console.log(error));
    
  };

  const openDeleteModal = (vacancyId) => {
    setSelectedVacancyId(vacancyId);
    setDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setDeleteModalOpen(false);
  };

  return (
    <div className='nisa-vaca-container1'>
      <div className='nisa-vaca-container2'>
        <img className='nisa-vaca-img1' src={vaca} alt='' />
        <label className='nisa-vaca-label'>Vacancies</label>
      </div>

      <hr className='notif' />

      <button onClick={addVacancy} className='nisa-vaca-btn2'>
        Add Vacancy
      </button>

      {loading ? (
        <p className='nisa-vac-ll'>Loading...</p>
      ) : allVacancy.length === 0 ? (
        <p className='nisa-vac-ll'>No vacancies found</p>
      ) : (
        <ul>
          {allVacancy.map(vac => (
            <li key={vac._id}>
              <div className='nisa-notif-list'>
                <div className='nisa-notify-container2'>
                  <img className='nisa-notify-img2' src={jobicon} alt='' />
                  <div className='nisa-notify-container3'>
                    <div className='nisa-notify-container4'>
                      <label className='nisa-vaca-lb'>{vac.Designation}</label>
                    </div>
                  </div>
                </div>

                <div className='nisa-notify-post'>
                  <button onClick={() => viewApplicants(vac.JobId)} className='nisa-vaca-btn1'>
                    Applicants
                  </button>
                  <button onClick={openEditModal} className='nisa-vaca-btn1'>
                    Edit
                  </button>
                  
                  <button onClick={() => openDeleteModal(vac._id)} className='nisa-vaca-btn1'>
Delete
</button>
</div>
</div>
</li>
))}
</ul>
)}

  <Modal
    isOpen={deleteModalOpen}
    onRequestClose={closeDeleteModal}
    contentLabel="Confirm Delete"
    className="vaca-modal"
    overlayClassName="vaca-overlay"
  >
    <div className="modal-content">
      <h2 className="modal-title">Confirm Delete</h2>
      <p className="modal-message">Are you sure you want to delete this vacancy?</p>
      <div className="modal-buttons">
        <button onClick={deleteVacancy} className="btn btn-delete">Delete</button>
        <button onClick={closeDeleteModal} className="btn btn-cancel">Cancel</button>
      </div>
    </div>
  </Modal>
</div>
);
}





