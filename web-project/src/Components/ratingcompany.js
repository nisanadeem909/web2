import React, { useEffect, useState } from 'react'

import './ratingcompany.css';
import RateCompanyModal from './RateCompanyModal'
import axios from 'axios';




function RatingCompany(props) {

    const [ratingCon, setRatingCon] = useState(<div className="star-rating"><label className="ratingcompany-rating">Loading</label></div>);
    
    useEffect(() => {
        const sessionID = sessionStorage.getItem('sessionID');
        const param = {"user":sessionID}

        //post request to server to get profile details 
        axios.post("http://localhost:8000/getavgrating",param).then((response) => {
            //alert(response.data);
            console.log(response.data.rating)
            if (response.data.rating == "none")
                setRatingCon(<div className="star-rating">
                            {[...Array(Math.floor(0))].map((star) => {        
                                return (         
                                <span className="rating-star">&#9733;</span>        
                                );
                            })}
                            <label className="ratingcompany-rating">No ratings yet.</label>
                        </div>   );
            else if (response.data.rating == "error")
                alert("error");
            else {
                setRatingCon(<div className="star-rating">
                            {[...Array(Math.floor(response.data.rating))].map((star) => {        
                                return (         
                                <span className="rating-star">&#9733;</span>        
                                );
                            })}
                            <label className="ratingcompany-rating">({response.data.rating})</label>
                        </div>   )
            }
            //alert('hi');
        })
        .catch(function (error) {
            alert(error);
        });
    }, []);

    const [avgRating,setAvgRating] = useState(5);
    var totalRatings = 40;

    const updateRating=(newRating)=>{
        var newR = parseInt(newRating);
        var updated = (newR + avgRating*totalRatings)/(++totalRatings);
        setAvgRating(updated.toFixed(2));
    }

    var ratebtn = <></>;

    if (props.type == "public") // check if employee is viewing page (public)
        ratebtn = <RateCompanyModal addRating={updateRating}/> 

    return (
        <div id="ratingcompany-box">
            <div className='ratingcompany-flexrow'>
                <label id="rating-title">Rating</label>
                {ratebtn}
            </div>
            {ratingCon}  
        
       </div>
    );
  }
  
  export default RatingCompany;
  