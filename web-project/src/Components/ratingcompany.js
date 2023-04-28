import React from 'react'

import './ratingcompany.css';


function RatingCompany() {
    return (
        <div id="ratingcompany-box">
            <label id="rating-title">Rating</label>
            <div className="star-rating">
                {[...Array(5)].map((star) => {        
                    return (         
                    <span className="rating-star">&#9733;</span>        
                    );
                })}
            </div>     
        
       </div>
    );
  }
  
  export default RatingCompany;
  