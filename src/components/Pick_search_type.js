import React from 'react'
import { Link } from "react-router-dom";

function Pick_search_type() {
  return (
    <div>
      <div className="h1-container">
        <h1>Do you want to search by...?</h1>
      </div>
      <div className="buttons-container">
          <Link to="/city-search">
            <button type="button">Search By City</button>
          </Link>
          <span>OR</span>
          <Link to="/zip-search">
            <button type="button">Search By Zip Code</button>
          </Link>
      </div>
    </div>
  );
}

export default Pick_search_type
