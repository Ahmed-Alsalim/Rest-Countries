const CapitalFilter = ({ countriesData, capitalFilter }) => {
  const handleFilterChange = (filter) => {
    const filteredCountries = countriesData.filter(
      (country) =>
        // check if there is capital then check if it includes the search term
        country.capital &&
        country.capital.toLowerCase().includes(filter.toLowerCase())
    );
    capitalFilter(filteredCountries);
  };

  return (
    <div className="form-group align-items-center" style={{ display: "flex" }}>
      <label htmlFor="CapitalInput">Capital</label>
      <input
        className="form-control "
        type="text"
        id="CapitalInput"
        placeholder="filter by capital"
        style={{ width: "100%", marginLeft: "20px" }}
        onChange={(e) => {
          handleFilterChange(e.target.value);
        }}
      />
    </div>
  );
};

export default CapitalFilter;
