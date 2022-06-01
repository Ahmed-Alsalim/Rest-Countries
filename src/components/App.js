import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import CountriesTable from "./CountriesTable";

function App() {
  const [countriesData, setCountriesData] = useState([]);
  const [countries, setCountries] = useState([]);

  async function fetchData() {
    try {
      const res = await axios.get("https://restcountries.com/v2/all");
      setCountriesData(res.data);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setCountries(countriesData);
  }, [countriesData]);

  const handleFilterChange = (data) => {
    if (data == "") {
      setCountries(countriesData);
    } else {
      setCountries(
        countriesData.filter(
          (country) =>
            // check if there is capital then check if it includes the search term
            country.capital &&
            country.capital.toLowerCase().includes(data.toLowerCase())
        )
      );
    }
  };

  return (
    <div className="App">
      <div className="container">
        <table className="table">
          <thead className="table-primary">
            <tr>
              <th className="col-5">Name</th>
              <th className="col-3">
                Capital
                <br />
                <input
                  className="input-group"
                  type="text"
                  placeholder="filter"
                  onChange={(e) => {
                    handleFilterChange(e.target.value);
                  }}
                />
              </th>
              <th className="col-2">Region</th>
              <th className="col-2">flag</th>
            </tr>
          </thead>
          <tbody>
            <CountriesTable countries={countries} />
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
