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
    <input
      className="input-group"
      type="text"
      placeholder="filter by capital"
      onChange={(e) => {
        handleFilterChange(e.target.value);
      }}
    />
  );
};

export default CapitalFilter;
