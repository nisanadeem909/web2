import React,{useState,useRef, useEffect} from 'react' 
import './PostJobPage.css';
import Select from 'react-select'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export default function PostJob(props) {

    var name = "Company Name";

    const navigate = useNavigate();

    if (props.company)
      name = props.company.name;

    const [degreeList,setDegreeList] = useState([{"label": "Bachelors", "value": "BS"}, {"label": "Masters", "value": "MS"},{"label": "A Level", "value": "AL"},{"label": "PhD", "value": "PHD"},{"label": "O Level", "value": "OL"}]);
    const [majorList,setMajorList] = useState([{"label": "Computer Science", "value": "CS"},{"label": "Software Engineering", "value": "SE"},{"label": "Mathematics", "value": "MT"},{"label": "Medical Science", "value": "MED"}]);

    const inputDesignation = useRef(null);
    const inputSalary = useRef(null);
    const inputDescription = useRef(null);
    const inputWorkHours = useRef(null);
    const inputExp = useRef(null);
    const inputPaidLeaves = useRef(null);

    const [selectedDegree,setSelectedDegree] = useState(null);
    const [selectedMajor,setSelectedMajor] = useState(null);

    const post=()=>{

      var pos = inputDesignation.current.value;
      var desc = inputDescription.current.value;
      var sal = inputSalary.current.value;
      var wh = inputWorkHours.current.value;
      var pl = inputPaidLeaves.current.value;
      var exp = inputExp.current.value;

      if (!desc || !pos || !sal || !wh || !pl || !exp || desc.trim().length === 0 || pos.trim().length === 0 || !selectedDegree || !selectedMajor)
      {
        alert("Please fill all fields with valid data!");
        return;
      }

      if (sal < 1)
      {
        alert("Salary must be a positive number!")
        return;
      }

      if (exp < 0)
      {
        alert("Experience required cannot be negative!")
        return;
      }

      if (wh < 1)
      {
        alert("Working hours must be a positive number!")
        return;
      }

      if (pl < 0)
      {
        alert("Paid Leaves cannot be negative!")
        return;
      }

      var newJob = {"degree": selectedDegree, "major": selectedMajor,"companyname":props.company.name,"companyuser": props.company.username, "leaves": pl, "salary": sal, "hours": wh, "exp":exp,"pos":pos,"desc":desc}

      axios.post("http://localhost:8000/postjob",newJob).then((response) => {
        var msg = response.data;
        if (msg.status === "success")
        {
          navigate("/company/vacancies");
        }
        else
        {
          alert("Error: " + msg.status);
          return;
        }
    })
    .catch(function (error) {
        alert(error);
    });

    }

    return (
      <div className='kpostjobform-container'>
          <div className='kpostjobform-header'>
            <label>Post Job</label>
          </div>
          <div className='kpostjobform-form'>
          <div className='kpostjobform-field'>
            <label className='kpostjobform-field-heading'>Company:</label>
            <label className='kpostjobform-field-lbl'>{name}</label>
          </div>
          <div className='kpostjobform-field'>
            <label className='kpostjobform-field-heading'>Designation:</label>
            <input type="text" ref={inputDesignation} className='kpostjobform-field-input' placeholder='Job Position'></input>
          </div>
          <div className='kpostjobform-field'>
            <label className='kpostjobform-field-heading'>Salary:</label>
            <input type="number" ref={inputSalary} className='kpostjobform-field-input' placeholder='Estimated Salary' min='0'></input>
          </div>
          <div className='kpostjobform-field'>
            <label className='kpostjobform-field-heading'>Weekly Working Hours:</label>
            <input type="number" ref={inputWorkHours} className='kpostjobform-field-input' placeholder='Minimum Weekly Working Hours' min='1'></input>
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
            <input type="number" ref={inputExp} className='kpostjobform-field-input' placeholder='Years of Experience Required' min='0'></input>
          </div>
          <div className='kpostjobform-field'>
            <label className='kpostjobform-field-heading'>Yearly Paid Leaves:</label>
            <input type="number" ref={inputPaidLeaves} className='kpostjobform-field-input' placeholder='Number of Paid Leaves Available Yearly' min='0'></input>
          </div>
          <div className='kpostjobform-field'>
            <label className='kpostjobform-field-heading'>Job Description:</label>
            <textArea className='kpostjobform-field-textarea' ref={inputDescription} placeholder="Describe the job in a few words"></textArea>
          </div>
          <div className='kpostjobform-btns'>
            <button className='kpostjobform-postbtn' onClick={post}>Post</button>
            <button className='kpostjobform-cancelbtn' onClick={()=>navigate("/company")}>Cancel</button>
          </div>
          </div>
      </div>
    )
  }