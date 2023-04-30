import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CVViewer from './Components/CVViewer';
import { PDFViewer } from '@react-pdf/renderer';
import Login from './Components/signup';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   {/* <PDFViewer  height={window.innerHeight} width="100%">
    <CVViewer/>
</PDFViewer>
*/}
  <App />
    {/*<Post/>*/}

  </React.StrictMode>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
