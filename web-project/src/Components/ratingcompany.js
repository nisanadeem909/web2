import React, { useState } from 'react'

import './ratingcompany.css';
import RateCompanyModal from './RateCompanyModal'




function RatingCompany(props) {

    const [avgRating,setAvgRating] = useState(5);
    var totalRatings = 40;

    const updateRating=(newRating)=>{
        var newR = parseInt(newRating);
        var updated = (newR + avgRating*totalRatings)/(++totalRatings);
        setAvgRating(updated.toFixed(2));
    }

    var ratebtn = <RateCompanyModal addRating={updateRating}/> // if employee is viewing page (public)

    return (
        <div id="ratingcompany-box">
            <div className='ratingcompany-flexrow'>
                <label id="rating-title">Rating</label>
                {ratebtn}
            </div>
            <div className="star-rating">
                {[...Array(Math.floor(avgRating))].map((star) => {        
                    return (         
                    <span className="rating-star">&#9733;</span>        
                    );
                })}
                <label className="ratingcompany-rating">({avgRating})</label>
            </div>     
        
       </div>
    );
  }
  
  export default RatingCompany;
  