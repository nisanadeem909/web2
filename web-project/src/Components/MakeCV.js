import React from 'react'
import './MakeCV.css';
export default function MakeCV() {
  return (
    <div>
      <div className='cv-container'>
        <div className='upperCV'>
        <strong>Create a Professional CV </strong>
        <p>Fill in tha blanks and download your CV!</p>
        </div>
        <br/>
        <button className='buttonCV'>Make CV</button>
      </div>
    </div>
  )
}
