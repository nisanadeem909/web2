import React,{useState,useRef, useEffect} from 'react' 
import './PostJobPage.css';
import Select from 'react-select'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function ApplyJob(props) {

    const [name,setName] = useState("Loading"); // name of logged in user
    const [job,setJob] = useState(null);

    const [filledFields,setFilled] = useState(<><div className='kpostjobform-field'>
    <label className='kpostjobform-field-heading'>Full Name:</label>
    <label className='kpostjobform-field-lbl'>{name}</label>
  </div>
  <div className='kpostjobform-field'>
    <label className='kpostjobform-field-heading'>Applying for:</label>
    <label className='kpostjobform-field-lbl'>Loading</label>
  </div></>)

    //var jobDetails = {'position':'Internship', 'company': 'Devsinc'};
    
    const navigate = useNavigate();
   
    const [schoolList,setSchoolList] = useState([]);
    const [degreeList,setDegreeList] = useState([{"label": "Bachelors", "value": "BS"}, {"label": "Masters", "value": "MS"},{"label": "A Level", "value": "AL"},{"label": "PhD", "value": "PHD"},{"label": "O Level", "value": "OL"}]);
    const [majorList,setMajorList] = useState([{"label": "Computer Science", "value": "CS"},{"label": "Software Engineering", "value": "SE"},{"label": "Mathematics", "value": "MT"},{"label": "Medical Science", "value": "MED"}]);

    const [selectedSchool,setSelectedSchool] = useState(null);
    const [selectedDegree,setSelectedDegree] = useState(null);
    const [selectedMajor,setSelectedMajor] = useState(null);

    const [resume,setResume] = useState(null);

    const DOB = useRef(null);
    const email = useRef(null);
    const ans = useRef(null);
    const phone = useRef(null);
    const exp = useRef(null);

    useEffect(() => {
      
      var uname = sessionStorage.getItem("sessionID");

      axios.post("http://localhost:8000/getschooldropdownlist").then((response) => {
          //alert(response.data);
          setSchoolList(response.data);
          //alert('hi');
      })
      .catch(function (error) {
          alert("Axios Error:" + error);
      });

      var param = {"user": uname};
      axios.post("http://localhost:8000/getuserprofiledetails",param).then((response) => {
            //alert(response.data);
            setName(response.data.user.name);
            //alert('hi');
        })
        .catch(function (error) {
            alert(error);
        });

        if (props.job)
        {
          setJob(props.job);
        }
    }, []);

    useEffect(() => {
        if (job && name)
        {
            setFilled(<><div className='kpostjobform-field'>
            <label className='kpostjobform-field-heading'>Full Name:</label>
            <label className='kpostjobform-field-lbl'>{name}</label>
          </div>
          <div className='kpostjobform-field'>
            <label className='kpostjobform-field-heading'>Applying for:</label>
            <label className='kpostjobform-field-lbl'>{job.Designation} at {job.CompanyName}</label>
          </div></>);
        }
    }, [job,name]);

    const HandleUpload=(t)=>{
      //console.log(t.handle.files);
      //alert("resume set");
      setResume(t.target.files[0]);
    }

    const handleApply=()=>{
        if (!exp.current.value || !DOB.current.value || !email.current.value  || !ans.current.value  || !phone.current.value  || !resume || !selectedDegree || !selectedMajor || !selectedSchool )
        {
            alert("Please fill all fields!");
            return;
        }

        var uname = sessionStorage.getItem("sessionID");
        
        var param = {"username": uname,"name":name,"jobid":job.JobId, "companyusername":job.CompanyUsername, "dob":DOB.current.value,"email":email.current.value,"phone":phone.current.value,"answer":ans.current.value,"degree":selectedDegree.label,"school":selectedSchool.value,"major":selectedMajor.label,"exp":exp.current.value};
        axios.post("http://localhost:8000/postjobapplication",param).then((response) => {
            //alert(response.data);
            //alert(response.data.id)
            if (response.data.id != -1)
            {
              var fdata = new FormData();
              var appID = response.data.id;
              fdata.append("Resume", resume);
              fdata.append("AppID", response.data.id);
              axios.post('http://localhost:8000/uploadresume',fdata)
              .then(res => {
                //alert("Respnse" + JSON.stringify(res.data))
                navigate("applied", {state:{appID:appID,jobID:job.JobId}});
              })
              .catch(err=>{alert("ERROR IN AXIOS : "+err)});
            }
        })
        .catch(function (error) {
            alert(error);
        });


    }

    return (
      <div className='kpostjobform-container'>
          <div className='kpostjobform-header'>
            <label>Apply for Job</label>
          </div>
          <div className='kpostjobform-form'>
          {filledFields}
          <div className='kpostjobform-field'>
            <label className='kpostjobform-field-heading'>Date of Birth:</label>
            <input type="date" className='kpostjobform-field-input' ref={DOB}></input>
          </div>
          <div className='kpostjobform-field'>
            <label className='kpostjobform-field-heading'>Email:</label>
            <input type="email" className='kpostjobform-field-input' ref={email} placeholder='Email for Contact'></input>
          </div>
          <div className='kpostjobform-field'>
            <label className='kpostjobform-field-heading'>Contact Number:</label>
            <input type="number" className='kpostjobform-field-input' ref={phone} placeholder='Phone Number'></input>
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
            <label className='kpostjobform-field-heading'>School of Last Degree:</label>
              <Select options={schoolList}
                    placeholder="School/University"
                    className='kpostjobform-field-dropdown'
                    onChange={(choice) => setSelectedSchool(choice)}/>
          </div>
          <div className='kpostjobform-field'>
            <label className='kpostjobform-field-heading'>Years of Experience:</label>
            <input type="number" className='kpostjobform-field-input' ref={exp} placeholder='Experience in related fields' min='0'></input>
          </div>
          <div className='kpostjobform-field'>
            <label className='kpostjobform-field-heading'>Why do you want to apply for this job?</label>
            <textArea className='kpostjobform-field-textarea' ref={ans} placeholder="Answer in a few words"></textArea>
          </div>
          <div className='kpostjobform-field'>
            <label className='kpostjobform-field-heading'>Upload your latest CV:</label>
            <input type="file" accept="application/pdf" className='kpostjobform-field-input' onChange={HandleUpload}></input>
          </div>
          <div className='kpostjobform-btns'>
            <button className='kpostjobform-postbtn' onClick={handleApply}>Apply</button>
            <button className='kpostjobform-cancelbtn' onClick={()=>navigate(-1)}>Cancel</button>
          </div>
          </div>
      </div>
    )
  }