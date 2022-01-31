import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Zip_search() {
  const [zipCodeInfo, setZipCodeInfo] = useState([]);
  const [zipCode, setZipCode] = useState(null);

  // call API
  const fetchZipCode = async () => {
    const response = await axios(
      `http://ctp-zip-api.herokuapp.com/zip/${zipCode}`
    );
    setZipCodeInfo(response.data);
  };

  function handleChange(value) {
    setZipCode(value);
  }

  const submitForm = async (e) => {
    e.preventDefault();
    fetchZipCode();
  };

  return (
    <div>
      <div className="h1-container">
        <h1>Search By Zip Code</h1>
        <Link to="/">
          <button className="home-button">Go Back to Home Page</button>
        </Link>
      </div>
      <div className="zip-div">
        <form onSubmit={submitForm}>
          <label htmlFor="zipCode">Zip Code: </label>
          <input
            type="number"
            id="zipCode"
            placeholder="Ex: 10016"
            onChange={(event) => handleChange(event.target.value)}
          />
        </form>
        <p>You entered: {zipCode}</p>
      </div>
      <div className="zipCodeInfo_container row d-flex justify-content-center">
        {zipCodeInfo.map((element) => {
          return (
            <div className="card px-0">
              <h5 className="card-title text-center">{element.LocationText}</h5>
              <p className="card-text">
                <ul>
                  <li>
                    City:
                    <br />
                    {element.City}
                  </li>
                  <li>
                    State:
                    <br />
                    {element.State}
                  </li>
                  <li>
                    Location:
                    <br />({element.Lat}, {element.Long})
                  </li>
                  <li>
                    Estimated Population: <br />
                    {element.EstimatedPopulation}
                  </li>
                  <li>
                    Total Wages: <br />
                    {element.TotalWages}
                  </li>
                </ul>
              </p>
            </div>
          );
        })}
        {/* <p>{zipCodeInfo[0].LocationText}</p> */}
        {console.log(zipCodeInfo)}
        {/* {zipCodeInfo.map((e) => {
          // console.log(e);
          // return <p className="zip-item">{e}</p>;
        })} */}
      </div>
    </div>
  );
}

export default Zip_search;
