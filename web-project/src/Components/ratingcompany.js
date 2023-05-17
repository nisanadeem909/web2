import React, { useEffect, useState } from 'react'

import './ratingcompany.css';
import RateCompanyModal from './RateCompanyModal'
import axios from 'axios';




function RatingCompany(props) {

    const [ratingCon, setRatingCon] = useState(<div className="star-rating"><label className="ratingcompany-rating">Loading</label></div>);
    const [avgRating,setAvgRating] = useState(0);
    const [isEmp,setIsEmp] = useState(false);
    const [rateBtn, setBtn] = useState(<></>);


    useEffect(() => {
        setRating();
        if (props.type == "public")
        {
            var flag, error = false;
            const param = {"username":sessionStorage.getItem("sessionID"),"company":props.company.username};
            axios.post("http://localhost:8000/checkifemployee",param).then((response) => {
            //alert(response.data);
                flag = response.data.flag;
                //alert(flag);
                if (response.data.status != "error")
                    if (flag===true) // check if employee is viewing page (public)
                        setBtn(<RateCompanyModal addRating={updateRating} currRating={getCurrentRating}/>);
            })
            .catch(function (error) {
                alert("Axios Error:" + error);
            });
        }
    }, []);

    const setRating=()=>{
        var user;
        if (props.type == "public")
            user = props.company.username;
        else
            user = sessionStorage.getItem("sessionID");
        const param = {"user":user}
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
    }

    const addRating=(newRating)=>{
        const param = {"username":sessionStorage.getItem("sessionID"),"company":props.company.username,"rating":newRating};
        axios.post("http://localhost:8000/addrating",param).then((response) => {
            //alert(response.data); 
            setRating();
            
        })
        .catch(function (error) {
            alert(error);
        });
    }

    const updateRating=async(newRating)=>{
        await addRating(newRating);
        /*var newR = parseInt(newRating);
        var updated = (newR + avgRating*totalRatings)/(++totalRatings);
        setAvgRating(updated.toFixed(2));*/
    }

    const getCurrentRating=async()=>{
        var r = 0;
        const param = {"username":sessionStorage.getItem("sessionID"),"company":props.company.username};
        await axios.post("http://localhost:8000/getspecificuserrating",param).then((response) => {
            //alert(response.data); 
            //setRating();
            r = response.data.rating;
        })
        .catch(function (error) {
            alert(error);
        });
        
        return r;
    }

    /*if (props.type == "public" && isEmp===true) // check if employee is viewing page (public)
        ratebtn = <RateCompanyModal addRating={updateRating} currRating={getCurrentRating}/> */

    return (
        <div id="ratingcompany-box">
            <div className='ratingcompany-flexrow'>
                <label id="rating-title">Rating</label>
                {rateBtn}
            </div>
            {ratingCon}  
        
       </div>
    );
  }
  
  export default RatingCompany;
  