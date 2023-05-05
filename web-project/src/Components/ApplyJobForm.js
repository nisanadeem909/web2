import React,{useState,useRef} from 'react' 
import './PostJobPage.css';
import Select from 'react-select'

export default function ApplyJob() {

    var name = 'Komal Waseem'; // name of logged in user
    var jobDetails = {'position':'Internship', 'company': 'Devsinc'};
   
    const [degreeList,setDegreeList] = useState([{"label": "Bachelors", "value": "BS"}, {"label": "Masters", "value": "MS"},{"label": "A Level", "value": "AL"},{"label": "PhD", "value": "PHD"},{"label": "O Level", "value": "OL"}]);
    const [majorList,setMajorList] = useState([{"label": "Computer Science", "value": "CS"},{"label": "Software Engineering", "value": "SE"},{"label": "Mathematics", "value": "MT"},{"label": "Medical Science", "value": "MED"}]);

    const [selectedDegree,setSelectedDegree] = useState(null);
    const [selectedMajor,setSelectedMajor] = useState(null);

    return (
      <div className='kpostjobform-container'>
          <div className='kpostjobform-header'>
            <label>Apply for Job</label>
          </div>
          <div className='kpostjobform-form'>
          <div className='kpostjobform-field'>
            <label className='kpostjobform-field-heading'>Full Name:</label>
            <label className='kpostjobform-field-lbl'>{name}</label>
          </div>
          <div className='kpostjobform-field'>
            <label className='kpostjobform-field-heading'>Applying for:</label>
            <label className='kpostjobform-field-lbl'>{jobDetails.position} at {jobDetails.company}</label>
          </div>
          <div className='kpostjobform-field'>
            <label className='kpostjobform-field-heading'>Date of Birth:</label>
            <input type="date" className='kpostjobform-field-input'></input>
          </div>
          <div className='kpostjobform-field'>
            <label className='kpostjobform-field-heading'>Email:</label>
            <input type="text" className='kpostjobform-field-input' placeholder='Email for Contact'></input>
          </div>
          <div className='kpostjobform-field'>
            <label className='kpostjobform-field-heading'>Contact Number:</label>
            <input type="number" className='kpostjobform-field-input' placeholder='Phone Number'></input>
          </div>
          <div className='kpostjobform-field'>
            <label className='kpostjobform-field-heading'>Last Degree:</label>
            <Select options={degreeList}
                placeholder="Latest Degree related to Job"
                className='kpostjobform-field-dropdown'
                onChange={(choice) => setSelectedDegree(choice)}
                />
          </div>
          <div className='kpostjobform-field'>
            <label className='kpostjobform-field-heading'>Major of Last Degree:</label>
            <Select options={majorList}
                placeholder="Major of Degree mentioned above"
                className='kpostjobform-field-dropdown'
                onChange={(choice) => setSelectedMajor(choice)}
                />
          </div>
          <div className='kpostjobform-field'>
            <label className='kpostjobform-field-heading'>Years of Experience:</label>
            <input type="number" className='kpostjobform-field-input' placeholder='Experience in related fields' min='0'></input>
          </div>
          <div className='kpostjobform-field'>
            <label className='kpostjobform-field-heading'>Why do you want to apply for this job?</label>
            <textArea className='kpostjobform-field-textarea' placeholder="Answer in a few words"></textArea>
          </div>
          <div className='kpostjobform-field'>
            <label className='kpostjobform-field-heading'>Upload your latest CV:</label>
            <input type="file" className='kpostjobform-field-input'></input>
          </div>
          <div className='kpostjobform-btns'>
            <button className='kpostjobform-postbtn'>Apply</button>
            <button className='kpostjobform-cancelbtn'>Cancel</button>
          </div>
          </div>
      </div>
    )
  }