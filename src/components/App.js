import { useState, useEffect } from "react";
import axios from "axios";
import CountriesTable from "./CountriesTable";
import CapitalFilter from "./CapitalFilter";
import Search from "./Search";

function App() {
  const [countriesData, setCountriesData] = useState([]);
  const [searchFilter, setSearchFilter] = useState([]);
  const [capitalFilter, setCapitalFilter] = useState([]);

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
    setSearchFilter(countriesData);
  }, [countriesData]);

  useEffect(() => {
    setCapitalFilter(searchFilter);
  }, [searchFilter]);

  const searchResults = (data) => {
    setSearchFilter(data);
  };
  const capitalFilterResults = (data) => {
    setCapitalFilter(data);
  };

  return (
    <>
      <Search countriesData={countriesData} searchResults={searchResults} />
      <div className="App">
        <div className="container">
          <table className="table">
            <thead>
              <tr className="align-middle">
                <th className="col-5">Name</th>
                <th className="col-3">
                  <CapitalFilter
                    countriesData={searchFilter}
                    capitalFilter={capitalFilterResults}
                  />
                </th>
                <th className="col-2">Region</th>
                <th className="col-2">flag</th>
              </tr>
            </thead>
            <tbody>
              <CountriesTable countries={capitalFilter} />
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;
