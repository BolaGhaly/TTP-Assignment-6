import React, { useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

function City_search() {
  const [cityZipCodes, setCityZipCodes] = useState([]);
  const [city, setCity] = useState(null);

  // call API
  const fetchCity = async () => {
    const response = await axios(
      `http://ctp-zip-api.herokuapp.com/city/${city}`
    );
    setCityZipCodes(response.data);
  };

  function handleChange(value) {
    setCity(value);
  }

  const submitForm = async (e) => {
    e.preventDefault();
    fetchCity();
  };

  return (
    <div className="overflow-hidden">
      <div className="h1-container ">
        <h1>Search By City</h1>
        <Link to="/">
          <button className="home-button ">Go Back to Home Page</button>
        </Link>
      </div>
      <div className="city-div">
        <form onSubmit={submitForm}>
          <label htmlFor="city">City: </label>
          <input
            type="text"
            id="city"
            onChange={(event) => handleChange(event.target.value.toUpperCase())}
          />
        </form>
        <p>You entered: {city}</p>
      </div>
      <div className="all_cities_container pt-3 row d-flex justify-content-center align-items-center mb-4">
        {cityZipCodes.map((e) => {
          return (
            <p className="cities-item my-2 mx-4 d-flex justify-content-center align-items-center">
              {e}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default City_search;
