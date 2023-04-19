import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CompanyHistory from './Components/companyhistory'
import RatingCompany from './Components/ratingcompany'
import WorksHere from './Components/workshere'
import ContactCompany from './Components/contactcompany';
import OpenVacancies from './Components/openvacancies';
import OpenVacanciesEditable from './Components/openvacancies-editable';
import ContactCompanyEditable from './Components/contactcompany-editable';
import CompanyHistoryEditable from './Components/companyhistory-editable';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <App/>
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
