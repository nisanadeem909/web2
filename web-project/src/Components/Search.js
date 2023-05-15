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
                <a className="nisa-w" key={result.id} href={result.link}>
                  {result.username || result.Designation}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
