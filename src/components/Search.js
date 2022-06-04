import { useEffect } from "react";
import { useSearch } from "../contexts/SearchContext";

const Search = ({ countriesData, searchResults }) => {
  const { searchTerm } = useSearch();

  useEffect(() => {
    const filteredCountries = countriesData.filter((country) =>
      Object.keys(country).some((key) =>
        country[key]
          .toString()
          .turkishToLower()
          .includes(searchTerm.turkishToLower())
      )
    );
    searchResults(filteredCountries);
  }, [searchTerm]);
};

// lowering turkish letter "İ" to "i"
String.prototype.turkishToLower = function () {
  let string = this;
  const letters = { İ: "i" };
  string = string.replace(/(([İ]))/g, function (letter) {
    return letters[letter];
  });
  return string.toLowerCase();
};

export default Search;
