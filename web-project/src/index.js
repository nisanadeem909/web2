import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { PDFViewer } from '@react-pdf/renderer';
import CVTemplateOne from './Components/CVTemplateOne';
import Post from './Components/Post';
import CVViewer from './Components/CVViewer';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  /*<React.StrictMode>
    <PDFViewer height = {window.innerHeight} width = "100%">
      <CVTemplateOne/>

    </PDFViewer>
    

  </React.StrictMode>*/


  <React.StrictMode>
   <App></App>
  </React.StrictMode>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();