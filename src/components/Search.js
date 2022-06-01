const Search = ({ countriesData, searchResults }) => {
  const handleFilterChange = (filter) => {
    const filteredCountries = countriesData.filter(
      (country) =>
        // check if there is capital then check if it includes the search term
        country.capital &&
        (country.capital.toLowerCase().includes(filter.toLowerCase()) ||
          country.name.toLowerCase().includes(filter.toLowerCase()) ||
          country.region.toLowerCase().includes(filter.toLowerCase()))
    );
    searchResults(filteredCountries);
  };

  return (
    <input
      className="input-group"
      type="text"
      placeholder="search all"
      onChange={(e) => {
        handleFilterChange(e.target.value);
      }}
    />
  );
};

export default Search;
