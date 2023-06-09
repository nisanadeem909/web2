import React, { useRef, useState } from 'react'
import Select from 'react-select'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import './companyhistory'
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
  var changed = false;

  const handleOpen = () =>{
    changed = false;
    setOpen(true);
  }
  //const handleClose = () => setOpen(false);

  const newstartYear = useRef(props.selectedItem.startYear);
  const newendYear = useRef(props.selectedItem.endYear);
  //const newYears = useRef(props.selectedItem.years);
  const newWebsite = useRef(props.selectedItem.website);
  const newCity = useRef(props.selectedItem.city);
  const newCountry = useRef(props.selectedItem.country);
  const newText = useRef(props.selectedItem.text);

  const [countryList,setCountryList] = useState([{"label": "Pakistan", "value" : "PK"}, {"label": "USA", "value" : "US"}, {"label": "UK", "value" : "UK"}, {"label": "Australia", "value" : "AU"}, {"label": "India", "value" : "IN"}, {"label": "Canada", "value" : "CA"}]);
  const [cityList,setCityList] = useState([{"label": "Lahore", "value" : "LHR", 'country':'PK'}, {"label": "Islamabad", "value" : "ISL", 'country':'PK'},{"label": "Karachi", "value" : "KHI", 'country':'PK'},{"label": "Mumbai", "value" : "MMB", 'country':'IN'},{"label": "New Delhi", "value" : "DLH", 'country':'IN'},{"label": "Toronto", "value" : "TOR", 'country':'CA'},{"label": "New York", "value" : "NYC", 'country':'US'},{"label": "Los Angeles", "value" : "LA", 'country':'US'},{"label": "Melbourne", "value" : "MEL", 'country':'AU'},{"label": "Sydney", "value" : "SYD", 'country':'AU'},{"label": "London", "value" : "LDN", 'country':'UK'}]);
  

  var tempCountry = countryList.filter((obj)=>obj.label === props.selectedItem.country)[0];
  var tempCity = cityList.filter((obj)=>obj.label === props.selectedItem.city)[0];
  var speccities = cityList.filter((obj)=>obj.country == tempCountry.value);

  const [selectedCountry,setSelectedCountry] = useState({"label": tempCountry.label,"value": tempCountry.value});
  const [selectedCity,setSelectedCity] = useState({"label": tempCity.label,"value": tempCity.value, "country": tempCity.country});
  const [specificCityList,setSpecificCityList] = useState(speccities);


  const [statestartYear,setStartYear] = useState(props.selectedItem.startYear);
  const [stateEndYear,setEndYear] = useState(props.selectedItem.endYear);
  const [stateWebsite,setWebsite] = useState(props.selectedItem.website);
 // const [stateText,setText] = useState(props.selectedItem.aboutUsText);

  const handleClose = () => {
    //setStates({"label": selectedCountry.label,"value": selectedCountry.value});
    //setSelectedCity({"label": selectedCity.label,"value": selectedCity.value, "country": selectedCity.country});

    if (!changed) 
    {
        setStartYear(props.selectedItem.startYear);
        setEndYear(props.selectedItem.endYear);
        setWebsite(props.selectedItem.website);
        //setText(props.selectedItem.aboutUsText);
        setStates({"label": tempCountry.label,"value": tempCountry.value});
        setSelectedCity({"label": tempCity.label,"value": tempCity.value, "country": tempCity.country});
    }


    setOpen(false);
  }

  const editAboutUs=()=>{
        changed = true;
        //alert(selectedCity.label);
        var startYear = newstartYear.current.value;
        var endYear = newendYear.current.value;
        var webs = newWebsite.current.value;
        var countr = selectedCountry.label;
        var txt = newText.current.value;
        var years;

        if (!selectedCity || !startYear || !endYear || !txt || !webs)
        {
            alert("Please select/enter all fields!");
            return;
        }
        
        var cit = selectedCity.label;

        var currYear = (new Date()).getFullYear();

        if (startYear > currYear)
        {
            alert("Start Year cannot be greater than Present Year!");
            return;
        }
        
        if (endYear == 'present')
        {
            var totalYears = parseInt(currYear - startYear);
            years = totalYears;
        }
        else 
        {
            if (startYear > endYear)
            {
                alert("Start Year cannot be greater than End Year!");
                return;
            }

            if (endYear > currYear)
            {
                alert("Start Year cannot be greater than Present Year!");
                return;
            }

            var totalYears = parseInt(endYear - startYear);
            years = totalYears;
        }

        

        var newAboutUs = {'website': webs,'text': txt, 'years': years, 'startYear': startYear, 'endYear': endYear, 'city': cit, 'country':countr};

        props.changeAboutUs(newAboutUs);
        handleClose();
  }

  const setStates=(choice)=>{
    setSelectedCountry(choice);
    var cities  = [...cityList];
    cities = cities.filter((obj)=>obj.country == choice.value);
    setSpecificCityList(cities);
    setSelectedCity(null);
    //alert(cities[0].label);
  }

  return (
    <div>
      <button id="companyhistory-edit-btn" onClick={handleOpen}>Edit</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="kmodal_addskill"
      >
        <Box sx={style}>
            <div className='kmodal_header'>
                <h4 id="kmodal_addskill" className='kmodal_title'>Edit About Us</h4>
                <button className="kmodal_crossBtn" onClick={handleClose}>X</button>
            </div>
            <hr className='kmodal_hr'/>
          <div className='kmodal_educ_container'>
            <div className='kmodal_field'>
              <label className='kmodal_large_text'>Country: </label>
              <Select options={countryList}
                placeholder="Country where company is located"
                className='kmodal_dropdown'
                onChange={(choice) => setStates(choice)}
                value={selectedCountry}/>
            </div>
            <div className='kmodal_field'>
              <label className='kmodal_large_text'>City: </label>
              <Select options={specificCityList}
                placeholder="City where company is located"
                className='kmodal_dropdown'
                onChange={(choice) => setSelectedCity(choice)}
                value={selectedCity}/>
            </div>
            <div className='kmodal_field'>
              <label className='kmodal_large_text'>Website: </label>
              <input className='kmodal_date_input' type="text" ref={newWebsite} value={stateWebsite} placeholder="Company Website" onChange={()=>setWebsite(newWebsite.current.value)}></input>
            </div>
            <div className='kmodal_field'>
              <label className='kmodal_large_text'>Start Year: </label>
              <input className='kmodal_date_input' type="number" ref={newstartYear} min="1900" max="3000" value={statestartYear} placeholder="Year company was started" onChange={()=>setStartYear(newstartYear.current.value)}></input>
            </div>
            <div className='kmodal_field'>
              <label className='kmodal_large_text'>End Year: </label>
              <input className='kmodal_date_input' type="text" ref={newendYear} value={stateEndYear} placeholder="Ending year" onChange={()=>setEndYear(newendYear.current.value)}></input>
            </div>
            <label className='kmodal_input_label_small'>Write 'present' if present.</label>
            <div className='kmodal_field'>
              <label className='kmodal_large_text'>Text: </label>
              <textArea className='kmodal_textarea' ref={newText} placeholder="Description">{props.selectedItem.text}</textArea>
            </div>
            <button className='kmodal_buttons kmodal_center_btn' onClick={editAboutUs}>Confirm Changes</button>
        </div>
        </Box>
      </Modal>
    </div>
  );
}