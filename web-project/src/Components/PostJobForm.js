import React,{useState,useRef} from 'react' 
import './PostJobPage.css';
import Select from 'react-select'

export default function PostJob() {

    var companyDetails = {'Location':{'country': 'Pakistan', 'city':'Lahore'},'name':'Devsinc','rating':'4.5'};
   
    const [degreeList,setDegreeList] = useState([{"label": "Bachelors", "value": "BS"}, {"label": "Masters", "value": "MS"},{"label": "A Level", "value": "AL"},{"label": "PhD", "value": "PHD"},{"label": "O Level", "value": "OL"}]);
    const [majorList,setMajorList] = useState([{"label": "Computer Science", "value": "CS"},{"label": "Software Engineering", "value": "SE"},{"label": "Mathematics", "value": "MT"},{"label": "Medical Science", "value": "MED"}]);

    const [selectedDegree,setSelectedDegree] = useState(null);
    const [selectedMajor,setSelectedMajor] = useState(null);

    return (
      <div className='kpostjobform-container'>
          <div className='kpostjobform-header'>
            <label>Post Job</label>
          </div>
          <div className='kpostjobform-form'>
          <div className='kpostjobform-field'>
            <label className='kpostjobform-field-heading'>Company:</label>
            <label className='kpostjobform-field-lbl'>{companyDetails.name}</label>
          </div>
          <div className='kpostjobform-field'>
            <label className='kpostjobform-field-heading'>Designation:</label>
            <input type="text" className='kpostjobform-field-input' placeholder='Job Position'></input>
          </div>
          <div className='kpostjobform-field'>
            <label className='kpostjobform-field-heading'>Salary:</label>
            <input type="number" className='kpostjobform-field-input' placeholder='Estimated Salary' min='0'></input>
          </div>
          <div className='kpostjobform-field'>
            <label className='kpostjobform-field-heading'>Weekly Working Hours:</label>
            <input type="number" className='kpostjobform-field-input' placeholder='Minimum Weekly Working Hours' min='1'></input>
          </div>
          <div className='kpostjobform-field'>
            <label className='kpostjobform-field-heading'>Degree Required:</label>
            <Select options={degreeList}
                placeholder="Highest Degree Required for Job"
                className='kpostjobform-field-dropdown'
                onChange={(choice) => setSelectedDegree(choice)}
                />
          </div>
          <div className='kpostjobform-field'>
            <label className='kpostjobform-field-heading'>Major Required:</label>
            <Select options={majorList}
                placeholder="Preferred/Required Major for Job"
                className='kpostjobform-field-dropdown'
                onChange={(choice) => setSelectedMajor(choice)}
                />
          </div>
          <div className='kpostjobform-field'>
            <label className='kpostjobform-field-heading'>Experience Required:</label>
            <input type="number" className='kpostjobform-field-input' placeholder='Years of Experience Required' min='0'></input>
          </div>
          <div className='kpostjobform-field'>
            <label className='kpostjobform-field-heading'>Yearly Paid Leaves:</label>
            <input type="number" className='kpostjobform-field-input' placeholder='Number of Paid Leaves Available Yearly' min='1'></input>
          </div>
          <div className='kpostjobform-field'>
            <label className='kpostjobform-field-heading'>Job Description:</label>
            <textArea className='kpostjobform-field-textarea' placeholder="Describe the job in a few words"></textArea>
          </div>
          <div className='kpostjobform-btns'>
            <button className='kpostjobform-postbtn'>Post</button>
            <button className='kpostjobform-cancelbtn'>Cancel</button>
          </div>
          </div>
      </div>
    )
  }