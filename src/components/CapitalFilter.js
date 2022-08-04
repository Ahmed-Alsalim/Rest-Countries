const CapitalFilter = ({ countriesData, capitalFilter }) => {
  const handleFilterChange = (filterTerm) => {
    const filteredCountries = countriesData.filter(
      (country) =>
        country.capital &&
        country.capital.turkishToLower().includes(filterTerm.turkishToLower())
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

// lowering turkish letter "İ" to "i"
String.prototype.turkishToLower = function () {
  let string = this;
  const letters = { İ: "i" };
  string = string.replace(/(([İ]))/g, function (letter) {
    return letters[letter];
  });
  return string.toLocaleLowerCase();
};

export default CapitalFilter;
