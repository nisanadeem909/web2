import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Search.css';
import searchicon from './search_icon.png';
import { debounce } from 'lodash';

export default function Search() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [isInputSelected, setIsInputSelected] = useState(false); // Track whether the input field is selected or not
  const navigate = useNavigate();

  const openProfilenew=(username)=>{
   

    if (username == sessionStorage.getItem("sessionID"))
        {
            var path = "/" + sessionStorage.getItem("userType") + "/ownprofile";
            navigate(path);
            return;
        }

    //find user type
    var param = {"user":username};
    axios.post(`http://localhost:8000/getusertype`,param)
      .then(res => {
          if (res.data.type != "none")
          {
              var utype = sessionStorage.getItem("userType");
              var path = "/" + utype + "/";

              if (res.data.type == "user")
              {
                  path += "publicuserprofile";
              }
              else {
                  path += "publiccompanyprofile";
              }

             // alert(path);

              navigate(path, { state: res.data.user });
          }
          else 
            console.log("error");
      })
      .catch(error => alert(error));
  }

  useEffect(() => {
    if (searchQuery) {
      performSearch();
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  const performSearch = debounce(async () => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:8000/search/${searchQuery}`);
      setSearchResults(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, 300);

  const handleBlur = () => {
    setIsInputSelected(false);
  };

  const handleFocus = () => {
    setIsInputSelected(true);
  };

  return (
    <div className="search_container_k">
      <label id="search_title_k">Search:</label>
      <div className="search_inner_k">
        <input
          type="text"
          className="search_field_k"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onBlur={handleBlur}
          onFocus={handleFocus}
        />
        <br />
        <div className="search-nisa-w">
          {loading && <p className="nisa-se-ll">Loading...</p>}
          {searchResults.length > 0 && isInputSelected && (
            <div className="search_results_k">
              {searchResults.map((result) => (
                <button className="nisa-new-w" key={result.id} onMouseEnter={()=>{openProfilenew(result.username)}}>
                  {result.username || result.Designation}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
