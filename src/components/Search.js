import { useEffect } from "react";
import { useSearch } from "../contexts/SearchContext";

const Search = ({ countriesData, searchResults }) => {
  const { searchTerm } = useSearch();

  useEffect(() => {
    const filteredCountries = countriesData.filter(
      (country) =>
        // check if there is capital then check if it includes the search term
        country.capital &&
        (country.capital.toLowerCase().includes(searchTerm.toLowerCase()) ||
          country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          country.region.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    searchResults(filteredCountries);
  }, [searchTerm]);
};
export default Search;
