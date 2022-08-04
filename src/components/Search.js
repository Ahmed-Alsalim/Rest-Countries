import { useEffect } from "react";
import { useSearch } from "../contexts/SearchContext";

const Search = ({ countriesData, searchResults }) => {
  const { searchTerm } = useSearch();

  useEffect(() => {
    const filteredCountries = countriesData.filter((country) => {
      function filterData(data) {
        return Object.keys(data).some((key) => {
          if (typeof data[key] !== "object") {
            return data[key]
              .toString()
              .turkishToLower()
              .includes(searchTerm.turkishToLower());
          } else {
            return filterData(data[key]);
          }
        });
      }
      return filterData(country);
    });
    console.log(filteredCountries);
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
  return string.toLocaleLowerCase();
};

export default Search;
