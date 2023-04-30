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
  const handleOpen = () => setOpen(true);
  //const handleClose = () => setOpen(false);

  const newstartYear = useRef(props.selectedItem.startYear);
  const newendYear = useRef(props.selectedItem.endYear);
  const newYears = useRef(props.selectedItem.years);
  const newWebsite = useRef(props.selectedItem.website);
  const newCity = useRef(props.selectedItem.Location.city);
  const newCountry = useRef(props.selectedItem.Location.country);
  const newText = useRef(props.selectedItem.aboutUsText);

  const [countryList,setCountryList] = useState([{"label": "Pakistan", "value" : "PK"}, {"label": "USA", "value" : "US"}, {"label": "UK", "value" : "UK"}, {"label": "Australia", "value" : "AU"}, {"label": "India", "value" : "IN"}, {"label": "Canada", "value" : "CA"}]);
  const [cityList,setCityList] = useState([{"label": "Lahore", "value" : "LHR", 'country':'PK'}, {"label": "Islamabad", "value" : "ISL", 'country':'PK'},{"label": "Karachi", "value" : "KHI", 'country':'PK'},{"label": "Mumbai", "value" : "MMB", 'country':'IN'},{"label": "New Delhi", "value" : "DLH", 'country':'IN'},{"label": "Toronto", "value" : "TOR", 'country':'CA'},{"label": "New York", "value" : "NYC", 'country':'US'},{"label": "Los Angeles", "value" : "LA", 'country':'US'},{"label": "Melbourne", "value" : "MEL", 'country':'AU'},{"label": "Sydney", "value" : "SYD", 'country':'AU'},{"label": "London", "value" : "LDN", 'country':'UK'}]);
  

  var tempCountry = countryList.filter((obj)=>obj.label === props.selectedItem.Location.country)[0];
  var tempCity = cityList.filter((obj)=>obj.label === props.selectedItem.Location.city)[0];
  var speccities = cityList.filter((obj)=>obj.country == tempCountry.value);

  const [selectedCountry,setSelectedCountry] = useState({"label": tempCountry.label,"value": tempCountry.value});
  const [selectedCity,setSelectedCity] = useState({"label": tempCity.label,"value": tempCity.value, "country": tempCity.country});
  const [specificCityList,setSpecificCityList] = useState(speccities);

  const handleClose = () => {
    setStates({"label": tempCountry.label,"value": tempCountry.value});
    setSelectedCity({"label": tempCity.label,"value": tempCity.value, "country": tempCity.country});
    setOpen(false);
  }

  const editAboutUs=()=>{
        //alert(selectedCity.label);
        var startYear = newstartYear.current.value;
        var endYear = newendYear.current.value;
        var webs = newWebsite.current.value;
        var countr = newCountry.current.value;
        var cit = newCity.current.value;
        var txt = newText.current.value;
        var years;

        if (!selectedCity)
        {
            alert("Please select a city!");
            return;
        }

        if (!startYear)
          startYear = props.selectedItem.startYear;

        if (!endYear)
            endYear = props.selectedItem.endYear;

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

            var totalYears = parseInt(endYear - startYear);
            years = totalYears;
        }

        if (!countr)
            countr = props.selectedItem.Location.country;

        if (!cit)
            cit = props.selectedItem.Location.city;

        if (!txt)
            txt = props.selectedItem.aboutUsText;

        if (!webs)
            webs = props.selectedItem.website;

        

        var newAboutUs = {'website': webs,'aboutUsText': txt, 'years': years, 'startYear': startYear, 'endYear': endYear, 'Location': {'city': cit, 'country':countr}};

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
              <input className='kmodal_date_input' type="text" ref={newWebsite} placeholder={props.selectedItem.website}></input>
            </div>
            <div className='kmodal_field'>
              <label className='kmodal_large_text'>Start Year: </label>
              <input className='kmodal_date_input' type="number" ref={newstartYear} min="1900" max="3000" placeholder={props.selectedItem.startYear}></input>
            </div>
            <div className='kmodal_field'>
              <label className='kmodal_large_text'>End Year: </label>
              <input className='kmodal_date_input' type="number" ref={newendYear} min="1900" max="3000" placeholder={props.selectedItem.endYear}></input>
            </div>
            <label className='kmodal_input_label_small'>Write 'present' if present.</label>
            <div className='kmodal_field'>
              <label className='kmodal_large_text'>Text: </label>
              <textArea className='kmodal_textarea' ref={newText} placeholder={props.selectedItem.aboutUsText}/>
            </div>
            <button className='kmodal_buttons kmodal_center_btn' onClick={editAboutUs}>Confirm Changes</button>
        </div>
        </Box>
      </Modal>
    </div>
  );
}