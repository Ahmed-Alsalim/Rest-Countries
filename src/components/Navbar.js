import { useSearch } from "../contexts/SearchContext";

const Navbar = () => {
  const { searchTerm, setSearchTerm } = useSearch();

  const handleSearchType = (d) => {
    setSearchTerm(d);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
      <div className="container">
        <h5 className="navbar-brand">Countries</h5>
        <div className="navbar-nav ms-auto me-auto col-md-4 col-sm-7">
          <input
            className="form-control"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={(e) => {
              handleSearchType(e.target.value);
            }}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
