import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import CountriesTable from "./CountriesTable";
import CapitalFilter from "./CapitalFilter";
import Search from "./Search";

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

  const capitalFilter = (data) => {
    setCountries(data);
  };

  return (
    <div className="App">
      <div className="container">
        <table className="table">
          <thead className="table-primary">
            <CapitalFilter
              countriesData={countriesData}
              capitalFilter={capitalFilter}
            />
            <Search
              countriesData={countriesData}
              searchResults={capitalFilter}
            />

            <tr>
              <th className="col-5">Name</th>
              <th className="col-3">Capital</th>
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
