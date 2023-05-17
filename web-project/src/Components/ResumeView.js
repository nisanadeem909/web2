import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Document, Page, pdfjs } from 'react-pdf';
import './ResumeView.css';
import Footer from './Footer'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function CVView() {
  const location = useLocation();
  const propsData = location.state;
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [error, setError] = useState(false);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const onError = (error) => {
    setError(true);
  };

  const renderContent = () => {
    if (error) {
      return <div>Error loading PDF</div>;
    }

    return (
      <div className="cv-page-content">
        <div className="cv-data">
          {/* Render your CV data here */}
        </div>
        <div className="cv-pagination">
          
        </div>
      </div>
    );
  };

  return (
    <div>
    <div className="cv-view-container">
      <Document
        file={`http://localhost:8000/resumes/${propsData}`}
        onLoadSuccess={onDocumentLoadSuccess}
        onError={onError}
      >
        <Page pageNumber={pageNumber} renderTextLayer={false}>
          {renderContent()}
        </Page>
      </Document>

     
    </div>
    <Footer></Footer>
    </div>
  );
}
