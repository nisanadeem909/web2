import React from 'react'

import './ratingcompany.css';


function RatingCompany() {
    return (
        <div id="ratingcompany-box">
            Rating
            <div className="star-rating">
                {[...Array(5)].map((star) => {        
                    return (         
                    <span className="star">&#9733;</span>        
                    );
                })}
            </div>     
        
       </div>
    );
  }
  
  export default RatingCompany;
  